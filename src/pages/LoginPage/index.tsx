import { Center } from "@chakra-ui/react";
import { Spacer, Box, FormLabel, Input, Button, Spinner } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

function LoginPage() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const { signIn, isUserDataPresent } = useAuth();
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRef.current?.value !== undefined && passwordRef.current?.value !== undefined) {
            signIn('email_and_password', {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }).then(() => {
                navigate('/');
            });
        }
    }
    
    return (
        isUserDataPresent ? 
            <Box m="25px">
                <form onSubmit={handleOnSubmit}>
                    <FormLabel htmlFor="email"><b>Username</b></FormLabel>
                    <Input ref={emailRef} type="email" placeholder="Enter email" name="email" required/>
                    <Spacer/>
                    <FormLabel htmlFor="psw"><b>Password</b></FormLabel>
                    <Input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required/>
                    <Box display='flex' mt="5px">
                        <Button colorScheme={"blue"} type="submit">Login</Button>
                        <Spacer></Spacer>
                        <Button colorScheme={"green"} onClick={() => signIn("google")} type="button">Login com google</Button>
                    </Box>
                </form>
            </Box>
        :
        <Center><Spinner/></Center>
    );
}

export default LoginPage;