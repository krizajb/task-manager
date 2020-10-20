import React from 'react';
import axios from "axios";


interface IState {
    text: string,
    author: string
}

export default class Quotes extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);

        this.state = { text : "", author : "" };
        // this.getQuote = this.getQuote.bind(this);
        this.getQuote();
    }

    private getQuote = (): void => {
        axios.get("/").then(response => {
            this.setState({text: response.data.text, author: response.data.author});
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getQuote}>
                    Generate QuoteApp.css'
                </button>
                <h1>{this.state.text}</h1>
                <h3>{"-" + this.state.author}</h3>
            </div>
        )
    }
}
