"use client";
import { useContext } from "react";
import MiniProfile from "../MiniProfile/MiniProfile";
import { UnitContext } from "@/app/State/UnitProvider";
import { AuthContext } from "@/app/State/AuthProvider";

const units = [
  "31a97a5f-cf39-4b60-bac2-8854b0ef835f",
  "49b73903-8bfd-49ac-a7f7-2277d7679309",
  "c4fff465-cdbe-474d-bbb2-6477dfc17431",
];

export default function Navbar() {
  const { auth } = useContext(AuthContext);
  const { unidadesCompletadas } = useContext(UnitContext);

  const isCompleted = (unitId: string): boolean => {
    return unidadesCompletadas.some(
      (completedUnit) => completedUnit.unitId === unitId
    );
  };

  return (
    <nav
      className="navbar bg-light border-body flex-column position-fixed vh-100"
      style={{ width: "270px" }}
    >
      <div className="container">
        <a className="navbar-brand mt-1" href="/">
          <h4>Identificando Golpes</h4>
        </a>

        <MiniProfile />

        <ul className="nav nav-pills flex-column me-auto mt-2">
          {units.map((unitId, index) => (
            <li className="nav-item" key={unitId}>
              <a
                className={`nav-link ${
                  auth && isCompleted(unitId) ? "text-success" : ""
                }`}
                href={`/unidade/unidade${index + 1}`}
              >
                Unidade {index + 1} {auth && isCompleted(unitId) ? "✅" : ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
