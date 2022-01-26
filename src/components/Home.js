import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        desciption='Order Oline for touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
      />
      <Section
        title='Model Y'
        desciption='Order Oline for touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
      />
      <Section
        title='Model 3'
        desciption='Order Oline for touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
      />
      <Section
        title='Model X'
        desciption='Order Oline for touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        desciption='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        desciption='Solar Roof Costs less Than a New Roof Plus Dolar Pannels '
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        desciption=' '
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  transitiony: 2s;
`;
