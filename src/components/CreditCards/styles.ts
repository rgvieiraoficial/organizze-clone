import styled from 'styled-components';

export const Container = styled.div`
  width: 540px;
  padding: 1rem;
  background: #FFF;
  border-radius: 0.8rem;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 270px;
    margin: 0 auto;
    margin-top: 4rem;

    h3 {
      font-size: 1.063rem;
      text-align: center;
      color: #5C5F5A;
    }

    p {
      font-size: 1rem;
      text-align: center;
      color: #A0A0A0;
      margin: 16px auto 0;
      line-height: 20px;
    }

    button {
      font-size: 1rem;
      font-weight: 500;
      line-height: 40px;
      min-height: 40px;
      width: 100%;
      color: #129E3F;
      background: #DFFCE9;
      border: none;
      margin-top: 1.62rem;
      border-radius: 0.5rem;
    }
  }
`;