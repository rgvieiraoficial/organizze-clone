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

  input[type="checkbox"] {
    margin-top: 1rem;
    margin-right: 0.5rem;
  }

  ul {
    list-style-type: none;

    li {
      margin-top: 1rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid #EBEBEB;

      &:last-child {
        border-bottom: none;
      }
    }

    a {
      text-decoration: none;
    
      .bank-account-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
      
        .bank-account-name-box {
          display: flex;
          align-items: center;
          
          h3 {
            font-size: 1rem;
            font-weight: 400;
            margin-left: 0.5rem;
            color: #000000;
          }

          p {
            margin-top: 0.25rem;
            margin-left: 0.5rem;
            color: #A0A0A0;
          }

          img {
            border-radius: 100%;
          }
        }

        .account-value {
          font-weight: 500;
          color: var(--blue);
        }
      }
    }
  }
`;