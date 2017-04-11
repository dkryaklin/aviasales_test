import React from 'react';

import airplane from '../images/airplane.png';

const getDateLabel = (dateStr) => {
    let dateArr = dateStr.split('.');

    let year = +dateArr[2] + 2000;

    let date = new Date(year, +dateArr[1] - 1, +dateArr[0]);

    let weekday = date.toLocaleString("ru", {weekday: 'short'});
    let month = date.toLocaleString("ru", {month: 'short'});

    weekday = weekday.split('');
    weekday[0] = weekday[0].toUpperCase();
    weekday = weekday.join('');

    return `${dateArr[0]} ${month} ${year}, ${weekday}`;
};

const getStopsLabel = (stops) => {
    stops = +stops;

    let stopsLabel = '';

    if (stops === 1) {
        stopsLabel = '1 пересадка';
    } else if (stops > 1 && stops < 5) {
        stopsLabel = `${stops} пересадки`;
    } else if (stops >= 5) {
        stopsLabel = `${stops} пересадок`;
    }

    return stopsLabel;
};

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">

            <div className="ticket_left_side">
                <div className="ticket_company_logo"><img alt="" src={`/images/${ticket.carrier}.png`} /></div>
                <button className="ticket_buy_button"><div>Купить</div><div>за {(+ticket.price).toLocaleString()} Р</div></button>
            </div>

            <div className="ticket_right_side">
                <div className="ticket_info_time">
                    <label className="info_time">{ticket.departure_time}</label>
                    <div className="info_change_count">
                        {getStopsLabel(ticket.stops)}
                        <img alt="" src={airplane} />
                    </div>
                    <label className="info_time">{ticket.arrival_time}</label>
                </div>

                <div className="ticket_info_destinations">
                    <label>{ticket.origin}, {ticket.origin_name}</label>
                    <label>{ticket.destination_name}, {ticket.destination}</label>
                </div>

                <div className="ticket_info_dates">
                    <label>{getDateLabel(ticket.departure_date)}</label>
                    <label>{getDateLabel(ticket.arrival_date)}</label>
                </div>

            </div>
        </div>
    )
}

export default Ticket;
