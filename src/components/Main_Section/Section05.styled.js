import styled from 'styled-components';


export const Section05Wrap = styled.section`
  padding: 200px 280px;
  border-bottom: 2px solid #e3e3e3;

  .header {
    text-align: center;
    margin-bottom: 100px;

    h3 {
      font-size: 20px;
      color: #ff7710;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 48px;
      font-weight: 600;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    width: 1250px;

    > div {
      cursor: pointer;
      background-color: #f5f5f5;
      width: 290px;

      > div {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px 25px;

        h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .text {
          padding-bottom: 20px;
          border-bottom: 2px solid #e3e3e3;
          color: #737373;
        }

        .info {
          color: #a6a6a6;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 60px 280px;

  .left {
    width: 50%;

    > img {
      width: 140px;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.5;
      margin-bottom: 20px;
    }

    > div {
      display: flex;

      > div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        background-color: #111111;
        border-radius: 50%;
        margin-right: 15px;

        .instar {
          width: 18px;
          height: 18px;
        }

        .youtube {
          width: 21px;
          height: 14px;
        }

        .branch {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: space-between;

    > div {
      h3 {
        font-weight: 600;
        margin-bottom: 30px;
      }

      > p {
        margin-bottom: 15px;
      }

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        p {
          margin-right: 10px;
        }

        img {
          cursor: pointer;
          width: 13px;
          height: 13px;
        }
      }
    }
  }
`;