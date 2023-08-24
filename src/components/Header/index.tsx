import avatarMissingImg from '../../assets/avatar-missing.png';
import bellImg from '../../assets/bell.svg';
import logoImg from '../../assets/logo.svg';
import settingsImg from '../../assets/settings.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Organizze Clone" />
        <div>
          <nav>
            <ul>
              <li className="active"><a href="#" className="active-link">visão geral</a></li>
              <li><a href="#">lançamentos</a></li>
              <li><a href="#">relatórios</a></li>
              <li><a href="#">limite de gastos</a></li>
            </ul>
          </nav>
        </div>
        <div className="menu-options">
          <img src={settingsImg} alt="Configurações" />
          <img src={bellImg} alt="Notificações" />
          <div className="avatar">
            <img src={avatarMissingImg} alt="Avatar do Usuário" height={29} />
          </div>
        </div>
      </Content>
    </Container>
  );
}