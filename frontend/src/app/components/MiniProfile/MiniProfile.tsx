"use client";

import api from "@/app/services/api";
import { AuthContext } from "@/app/State/AuthProvider";
import { UnitContext } from "@/app/State/UnitProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

function MiniProfile() {
  const { auth, setAuth } = useContext(AuthContext);

  const { pontos } = useContext(UnitContext);

  const router = useRouter();

  const logout = () => {
    api
      .post("/auth/logout")
      .then(() => {
        console.log("Logout realizado.");
        toast.success("Logout feito com sucesso!");
        localStorage.removeItem("auth");
        setAuth(null);
        router.push("/");
      })
      .catch((err) => {
        if (err.response.status === 400) toast.error("O logout já foi feito");
        else {
          console.log("500 - Ocorreu um erro no servidor.");
        }
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="container-fluid mt-2 pt-2 pb-1 rounded-3 bg-primary-subtle"
        style={{ minHeight: "70px" }}
      >
        Olá, <b>{auth ? auth.name : "Faça seu Login!"}</b>
        <br />
        {auth && (
          <>
            Pontuação: {pontos}
            <div className="d-grid">
              <button className="btn btn-danger mt-2 mb-2" onClick={logout}>
                Fazer Logout
              </button>
            </div>
          </>
        )}
        {!auth && (
          <Link href={"/login"} className="d-grid">
            <button className="btn btn-dark mt-2 mb-2">Entrar</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default MiniProfile;
