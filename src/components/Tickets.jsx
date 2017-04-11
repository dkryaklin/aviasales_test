import React from 'react';

import Ticket from './Ticket';

import '../css/tickets.css';

const Tickets = ({tickets}) => {
    return (
        <div className="tickets">

            {
                tickets.length != 0 ? tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />) : <div className="ticket_empty">¯\_(ツ)_/¯</div>
            }

        </div>
    );
}

export default Tickets;
