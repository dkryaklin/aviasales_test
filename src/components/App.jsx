import React, { Component } from 'react';

import Header from './Header';
import Filter from './Filter';
import Tickets from './Tickets';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            selectedFilters: [0, 1, 2, 3]
        }
    }

    async loadTickets () {
        let response = await fetch('/tickets.json');
        let { tickets } = await response.json();

        this.setState({ tickets });
    }

    componentDidMount() {
        this.loadTickets();
    }

    render() {
        if (this.state.tickets.length === 0) {
            return <Header />
        }

        return (
            <div>
                <Header />
                
                <div className="content">
                    <Filter />
                    <Tickets tickets={this.state.tickets} />
                </div>
            </div>
        );
    }
};

export default App;
