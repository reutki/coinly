import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { SplashScreen } from "../SplashScreen";
import { Button, Input, Text } from "@nextui-org/react";
import { SignUpStyles } from "./styled";

export const SignUp = ({ register }) => {
    const [data, setData] = useState({
        name: "",
        surname: "",
        username: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resp, setResp] = useState("");

    const registerUser = async (e) => {
        try {
            const response = await axios.post("https://coinly-backend.vercel.app/register", data);
            setResp(response.data);
            register();
        } catch (error) {
            console.log(error);
            setResp(error.response.data);
        }
    };

    return (
        <SignUpStyles>

            <motion.form method="post">
                <div className="container-signUp">
                    <SplashScreen />
                    <Text h2>Sign Up</Text>
                    <Input
                        className="signUp-input"
                        aria-label="name-signup"
                        bordered
                        onChange={(e) =>
                            setData((prevState) => ({
                                ...prevState,
                                name: e.target.value,
                            }))
                        }
                        required
                        fullWidth
                        placeholder="Name"
                        sx={{ marginBottom: "15px" }}
                    />
                    <Input
                        className="signUp-input"
                        aria-label="surname-signup"
                        bordered
                        required
                        fullWidth
                        placeholder="Surname"
                        onChange={(e) =>
                            setData((prevState) => ({
                                ...prevState,
                                surname: e.target.value,
                            }))
                        }
                        sx={{ marginBottom: "15px" }}
                    />
                    <Input
                        aria-label="username-signup"
                        className="signUp-input"
                        bordered
                        onChange={(e) =>
                            setData((prevState) => ({
                                ...prevState,
                                username: e.target.value,
                            }))
                        }
                        required
                        fullWidth
                        placeholder="Username"
                        name="username" // add name attribute
                        sx={{ marginBottom: "15px" }}
                    />

                    <Input
                        aria-label="password-signup"
                        className="signUp-input"
                        bordered
                        onChange={(e) =>
                            setData((prevState) => ({
                                ...prevState,
                                password: e.target.value,
                            }))
                        }
                        required
                        fullWidth
                        placeholder="Password"
                        type='password'
                    />
                    <Input
                        aria-label="confirm-password-signup"
                        className="signUp-input"
                        bordered
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                        fullWidth
                        placeholder="Confirm Password"
                        type='password'
                    />
                    <Button
                        disabled={data.name && data.password && data.username && data.surname !== '' && data.password == confirmPassword || null ? false : true}
                        onPress={() => registerUser()}
                        sx={{ width: "100%" }}
                    >
                        Sign Up
                    </Button>
                </div>
                <div className="logIn_action_area"
                    sx={{
                        gridTemplateColumns: "max-content max-content",
                        display: "grid",
                        gridGap: "1rem",
                    }}
                >
                    <Typography variant="body2">Allready have an account?</Typography>
                    <Button onPress={() => register()}>Log In</Button>
                </div>
            </motion.form>
        </SignUpStyles>

    );
};
