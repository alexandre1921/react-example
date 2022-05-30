import { useEffect, useState } from 'react';
import firebase, { auth } from '../../utils/firebase';
import { ILoginPayload, IState, IUseLogicReturn } from './types';


const initialState = {
  isUserDataPresent: false,
  user: null,
  listener: null,
};

const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

const emailAndPasswordSignIn = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
}

const onAuthStateChanged = (callback: (user: firebase.User | null) => void) => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user !== null) {
      return callback(user);
    }
    return callback(null);
  });

  return () => {
    unsubscribe();
  };
};

function useLogic(): IUseLogicReturn {
  const [authState, setAuthState] = useState<IState>(initialState);

  useEffect(() => {
    setAuthState(oldAuthState => {
      if (!oldAuthState.listener) {
        const listener = onAuthStateChanged(user => {
          setAuthState(oldState => ({
            ...oldState,
            isUserDataPresent: true,
            user,
          }));
        });

        return {
          ...oldAuthState,
          listener,
        };
      }

      return oldAuthState;
    });

    return () => {
      setAuthState(oldAuthState => {
        oldAuthState?.listener?.();
        return { ...initialState };
      });
    };
  }, []);

  const signIn = (
    provider: 'google' | 'email_and_password' = 'email_and_password',
    { email, password }: ILoginPayload = { email: '', password: '' }
  ): Promise<firebase.auth.UserCredential> => {
    
    if (provider == "google") {
      return googleSignIn();
    } else {
      return emailAndPasswordSignIn(email, password);
    }
  };

  const signOut = (): void => {
    auth.signOut();
    setAuthState(initialState);
  };

  return { signIn, signOut, authState };
}

export default useLogic;
