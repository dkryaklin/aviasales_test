import React, { Component } from 'react';

import Header from './Header';
import Filter from './Filter';
import Tickets from './Tickets';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div className="content">
                    <Filter />
                    <Tickets />
                </div>
            </div>
        );
    }
};

export default App;
