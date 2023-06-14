import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Input, Text, Button } from '@nextui-org/react';
import { Box, Typography } from "@mui/material";
import { SplashScreen } from "../SplashScreen";
import Authorization, { setAuthorized, setUnauthorized } from "../../src/services/Authorization";
import { useDispatch } from "react-redux";
import { LoginStyles } from "./styled";

export const LogIn = ({ register }) => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const [err, setIsErr] = useState(false);
    const dispatch = useDispatch()
    const loginUser = async (e) => {
        try {
            const response = await axios.post("https://coinly-backend.vercel.app/login", data);
            if (response.status === 200) {
                dispatch(setAuthorized());
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('username', data.username);

            } else {
                setIsErr(true)
                dispatch(setUnauthorized());
            }



        } catch (error) {
            console.log(error);
            setIsErr(true);
            dispatch(setUnauthorized())
        }
    };

    return (
        <LoginStyles>
            <motion.form method="post">
                <div className="container-login">
                    <SplashScreen />
                    <Text h2>Log In</Text>
                    <Input

                        aria-label="Username"
                        className="login_input"
                        bordered
                        onChange={(e) => setData({ ...data, username: e.target.value })}
                        required
                        fullWidth
                        placeholder="Username"
                    />
                    <Input
                        aria-label="Password"
                        className="login_input"
                        bordered
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        required
                        fullWidth
                        placeholder="Password"
                        type={"password"}
                    />

                    <Button disabled={data?.username.length < 1 || data?.password.length < 1 ? true : false} onPress={loginUser}>
                        Log In
                    </Button>
                    {err ? <Text color="error">Your username or password are incorrect</Text> : null}
                </div>
                <div className="signUp_action_area"

                >
                    <Text variant="">Don&apos;t have an account?</Text>
                    <Button onPress={() => register()}>Sign Up</Button>
                </div>
            </motion.form>
        </LoginStyles >
    );
};

