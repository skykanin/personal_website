import * as React from 'react';

import styled from 'styled-components';
import logo from '../../logo.svg';

const Header = styled.div`
  background-color: papayawhip;
  height: 150px;
  padding: 20px;
  color: palevioletred;
`;

const Root = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

export default class App extends React.Component {
  public render() {
    return (
      <Root>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Intro>
      </Root>
    );
  }
}
