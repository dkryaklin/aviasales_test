import React from 'react';

import { getDateLabel, getStopsLabel, getPriceLabel } from '../../utils/ticket';

import airplane from '../../images/airplane.png';

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">

            <div className="ticket_left_side">
                <div className="ticket_company_logo"><img alt="" src={`http://pics.avs.io/120/50/${ticket.carrier}.png`} /></div>
                <button className="ticket_buy_button"><div>Купить</div><div>за {getPriceLabel(ticket.price)} Р</div></button>
            </div>

            <div className="ticket_right_side">
                <div className="ticket_info_time">
                    <div className="info_time">{ticket.departure_time}</div>
                    <div className="info_change_count">
                        {getStopsLabel(ticket.stops)}
                        <img alt="" src={airplane} />
                    </div>
                    <div className="info_time">{ticket.arrival_time}</div>
                </div>

                <div className="ticket_info_destinations">
                    <div>{ticket.origin}, {ticket.origin_name}</div>
                    <div>{ticket.destination_name}, {ticket.destination}</div>
                </div>

                <div className="ticket_info_dates">
                    <div>{getDateLabel(ticket.departure_date)}</div>
                    <div>{getDateLabel(ticket.arrival_date)}</div>
                </div>

            </div>
        </div>
    )
}

export default Ticket;
