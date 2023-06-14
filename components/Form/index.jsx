import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";

const Form = () => {
    const [login, setLogin] = useState(true);
    const register = () => {
        setLogin(!login);
    };
    return (
        <motion.div>
            <Box sx={{ marginBottom: "15px" }} className="container-login">
                {login ? <LogIn register={register} /> : <SignUp register={register} />}
            </Box>
        </motion.div>
    );
};

export default Form;
