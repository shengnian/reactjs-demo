import './Hello.css';
import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="Hello-wrapper">
                <h1>Hello world</h1>
            </div>
        )
    }
}