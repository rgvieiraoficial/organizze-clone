import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2'
import { FiArrowDownCircle, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

import morningImg from '../../assets/dashboard/morning-a0414711f8.png';

import { BalanceSummary, Container, QuickAccess } from './styles';

export function Summary() {
  const [showValues, setShowValues] = useState(true);

  function handleShowValues() {
    if (showValues) {
      setShowValues(false);
    } else {
      setShowValues(true);
    }
  }

  return (
    <Container>
      <BalanceSummary>
        <header>
          <div className="profile-box">
            <div className="username-box">
              <div>
                <p>Bom dia,</p>
                <strong>Renato Gonçalves Vieira</strong>
              </div>

              <div>
                <img src={morningImg} alt="Bom dia" />
              </div>
            </div>

            <div className="geral-balance">
              <div>
                <p>saldo geral</p>

                <p>R$ <strong className="balance-value">{showValues ? '1.500,00' : '-----'}</strong></p>
              </div>
              <div>
                <button type="button" onClick={handleShowValues}>
                  {showValues
                    ? <AiOutlineEye className="eye-btn" />
                    : <AiOutlineEyeInvisible className="eye-btn" />
                  }
                </button>
              </div>
            </div>
          </div>
          <div className="balance-resume">
            <div className="balance-box">
              <p>receita mensal</p>

              <p className="income-ammount">R$ {showValues ? '2.900,00' : '-----'}</p>
            </div>

            <div className="balance-box">
              <p>despesa mensal</p>

              <p className="outcome-ammount">R$ {showValues ? '-1.400,00' : '-----'}</p>
            </div>

            <div className="report-box">
              <button type="button">
                <HiArrowTrendingUp className="report-icon" />

                <span>ver relatórios</span>
              </button>
            </div>
          </div>
        </header>
      </BalanceSummary>

      <QuickAccess>
        <header>
          <p className="dash-title">Acesso rápido</p>
          <div className="quick-acess-buttons">
            <div>

              <FiMinusCircle className="dash-btn dash-btn-minus" />

              <p>DESPESA</p>

            </div>

            <div>
              <FiPlusCircle className="dash-btn dash-btn-plus" />

              <p>RECEITA</p>
            </div>

            <div>
              <BiTransfer className="dash-btn dash-btn-transfer" />

              <p>TRANSF.</p>
            </div>

            <div>
              <FiArrowDownCircle className="dash-btn dash-btn-import" />

              <p>IMPORTAR</p>
            </div>
          </div>
        </header>
      </QuickAccess>
    </Container >
  );
}