import React, { Component } from 'react';
import './ClockDemo.css';


class Clock extends Component {
    clockInterval = "";
    constructor(props) {
        super(props);
        this.handleDate = this.handleDate.bind(this);
        this.state = {
            date: new Date(),
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        
        
    }
    handleDate() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            this.setState({ hours, minutes, seconds });
    }

    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }


    render() {
        const { hours, minutes, seconds } = this.state;
        const secondss = {
            transform: `rotate(${seconds * 6}deg)`
        };
        const minutess = {
            transform: `rotate(${minutes * 6}deg)`
        };
        const hourss = {
            transform: `rotate(${hours * 30}deg)`
        };
        return (
            
            <div className="clock">
                <div className="hand hour" style={hourss}></div>
                <div className="hand minute" style={minutess}></div>
                <div className="hand second" style={secondss}></div>
                <a className="number number1">12</a>
                <a className="number number2">3</a>
                <a className="number number3">6</a>
                <a className="number number4">9</a>
            </div>


        );
    }
}


export default Clock;

