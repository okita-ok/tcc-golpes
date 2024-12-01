"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CompletedUnit } from "../types/completedUnit";
import { AuthContext } from "./AuthProvider";
import api from "../services/api";

interface UnitProviderProps {
  children: ReactNode;
}

interface IUnitContext {
  unidadesCompletadas: CompletedUnit[];
  setUnidadesCompletadas: React.Dispatch<React.SetStateAction<CompletedUnit[]>>;
  pontos: number;
  useAdicionaPontos: () => void;
}

export const UnitContext = createContext<IUnitContext>({
  unidadesCompletadas: [],
  setUnidadesCompletadas: () => {},
  pontos: 0,
  useAdicionaPontos: () => {},
});

const UnitProvider = ({ children }: UnitProviderProps) => {
  const { auth } = useContext(AuthContext);
  const [unidadesCompletadas, setUnidadesCompletadas] = useState<
    CompletedUnit[]
  >([]);
  const [pontos, setPontos] = useState<number>(0);

  useEffect(() => {
    if (auth) {
      api
        .get("/unit/completed")
        .then((res) => {
          setUnidadesCompletadas(res.data);
          setPontos(res.data.length * 100);
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  const useAdicionaPontos = () => {
    setPontos(pontos + 100);
  };

  const value = {
    unidadesCompletadas,
    setUnidadesCompletadas,
    pontos,
    useAdicionaPontos,
  };

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};

export const useUnitContext = () => {
  const unitContext = useContext(UnitContext);

  return unitContext;
};

export default UnitProvider;
