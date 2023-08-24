import { Container } from './styles';

export function CreditCards() {
  return (
    <Container>
      <h2>Cartões de crédito</h2>

      <div>
        <h3>Você ainda não cadastrou <br />nenhum cartão</h3>

        <p>Cadastre seus cartões de crédito para começar a acompanhá-los aqui.</p>

        <button type="button">Cadastrar cartão de crédito</button>
      </div>

    </Container>
  );
}