import { Dashboard } from "./components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="container col-9 mt-2">
      <h3 className="mt-4 mb-4 text-center">Identificando Golpes</h3>
      <div className="mt-2">
        <p>
          Bem vindo(a) ao <b>Identificando Golpes</b>, onde o objetivo dessa
          aplicação é ensinar pessoas a identificar golpes virtuais, sejam eles
          em sites, anúncios, mensagens, entre outros. Os golpes virtuais estão
          se tornando cada vez mais frequentes na Internet, devido ao grande
          crescimento da Internet e das Redes Sociais, se tornando cada vez mais
          complexos e avançados. Você provavelmente conhece alguém que já foi
          vítima de algum golpe virtual.
        </p>
        <p>
          Esses golpes virtuais, na grande maioria da vezes, se utilizam da
          <b> Engenharia Social</b> para convencer você que teve seus dados
          roubados ou sua conta foi invadida, por exemplo. Essa técnica é
          utilizada para convencer você enviar seus dados para um criminoso ou
          para entrar em um site malicioso para roubar os seus dados, onde o
          site é feito para parecer com o site original, em especial sites de
          bancos.
        </p>
        <h5 className="text-center mt-3">
          <u>
            Complete as unidades, aprenda a se proteger e ganhe pontos de XP!
          </u>
        </h5>
      </div>
      <Dashboard />
    </div>
  );
}
