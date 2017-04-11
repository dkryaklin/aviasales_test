import React from 'react';

import airplane from '../images/airplane.png';

const getDateLabel = (dateStr) => {
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июля', 'июня', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    let dateArr = dateStr.split('.');

    let yearNum = +dateArr[2] + 2000;
    let monthNum = dateArr[1] - 1;

    let date = new Date(yearNum, monthNum, +dateArr[0]);

    // let weekday = date.toLocaleString("ru", {weekday: 'short'});
    // let month = date.toLocaleString("ru", {month: 'short'});

    // weekday = weekday.split('');
    // weekday[0] = weekday[0].toUpperCase();
    // weekday = weekday.join('');

    let weekday = weekdays[date.getDay()];
    let month = months[monthNum];

    return `${dateArr[0]} ${month} ${yearNum}, ${weekday}`;
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
