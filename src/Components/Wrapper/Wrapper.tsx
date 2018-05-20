import * as React from 'react';

import styled from 'styled-components';
import Clock from '../Clock/Clock'


const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100');
    font-family: 'Raleway', sans-serif;
    font-size: 3em;
    position: relative;
    width: 600px;
    left: calc(50% - 300px);
    display: block;
    text-align: center;
    padding-top: 50px;
`;

const Footer = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100');
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    position: relative;
    width: 600px;
    left: calc(50% - 300px);
    display: block;
    text-align: center;
`;

export interface IWrapperProps {
    title: string;
    footer: string;
}

export default class Wrapper extends React.Component<IWrapperProps, {}>{
    public render() {
        return(
           <div>
                <Title >{this.props.title}</Title>
                <Clock />
                <Footer>{this.props.footer}</Footer>
           </div>
        );
    }
}