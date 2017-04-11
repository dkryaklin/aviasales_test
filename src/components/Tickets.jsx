import React from 'react';

import '../css/tickets.css';

import companyLogo from '../images/company_logo.png';
import airplane from '../images/airplane.png';

const Tickets = () => {
    return (
        <div className="tickets">
            <div className="ticket">

                <div className="ticket_left_side">
                    <div className="ticket_company_logo"><img alt="" src={companyLogo} /></div>
                    <button className="ticket_buy_button"><div>Купить</div><div>за 21 040 Р</div></button>
                </div>

                <div className="ticket_right_side">
                    <div className="ticket_info_time">
                        <label className="info_time">09:25</label>
                        <div className="info_change_count">
                            1 пересадка
                            <img alt="" src={airplane} />
                        </div>
                        <label className="info_time">11:45</label>
                    </div>

                    <div className="ticket_info_destinations">
                        <label>VVO, Владивосток</label>
                        <label>Тель-Авив, TLV</label>
                    </div>

                    <div className="ticket_info_dates">
                        <label>9 окт 2016, Пт</label>
                        <label>10 окт 2016, Пт</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Tickets;
