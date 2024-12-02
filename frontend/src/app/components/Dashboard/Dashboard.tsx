"use client";

import { AuthContext } from "@/app/State/AuthProvider";
import { UnitContext } from "@/app/State/UnitProvider";
import { useContext } from "react";

export const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const { unidadesCompletadas } = useContext(UnitContext);

  return (
    <>
      <div className="container-fluid mt-5 p-2 rounded-3 bg-secondary-subtle text-center">
        <h4>
          <u>Dashboard</u>
        </h4>
        {!auth && "Faça o login para visualizar seus dados na Dashboard!"}
        {auth && (
          <>
            <h5>Unidades Concluídas: {unidadesCompletadas.length}</h5>
            <h5>Pontos Obtidos: {unidadesCompletadas.length * 100} pts</h5>
          </>
        )}
      </div>
    </>
  );
};
