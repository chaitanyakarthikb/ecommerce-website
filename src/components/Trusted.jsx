import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 9rem 0;
  text-align: center;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.bg};

  img {
    width: 10rem;
  }

  .icon {
    /* font-size: rem; */
    width: 12rem;
    height: 12rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  .logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logos {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-top: 3rem;
    }

    p {
      font-weight: 600;
    }

    .icon {
      /* font-size: rem; */
      width: 12rem;
      height: 12rem;
      padding: 2rem;
      border-radius: 50%;
      background-color: #fff;
      color: #5138ee;
      margin-top: 10px;
    }
  }
`;
const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>Trusted by 1000+ Companies</p>
        <div className="logos">
          <img className="icon" src="/images/adidas.png" alt="" srcset="" />
          <img className="icon" src="/images/aveda.png" alt="" srcset="" />
          <img className="icon" src="/images/puma.png" alt="" srcset="" />
          <img className="icon" src="/images/sony.png" alt="" srcset="" />
          <img className="icon" src="/images/Ea.png" alt="" srcset="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Trusted;
