import styled from 'styled-components';

export const Container = styled.header`
  background: var(--green);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 0.5rem 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    list-style-type: none;
  
    a {
      text-decoration: none;
      color: var(--text-title);
      filter: brightness(0.9);     
    
      &.active-link {
        font-weight: 500;
        filter: brightness(1);
        border-bottom: #FFF solid 0.25rem;
        padding: 0.7rem;
      }
    }
  }

  .menu-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1rem;
    gap: 1.5rem;
  }

  .avatar {
    margin-left: 0.5rem;
  }
`