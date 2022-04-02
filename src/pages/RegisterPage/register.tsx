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
    console.log(data,'14');
    
    const res: any = await registerUser(data);
    console.log(res);
    localStorage.setItem("token", res.token);
    navigate("/");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={style.register_page}>
      <div className={style.register__page_container}>
        <div>Register</div>
        <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            className={style.input}
            label="name"
            {...register("login", { required: true })}
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            className={style.input}
            label="pass"
            {...register("password", { required: true })}
            variant="outlined"
          />
          <input type="submit" />
        </form>

        <div>
          <div onClick={goToLoginPage} className="move-login-page">
            Already have account?
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
