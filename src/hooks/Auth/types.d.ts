import React from 'react';
import firebase from '../../utils/firebase';

export interface IState {
    isUserDataPresent: boolean;
    user: firebase.User | null;
    listener: (() => void) | null;
}

export interface ILoginPayload {
    email: string;
    password: string;
}

export interface AuthContextData {
    user?: IUserAuth | null;
    isUserDataPresent: boolean;
    signOut: () => void;
    signIn: (
        provider?: 'google' | 'email_and_password',
        payload?: ILoginPayload,
    ) => Promise<firebase.auth.UserCredential>;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export interface IUseLogicReturn {
    signIn: (
        provider?: 'google' | 'email_and_password',
        payload?: ILoginPayload,
    ) => Promise<firebase.auth.UserCredential>;
    signOut: () => void;
    authState: IState;
}
