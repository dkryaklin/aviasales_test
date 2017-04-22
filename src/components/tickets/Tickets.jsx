import React from 'react';

import Ticket from './Ticket';

import '../../css/tickets.css';

const Tickets = ({tickets}) => {
    if (tickets.length === 0) {
        return (
            <div className="tickets">
                <div className="ticket_empty">¯\_(ツ)_/¯</div>
            </div>
        )
    }

    return (
        <div className="tickets">
            { tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />) }
        </div>
    );
}

export default Tickets;
