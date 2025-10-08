import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`;
const PageNavigation = ({ name }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, []);

  return (
    <Wrapper>
      <NavLink ref={targetRef} to={"/"}>
        Home
      </NavLink>
      {"/"}
      {name}
    </Wrapper>
  );
};

export default PageNavigation;
