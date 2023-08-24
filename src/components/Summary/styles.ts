import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  background: #FFF;
  grid-template-columns: 1.3fr 1fr;
`;

export const BalanceSummary = styled.div`
  .profile-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .username-box {
      display: flex;
      align-items: center;
      justify-content: space-around;

      strong {
        display: inline-block;
        margin-top: 0.5rem;
      }

      img {
        margin-top: 1rem;
        margin-left: 0.5rem;
      }
    }
  
    .geral-balance {
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #EBEBEB;
      padding: 0 0 0 1.5rem;

      .balance-value {
        font-size: 1.5rem;
      }

      button[type="button"] {
        margin-top: 0.5rem;
        margin-left: 3rem;
        border: 0;
        background: transparent;
        
        .eye-btn {
          font-size: 1.4rem;
          color: #2e312d;
        }
      }
    }
  }


  .balance-resume {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin-top: 2rem;

    .balance-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: #FEFDF9;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      box-shadow: 0 14px 21px rgba(0,0,0,.06);

      p {
        margin-bottom: 0.5rem;
      }

      .income-ammount {
        font-weight: 700;
        color: var(--green);
      }

      .outcome-ammount {
        font-weight: 700;
        color: var(--red);
      }
    }

    .report-box {
      padding: 1rem;
      background: #FEFDF9;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      box-shadow: 0 14px 21px rgba(0,0,0,.06);
      
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: transparent;
        
        .report-icon {
          font-size: 30px;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

export const QuickAccess = styled.div`
  header {
    margin-left: 2rem;
    padding: 0.5rem 0 0 2rem;
    border-left: 1px solid #EBEBEB;
  }

  .dash-title {
    margin-bottom: 1.2rem;
    font-weight: 700;
    color: var(--text-body);
  }

  .quick-acess-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.5px;
      border: 1px solid #F2F4EF;
      padding: 0.8rem 0.5rem;
      transition: all linear 150ms;

      &:hover{
        cursor: pointer;
        background: #FEFDF9;
      }

      a {
        text-decoration: none;
        color: var(--text-body);
      }

      .dash-btn {
        font-size: 2.688rem;
      }

      .dash-btn-minus {
        color: var(--red);
      }

      .dash-btn-plus {
        color: var(--green);
      }

      .dash-btn-transfer {
        color: var(--gray);
      }

      .dash-btn-import {
        color: var(--blue);
      }

      p {
        margin-top: 0.5rem;
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }
`;