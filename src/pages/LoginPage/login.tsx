import * as React from "react";
import TextField from "@mui/material/TextField";
import style from "./login.page.module.scss";
import { useForm } from "react-hook-form";
import { loginUser } from "../../common/api/user.api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const res: any = await loginUser(data);
    localStorage.setItem("token", res.token);
    navigate("/");
  };

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className={style.login}>
      <div className={style.login_header}>
        <h1>Login</h1>
      </div>
      <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
        <h3>User name:</h3>
        <TextField
          id="outlined-basic"
          label="email"
          className={style.input}
          {...register("email", { required: true })}
          variant="outlined"
        />
        <br></br>
        <h3>Password:</h3>
        <TextField
          id="outlined-basic"
          label="pass"
          className={style.input}
          {...register("password", { required: true })}
          variant="outlined"
        />
        <br></br>
        <input type="submit" className={style.login_button} />
        <br></br>
      </form>

      <div>
        <div onClick={goToRegisterPage} className={style.sign_up}>
          Sign Up!
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
