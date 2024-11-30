/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import api from "@/app/services/api";
import { AuthContext } from "@/app/State/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [error, setError] = useState<string | null>(null);
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    api
      .post("/auth/login", data, { withCredentials: true })
      .then((data) => {
        setAuth({ name: data.data.name, userType: data.data.userType });
        router.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401)
          setError("Email e/ou Senha inválidos.");
        else {
          setError("Ocorreu um erro.");
        }
        console.log(err);
      });
  };

  return (
    <>
      <div className="container col-3 mt-5">
        <h1 className="text-center">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <span className="text-danger">{error}</span>}
          <div className="mb-3 mt-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>

        <div className="mt-5">
          <hr />
          <p className="text-center">Não possui uma conta?</p>
          <Link href="/signup">
            <button className="btn btn-warning w-100">Criar uma conta</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
