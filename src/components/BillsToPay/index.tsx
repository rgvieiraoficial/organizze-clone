import { AiFillHome } from 'react-icons/ai';
import { BiBarcode } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

import { Container } from './styles';

export function BillsToPay() {
  return (
    <Container>
      <h2>Contas a pagar</h2>

      <div className="bill-box">
        <div className="bill-next-text-box">
          <span>Próximas</span>
        </div>

        <ul>

          <li>
            <div className="bill-info">
              <BiBarcode className="bill-icon bill-icon-purple" />

              <a href="#" className="bill-title">
                <h3>Internet</h3>
                <span>10/06/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ -80,00</span>
            </div>

          </li>

          <li>
            <div className="bill-info">
              <AiFillHome className="bill-icon bill-icon-blue" />

              <a href="#" className="bill-title">
                <h3>Aluguel</h3>
                <span>15/06/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ -1.850,00</span>
            </div>

          </li>

          <li>
            <div className="bill-info">
              <AiFillHome className="bill-icon bill-icon-blue" />

              <a href="#" className="bill-title">
                <h3>Conta de Luz</h3>
                <span>20/06/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ -40,00</span>
            </div>

          </li>


          <li>
            <div className="bill-info">
              <BiBarcode className="bill-icon bill-icon-purple" />

              <a href="#" className="bill-title">
                <h3>Internet</h3>
                <span>10/07/2023</span>
              </a>
            </div>

            <div className="bill-value">
              <span>R$ -80,00</span>
            </div>

          </li>

        </ul>

        <div className="bills-to-pay-more">
          <a href="#">
            <span>ver mais</span>

            <IoMdArrowDropdown />
          </a>
        </div>

      </div>

    </Container>
  );
}