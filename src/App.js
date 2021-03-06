import Wrapper from "./components/Wrapper";
import Balloon from "./components/Balloon";

function App() {
  return (
    <Wrapper>
      <Balloon message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." sender="bot" />

      <Balloon message="Nome e sobrenome" sender="user" />

      <Balloon message="Que satisfação, <nome completo>. Agora que sei seu nome, qual a cidade e estado que você mora?" sender="bot" />

      <Balloon message="Cidade / Estado" sender="user" />

      <Balloon message="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?" sender="bot" />

      <Balloon message="00/00/0000" sender="user" />

      <Balloon message="Agora me fala teu e-mail, por gentileza." sender="bot" />

      <Balloon message="email@email.com" sender="user" />

      <Balloon message="Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!" sender="bot" />

      <Balloon message="stars" sender="user" />

      <button>Salvar</button>
    </Wrapper>
  );
}

export default App;
