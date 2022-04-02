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
    <div className={style.login_page}>
      <div className={style.login_page_container}>
        <div>Login</div>
        <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="email"
            className={style.input}
            {...register("email", { required: true })}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="pass"
            className={style.input}
            {...register("password", { required: true })}
            variant="outlined"
          />
          <input type="submit" />
        </form>

        <div>
          <div onClick={goToRegisterPage} className={style.create_account}>
            Создать аккаунт 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
