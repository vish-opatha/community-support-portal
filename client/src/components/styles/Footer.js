import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <div>
        <Section>
          <a href="#abc">Meet the Developer</a>
          <a href="#cbd">Meet them</a>
        </Section>
      </div>
    </>
  );
};

export default Footer;

const Section = styled.div`
  padding: 0 2rem;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  height: 10rem;
  background: #720026;
`;

// const link
