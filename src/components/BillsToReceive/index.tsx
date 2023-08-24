import { AiFillStar } from 'react-icons/ai';

import { Container } from './styles';

export function BillsToReceive() {
  return (
    <Container>
      <h2>Contas a receber</h2>

      <div className="bill-box">
        <div className="bill-next-text-box">
          <span>Próximas</span>
        </div>

        <ul>

          <li>
            <div className="bill-info">
              <AiFillStar className="bill-icon bill-icon-green" />

              <a href="#" className="bill-title">
                <h3>Salário</h3>
                <span>05/06/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ 2.500,00</span>
            </div>

          </li>

          <li>
            <div className="bill-info">
              <AiFillStar className="bill-icon bill-icon-green" />

              <a href="#" className="bill-title">
                <h3>Salário</h3>
                <span>05/07/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ 2.500,00</span>
            </div>

          </li>

        </ul>

      </div>
    </Container>
  );
}