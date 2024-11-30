"use client";

import { AuthContext } from "@/app/State/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

function MiniProfile() {
  const points = 200;

  const { auth } = useContext(AuthContext);

  return (
    <>
      <div
        className="container-fluid mt-2 pt-2 pb-1 rounded-3 bg-secondary-subtle"
        style={{ minHeight: "70px" }}
      >
        Olá, <b>{auth ? auth.name : "Faça seu Login!"}</b>
        <br />
        {auth && points}
        {!auth && (
          <Link href={"/login"} className="d-grid">
            <button className="btn btn-secondary mt-2 mb-2">
              Entrar / Cadastrar
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default MiniProfile;
