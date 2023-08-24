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

  .bill-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;

    .bill-next-text-box {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      border-radius: 0.5rem;
      background: #F8F8F8;
      padding: 0.5rem;

      span {
        font-weight: 500;
        color: #858782;
      }
    }

    ul {
      list-style-type: none;
    
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid #EBEBEB;
      
        &:last-child {
          border-bottom: none;
        }
      }

      .bill-info {
        display: flex;
        align-items: center;

        .bill-icon {
          width: 35px;
          height: 35px;
          padding: 0.5rem;
          border-radius: 100%;
          color: #FFF;
        }

        .bill-icon-green {
          background: rgb(43, 220, 169);
        }

        .bill-title {
          text-decoration: none;

          h3 {
            font-size: 1rem;
            font-weight: 400;
            margin-left: 0.8rem;
            color: #000;
          }

          span {
            font-size: 0.93rem;
            margin-top: 0.25rem;
            margin-left: 0.8rem;
            color: #A0A0A0;
          }
        }
      }

      .bill-value {
        span {
          font-size: 1rem;
          font-weight: 700;
          color: #858782;
        }
      }
    }
  }
`;