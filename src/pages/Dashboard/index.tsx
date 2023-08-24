import { Summary } from '../../components/Summary';
import { BillsToPay } from '../../components/BillsToPay';
import { BillsToReceive } from '../../components/BillsToReceive';
import { CreditCards } from '../../components/CreditCards';
import { UserBankAccounts } from '../../components/UserBankAccounts';

import { Cards, Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />

      <Cards>
        <div className="left-cards">
          <UserBankAccounts />
          <CreditCards />
        </div>

        <div className="right-cards">
          <BillsToPay />

          <BillsToReceive />
        </div>
      </Cards>
    </Container>
  );
}