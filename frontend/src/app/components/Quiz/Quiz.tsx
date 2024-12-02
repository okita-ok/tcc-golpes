/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import api from "@/app/services/api";
import { AuthContext } from "@/app/State/AuthProvider";
import { UnitContext } from "@/app/State/UnitProvider";
import { Quiz as QuizType } from "@/app/types/quiz";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IQuizProps {
  quiz: QuizType;
  id: string;
}

type Inputs = {
  answer: number;
};

export default function Quiz(props: IQuizProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { unidadesCompletadas, fetchCompletedUnits } = useContext(UnitContext);
  const [quizLock, setQuizLock] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (
      auth &&
      unidadesCompletadas.some(
        (completedUnit) => completedUnit.unitId === props.id
      )
    ) {
      setQuizLock(true);
    }
  }, [unidadesCompletadas]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (!auth) {
      setFeedback("Faça o login para saber a resposta correta!");
      toast.error("Você não está logado.");
    } else if (data.answer != props.quiz.answerIndex) {
      setFeedback("❌ Resposta incorreta, tente novamente.");
    } else {
      api
        .post(`unit/${props.id}`, { withCredential: true })
        .then((data) => {
          setFeedback(null);
          fetchCompletedUnits();
          console.log(data);
          setQuizLock(true);
          toast.success("Parabéns! Unidade Concluída!");
        })
        .catch((err) => {
          if (err.response.status === 404)
            setFeedback("Unidade não encontrada.");
          else {
            setFeedback("Ocorreu um erro.");
          }
        });
    }
  };

  return (
    <>
      <div className="container m-1 p-3 rounded-3 bg-dark-subtle">
        <h4>Hora do Quiz!</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {feedback && <span className="text-danger">{feedback}</span>}
          <p>
            <u>
              <b>Pergunta: {props.quiz.question}</b>
            </u>
          </p>
          <div className="m-1 form-check form-check-inline">
            <label htmlFor="option1" className="form-label">
              {props.quiz.option1}
            </label>
            <input
              type="radio"
              className="form-check-input"
              id="option1"
              value={1}
              disabled={quizLock}
              {...register("answer", { required: true })}
            />
          </div>
          <div className="m-1 form-check form-check-inline">
            <label htmlFor="option2" className="form-label">
              {props.quiz.option2}
            </label>
            <input
              type="radio"
              className="form-check-input"
              id="option2"
              value={2}
              disabled={quizLock}
              {...register("answer", { required: true })}
            />
          </div>
          <div className="m-1 form-check form-check-inline">
            <label htmlFor="option3" className="form-label">
              {props.quiz.option3}
            </label>
            <input
              type="radio"
              className="form-check-input"
              id="option3"
              value={3}
              disabled={quizLock}
              {...register("answer", { required: true })}
            />
          </div>
          <div className="m-1 form-check form-check-inline">
            <label htmlFor="option4" className="form-label">
              {props.quiz.option4}
            </label>
            <input
              type="radio"
              className="form-check-input"
              id="option4"
              value={4}
              disabled={quizLock}
              {...register("answer", { required: true })}
            />
          </div>

          {errors.answer?.type === "required" && (
            <span className="text-danger">Escolha uma opção.</span>
          )}

          <div className="ms-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={quizLock}
            >
              Enviar Resposta
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
