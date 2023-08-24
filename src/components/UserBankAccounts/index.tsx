import { BiWalletAlt } from 'react-icons/bi';

import intermediumImg from '../../assets/institutions/logos/intermedium.png';
import nubankImg from '../../assets/institutions/logos/nubank.png';
import walletImg from '../../assets/wallet.png';

import { Container } from './styles';

export function UserBankAccounts() {
  return (
    <Container>
      <h2>Minhas contas</h2>

      <input type="checkbox" id="hidden-bank-accounts" name="hidden-bank-accounts" />
      <label>esconder saldo das contas poupanças / investimentos</label>

      <ul>
        <li>
          <a href="">
            <div className="bank-account-info">
              <div className="bank-account-name-box">

                <img src={walletImg} alt="Conta Cofre" width={48} height={48} />

                <div className="bank-acccount-name">
                  <h3>Conta Cofre</h3>
                  <p>Outros</p>
                </div>
              </div>

              <div>
                <p className="account-value">R$ 250,00</p>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div className="bank-account-info">
              <div className="bank-account-name-box">

                <img src={intermediumImg} alt="Inter" width={48} height={48} />

                <div className="bank-acccount-name">
                  <h3>Inter</h3>
                  <p>Conta corrente</p>
                </div>
              </div>

              <div>
                <p className="account-value">R$ 1.450,00</p>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div className="bank-account-info">
              <div className="bank-account-name-box">

                <img src={nubankImg} alt="Inter" width={48} height={48} />

                <div className="bank-acccount-name">
                  <h3>Nubank</h3>
                  <p>Conta corrente</p>
                </div>
              </div>

              <div>
                <p className="account-value">R$ 1.280,00</p>
              </div>
            </div>
          </a>
        </li>
      </ul>

    </Container>
  );
}