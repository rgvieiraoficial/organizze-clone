import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .left-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .right-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;