/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import api from "@/app/services/api";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  pwConfirm: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { pwConfirm, ...creds } = data;

    console.log(creds);
    // api.post("/signup", creds, { withCredentials: true }).then((data) => {
    //   console.log(creds);
    //   router.push("/login");
    // });
  };

  const password = watch("password");

  return (
    <>
      <div className="container col-3 mt-5">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <span className="text-danger">* = Campo Obrigatório</span>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome *
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha *
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", { required: true, minLength: 6 })}
            />

            {errors.password?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}

            {errors.password?.type === "minLength" && (
              <span className="text-danger">Minímo de 6 (seis) caracteres</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="pwConfirm" className="form-label">
              Confirmar Senha *
            </label>
            <input
              type="password"
              className="form-control"
              id="pwConfirm"
              aria-describedby="pwConfirm"
              {...register("pwConfirm", {
                required: true,
                validate: (value) =>
                  value === password || "Senhas não coincidem",
              })}
            />
            {errors.pwConfirm?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
            {errors.pwConfirm?.type === "validate" && (
              <span className="text-danger">{errors.pwConfirm.message}</span>
            )}
          </div>

          <div className="d-grid col-12">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
