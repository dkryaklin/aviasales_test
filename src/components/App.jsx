import React, { Component } from 'react';

import Header from './Header';
import Filter from './Filter';
import Tickets from './Tickets';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            filters: [{
                enabled: true,
                label: 'Без пересадок'
            }, {
                enabled: true,
                label: '1 пересадка'
            }, {
                enabled: true,
                label: '2 пересадки'
            }, {
                enabled: true,
                label: '3 пересадки'
            }]
        }

        this.handleFilterChange = (filters) => {
            localStorage.setItem('filters', JSON.stringify(filters));

            this.setState({filters});
        }
    }

    async loadTickets () {
        let response = await fetch('/tickets.json');
        let { tickets } = await response.json();

        this.setState({ 
            tickets,
            filters: localStorage.getItem('filters') ? JSON.parse(localStorage.getItem('filters')) : this.state.filters
        });
    }

    componentDidMount() {
        this.loadTickets();
    }

    render() {
        if (this.state.tickets.length === 0) {
            return <Header />
        }

        const filteredTickets = this.state.tickets.filter((ticket, i) => {
            const filter = this.state.filters[ticket.stops];

            if (filter && filter.enabled) {
                return true;
            }

            return false;
        });

        return (
            <div>
                <Header />
                
                <div className="content">
                    <Filter filters={this.state.filters} handleFilterChange={this.handleFilterChange} />
                    <Tickets tickets={filteredTickets} />
                </div>
            </div>
        );
    }
};

export default App;
