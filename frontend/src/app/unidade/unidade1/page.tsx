import Quiz from "@/app/components/Quiz/Quiz";

const unitId = "31a97a5f-cf39-4b60-bac2-8854b0ef835f";

const quiz = {
  question:
    "Qual das alternativas abaixo está de acordo com o conceito de Phishing?",
  option: [
    "O usuário recebe uma mensagem de um familiar que diz que trocou de número e depois pede uma transferência via PIX.",
    "O usuário é convencido à acessar uma página falsa que solicita os dados do usuário para roubar suas informações.",
    "O usuário vê um anuncio de um produto à um preço abaixo do comum, decide fazer a compra, porém não recebe o produto.",
    "O usuário recebe um email de uma pessoa milionária desconhecida falando que está apaixonada por ela, e que vai mandar um presente, porém fala que precisa de uma transferência bancária para enviar esse presente.",
  ],
  answerIndex: 2,
};

export default function Unidade1() {
  return (
    <>
      <div className="container col-9 mt-2">
        <h3 className="mt-4 mb-4 text-center">Unidade 1 - Phishing</h3>
        <div className="mt-2">
          <p>
            O <u>Phishing</u> é um dos golpes mais comuns da Internet, onde
            criminosos enviam mensagens via Email, SMS ou Whatsapp, se passando
            por bancos ou lojas, pedindo para que o usuário insira ou atualize
            suas informações. Nessas mensagens os criminosos inserem links ou
            aplicações maliciosas, que são similares aos sites e aplicativos
            originais, porém são feitos com o único objetivo de roubar dados
            sensíveis do usuário.
          </p>
        </div>
        <Quiz quiz={quiz} id={unitId} />
      </div>
    </>
  );
}
