import React from 'react'
import { Button } from '../styles/Button'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  text-align: center;
  padding: 9rem 0;

  h2 {
    font-size: 10rem;
  }
  h3 {
    font-size: 4.2rem;
  }
  p {
    margin: 2rem 0;
  }
`;

const Error = () => {
  return (
    
    <Wrapper>
      <h2>404</h2>
      <h3>UH OH! You're Lost.</h3>
      <p>The page you are looking for does not exist. How you get here is a mystery.But you can click below to go to the Homepage.</p>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>

    </Wrapper>
  )
}

export default Error