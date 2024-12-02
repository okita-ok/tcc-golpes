import Quiz from "@/app/components/Quiz/Quiz";

const unitId = "31a97a5f-cf39-4b60-bac2-8854b0ef835f";

const quiz = {
  question:
    "Qual das alternativas abaixo está de acordo com o conceito de Phishing?",
  option1:
    "O usuário recebe uma mensagem de um familiar que diz que trocou de número e depois pede uma transferência via PIX.",
  option2:
    "O usuário é convencido à acessar uma página falsa que solicita os dados do usuário para roubar suas informações.",
  option3:
    "O usuário vê um anuncio de um produto à um preço abaixo do comum, decide fazer a compra, porém não recebe o produto.",
  option4:
    "O usuário recebe um email de uma pessoa milionária desconhecida falando que está apaixonada por ela, e que vai mandar um presente, porém fala que precisa de uma transferência bancária para enviar esse presente.",
  answerIndex: 2,
};

export default function Unidade1() {
  return (
    <>
      <div className="container col-9 mt-2">
        <h3 className="mt-4 mb-4 text-center">Unidade 1</h3>
        <div className="mt-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Quiz quiz={quiz} id={unitId} />
      </div>
    </>
  );
}
