/* eslint-disable @next/next/no-img-element */
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
          <p>
            Veremos a seguir um exemplo de Phishing,{" "}
            <u>
              onde um criminoso envia um SMS ao usuário se passando pelo Detran
              e alertando que a sua CNH pode ser suspensa.
            </u>{" "}
            Em seguida, indica um link para que o usuário o acesse para
            regularizar a CNH possivelmente suspensa.
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo1.png"
              className="p-2 d-block mx-auto"
              alt="Print de um SMS de um número fingindo que é do Detran"
              width={400}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Exemplo de SMS falso enviado por criminosos se passando pelo
              Detran. Fonte: Acervo pessoal.
            </figcaption>
          </figure>
          <p>
            A partir deste momento, já é indicado que o usuário <b>nunca</b>{" "}
            clique em um link de um número no qual a pessoa não conhece, pois
            pode ser um link malicioso. Sempre desconfie de links recebidos de
            números que não conhece, especialmente se a mensagem alegar que é de
            um banco ou orgão governamental. Porém, para fins educacionais,
            veremos o que acontece ao clicar no link (malicioso) recebido.
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo2.png"
              className="p-2 d-block mx-auto"
              alt="Print de um site falso do Detran"
              width={700}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Exemplo de uma página falsa imitando uma página do Detran. Fonte:
              Acervo pessoal.
            </figcaption>
          </figure>
          <p>
            Na imagem acima, podemos ver que é uma página bastante similar aos
            sites do governo, tentando convencer que é uma página verídica.
            Entretanto, já podemos identificar um primeiro alerta:{" "}
            <u>
              o site que aparece no navegador se chama &quot;cnhajuda.com&quot;,
              que não está utilizando o domínio &quot;.gov&quot;, que é
              utilizado somente por sites de orgãos governamentais, como o
              próprio Detran.
            </u>{" "}
            Em vez disso, o site utiliza o domínio &quot;.com&quot;, que pode
            ser utilizado por qualquer um.
          </p>
          <p>
            Podemos também identificar outro item suspeito: ao clicar em
            &quot;Termo de Responsabilidade&quot; ou &quot;Política de
            Privacidade&quot;, esses links retornam o usuário à mesma página,
            indicando que não possuem essas páginas, algo incomum de páginas do
            governo. Vamos um pouco mais a fundo neste site ao clicar no botão
            de entrar.{" "}
            <u>
              Lembrando que não se deve clicar e acessar links suspeitos,
              estamos fazendo isso para aprender quais são as formas de
              identificar sites suspeitos como esse.
            </u>
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo3.png"
              className="p-2 d-block mx-auto"
              alt="Print de um site falso de login do Detran"
              width={700}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Exemplo de uma página de login falsa imitando uma página do
              Detran. Fonte: Acervo pessoal.
            </figcaption>
          </figure>
          <p>
            Na imagem acima, podemos ver que o site malicioso faz uma cópia
            bastante similar ao design das páginas de login gov.br, porém algo
            interessante é que nenhum botão além do botão de
            &quot;Continuar&quot; está funcionando. Botões como o &quot;Alto
            Contraste&quot; e o &quot;Login com o seu banco&quot; não são
            clicáveis. Ao inserir um CPF e avançar, nos deparamos com a seguinte
            página:
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo4.png"
              className="p-2 d-block mx-auto"
              alt="Print de um site falso de login do Detran"
              width={700}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Exemplo de uma página falsa do Detran alertando que a CNH está
              vencida e suspensa. Fonte: Acervo pessoal.
            </figcaption>
          </figure>
          <p>
            A página acima mostra os dados do usuário a partir do CPF inserido
            na página anterior, se utilizando de dados encontrados em bancos de
            dados possívelmente acessados de forma ilegal. Neste momento podemos
            ver o efeito principal da estratégia utilizada: a{" "}
            <u>Engenharia Social</u>. A Engenharia Social, neste contexto,
            manipula a vítima a acreditar que está em um site confiável do
            governo, por isso utiliza os dados da vítima para criar essa
            confiança, e que deve urgentemente tomar uma ação para resolver
            algum problema. Por essa razão{" "}
            <b>
              deve-se sempre desconfiar quando alguma mensagem utiliza palavras
              como &quot;ALERTA&quot; ou &quot;URGENTE&quot; no texto e demanda
              realizar alguma ação, especialmente se for relacionada à bancos
              (Compras Indevidas, Empréstimos) ou orgãos governamentais
              (Documentos Vencidos, Imposto de Renda).
            </b>
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo5.png"
              className="p-2 d-block mx-auto"
              alt="Print de um site falso do Detran exigindo pagamento"
              width={700}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Exemplo de uma página falsa do Detran alertando que a CNH está
              vencida e suspensa. Fonte: Acervo pessoal.
            </figcaption>
          </figure>
          <p>
            Na página acima, podemos ver novamente que o golpista tenta infligir
            um senso de urgência para convencer o usuário a fazer um pagamento
            imediatamente, e ao clicar no botão &quot;Gerar Pagamento&quot;, um
            QR Code é gerado para que o usuário faça uma transferência via PIX.
            Mostrando o principal objetivo do golpista: obter dinheiro de forma
            ilícita se passando pelo Detran.
          </p>
          <hr className="mt-5" />
          <h4 className="mb-4 mt-4 text-center">Conclusão</h4>
          <p>
            Nesta unidade, identificamos como o Phishing atua para tentar roubar
            dados ou dinheiro de possíveis vítimas e onde podemos encontrar
            possíveis sinais que estamos lidando com sites ou aplicações falsas.
            Características como links possuindo nomes estranhos ou erros de
            digitação, botões que não fazem nada e/ou erros gramaticais em
            textos, fornecem muitas formas de identificar esses golpes antes de
            acontecerem.{" "}
            <u>
              Nunca clique em links de origem suspeita e nem realize
              transferências ou pagamentos nesses sites desconhecidos e
              duvidosos.
            </u>
          </p>
          <figure className="mt-3 mb-4" style={{ textAlign: "center" }}>
            <img
              src="/unidade1/unidade1_exemplo7.png"
              className="p-2 d-block mx-auto"
              alt="Postagem da página oficial do Detran Amazonas alertando golpe virtual"
              width={700}
            />
            <figcaption style={{ fontSize: "14px" }}>
              Postagem da página oficial do Detran Amazonas alertando golpe
              virtual. Fonte: Instagram - @detranamazonas.
            </figcaption>
          </figure>
          <p>
            Na dúvida,{" "}
            <b>
              sempre busque nos canais oficiais de bancos e orgãos
              governamentais sobre possíveis novos golpes
            </b>
            , que estão surgindo todos os dias, cada vez mais difíceis de
            identificar, mas ao manter a calma e prestar atenção nos detalhes, é
            possível evitar o golpe e não se tornar uma futura vítima.
          </p>
        </div>
        <Quiz quiz={quiz} id={unitId} />
      </div>
    </>
  );
}
