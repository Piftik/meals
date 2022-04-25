import React from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../common/api/user.api";
import style from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data, "14");

    const res: any = await registerUser(data);
    console.log(res.token);
    localStorage.setItem("token", res.token);
    navigate("/");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={style.register}>
      <div className={style.register_header}>
        <h1>Register</h1>
        <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
          <h3>User name:</h3>
          <TextField
            id="outlined-basic"
            className={style.input}
            label="name"
            {...register("login", { required: true })}
            variant="outlined"
          />
          <br></br>
          <h3>Password:</h3>
          <TextField
            id="outlined-basic"
            className={style.input}
            label="pass"
            {...register("password", { required: true })}
            variant="outlined"
          />
          <br></br>
          <input type="submit" className={style.login_button} />
          <br></br>
        </form>

        <div>
          <div onClick={goToLoginPage} className={style.sign_up}>
            Already have account?
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
