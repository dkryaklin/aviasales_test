import React from 'react';

import Ticket from './Ticket';

import '../css/tickets.css';

const Tickets = ({tickets}) => {
    return (
        <div className="tickets">

            {
                tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />)
            }

        </div>
    );
}

export default Tickets;
