import React, { Component } from 'react';

import Header from './Header';
import Filter from './filter/Filter';
import Tickets from './Tickets';

import { filterTickets } from '../utils';
import { readFilters, storeFilters } from '../localStorage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            filters: [],
            isLoaded: false,
            error: null
        }

        this.handleFilterChange = (filters) => {
            storeFilters(filters);
            this.setState({filters});
        };

        this.loadTickets = () => {
            this.setState({
                isLoaded: false,
                error: null
            });

            fetch('/tickets.json').then(response => response.json()).then((({tickets}) => {
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
        };
    }

    componentDidMount() {
        this.loadTickets();
    }

    render() {
        let content;

        if (!this.state.isLoaded && !this.state.error) {
            content = <div className="content">Загрузка</div>
        } else if (this.state.isLoaded && this.state.error) {
            content = (
                <div className="content error">
                    <div className="error_message">Ошибка при загрузке</div>
                    <button className="error_button" onClick={this.loadTickets}>Повторить</button>
                </div>
            );
        } else if (this.state.tickets.length === 0) {
            content = <div className="content">Ничего не найдено</div>
        } else {
            content = (
                <div className="content">
                    <Filter filters={this.state.filters} filterCallback={this.handleFilterChange} />
                    <Tickets tickets={filterTickets(this.state.tickets, this.state.filters)} />
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
