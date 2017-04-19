import React from 'react';

import Header from './Header';
import Filter from './filter/Filter';
import Tickets from './tickets/Tickets';

import { AppLoadingMessage, AppErrorMessage, AppNothingToShow } from './Other';

import { filterAndSortTickets } from '../utils/app';
import { readFilters, storeFilters } from '../utils/localStorage';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            filters: [],
            isLoaded: false,
            error: null
        }
    }

    handleFilterChange = (filters) => {
        storeFilters(filters);
        this.setState({filters});
    }

    loadTickets = () => {
        this.setState({
            isLoaded: false,
            error: null
        });

        fetch(`${process.env.PUBLIC_URL}/tickets.json`).then(response => response.json()).then((({tickets}) => {
            this.setState({
                isLoaded: true,
                tickets,
                filters: readFilters()
            });

        })).catch(error => {
            this.setState({ 
                isLoaded: true,
                error: error
            });
        });
    }

    componentDidMount() {
        this.loadTickets();
    }

    render() {
        let content;

        if (!this.state.isLoaded && !this.state.error) {
            content = <AppLoadingMessage />;
        } else if (this.state.isLoaded && this.state.error) {
            content = <AppErrorMessage errorOnClick={this.loadTickets} />;
        } else if (this.state.tickets.length === 0) {
            content = <AppNothingToShow />
        } else {
            content = (
                <div className="content">
                    <Filter filters={this.state.filters} filterCallback={this.handleFilterChange} />
                    <Tickets tickets={filterAndSortTickets(this.state.tickets, this.state.filters)} />
                </div>
            );
        }

        return (
            <div>
                <Header />
                {content}
            </div>
        );
    }
};

export default App;

