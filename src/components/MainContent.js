import React from 'react';
import styled from 'styled-components';
import AgencyLogin from './AgencyLoginForm';
import AgencySignup from './AgencySignup';

const MainContent = () => {
  return (
    <>
      <div>
        <Section>
          <Para>
            We are here provide a information, to get the support you want. You
            are valued, loved and bleseed!
          </Para>
        </Section>
        <AgencyLogin />
      </div>
      <AgencySignup />
    </>
  );
};

export default MainContent;

const Section = styled.div`
  //   padding: 0 2rem;
  display: flex;
  // justify-content: space-between;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Para = styled.p`
  text-color: black;
`;
