import * as React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 500px;
    height: 500px;
    position: relative;
    left: calc(50% - 250px);
`;

const Face = styled.circle`
    stroke-width: 2px;
    stroke: #fff;
`;

const Hour = styled.line`
    stroke-width: 1px;
    fill: #fff;
    stroke: #fff;
`;

const Min = Hour;

const Sec = styled.line`
    stroke-width: 1px;
    fill: #333;
    stroke: #f55;
`;

export interface IClockProps {
    test: string
}

export interface IClockState {
    SecX: number;
    SecY: number;
    MinX: number;
    MinY: number;
    HourX: number;
    HourY: number;
    Seconds: number;
}

export default class Clock extends React.Component<IClockProps, IClockState> {
    constructor(props: IClockProps) {
        super(props);
        this.state = {Seconds: 0, SecX: 50, SecY: 15, MinX: 50, MinY: 15, HourX: 50, HourY: 30};
        setInterval(() => {this.tick();}, 1000);
    }

    public render() {
        return(
            <Container>
                <svg viewBox="0 0 100 100">
                    <Face cx="50" cy="50" r="45"/>
                    <g>
                        <Hour x1="50" y1="50" x2={this.state.HourX} y2={this.state.HourY} />
                        <Min x1="50" y1="50" x2={this.state.MinX} y2={this.state.MinY}/>
                        <Sec x1="50" y1="50" x2={this.state.SecX} y2={this.state.SecY} />
                        <circle cx="50" cy="50" r="0.1" stroke="#f55" fill="#f55"/>
                    </g>
                </svg>
            </Container>
        );
    }

    private tick(): void {
        const prev = this.state.Seconds;
        this.setState({Seconds: prev + 1});
        this.updateSecondsHand();
        this.updateMinuteHand();
        this.updateHourHand();
    }

    private updateSecondsHand(): void {
        const x = 50 + 35 * Math.cos(2*Math.PI/60 * this.state.Seconds - Math.PI/2);
        const y = 50 + 35 * Math.sin(2*Math.PI/60 * this.state.Seconds - Math.PI/2);
        this.setState({
            SecX: x, SecY: y
        });
    }

    private updateMinuteHand(): void {
        const x = 50 + 35 * Math.cos(2*Math.PI/Math.pow(60, 2) * this.state.Seconds - Math.PI/2);
        const y = 50 + 35 * Math.sin(2*Math.PI/Math.pow(60, 2) * this.state.Seconds - Math.PI/2);
        this.setState({
            MinX: x, MinY: y
        });
    }

    private updateHourHand(): void {
        const x = 50 + 20 * Math.cos(2*Math.PI/43200 * this.state.Seconds - Math.PI/2);
        const y = 50 + 20 * Math.sin(2*Math.PI/43200 * this.state.Seconds - Math.PI/2);
        this.setState({
            HourX: x, HourY: y
        });
    }
}