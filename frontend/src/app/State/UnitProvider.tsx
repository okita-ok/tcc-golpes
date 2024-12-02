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
  fetchCompletedUnits: () => void;
}

export const UnitContext = createContext<IUnitContext>({
  unidadesCompletadas: [],
  setUnidadesCompletadas: () => {},
  pontos: 0,
  useAdicionaPontos: () => {},
  fetchCompletedUnits: () => {},
});

const UnitProvider = ({ children }: UnitProviderProps) => {
  const { auth } = useContext(AuthContext);
  const [unidadesCompletadas, setUnidadesCompletadas] = useState<
    CompletedUnit[]
  >([]);
  const [pontos, setPontos] = useState<number>(0);

  const fetchCompletedUnits = () => {
    if (auth) {
      api
        .get("/unit/completed")
        .then((res) => {
          setUnidadesCompletadas(res.data);
          setPontos(res.data.length * 100);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchCompletedUnits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const useAdicionaPontos = () => {
    setPontos(pontos + 100);
  };

  const value = {
    unidadesCompletadas,
    setUnidadesCompletadas,
    pontos,
    useAdicionaPontos,
    fetchCompletedUnits,
  };

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};

export const useUnitContext = () => {
  const unitContext = useContext(UnitContext);

  return unitContext;
};

export default UnitProvider;
