import React from 'react';

import '../css/filter.css';

const Filter = () => {
    const filters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

    return (
        <div className="filter">
            <label className="filter_title">количество пересадок</label>
            <div className="filter_items">

                <label className="filter_item">
                    <input className="filter_hidden_checkbox" type="checkbox" defaultChecked={true} />
                    <span className="filter_item_checkbox"></span><label>Все</label>
                </label>

                {
                    filters.map((item, i) => {
                        return (
                            <label className="filter_item" key={i}>
                                <input className="filter_hidden_checkbox" type="checkbox" defaultChecked={true} />
                                <span className="filter_item_checkbox"></span><label>{item}</label>
                                <label className="filter_item_only">только</label>
                            </label>
                        )
                    })
                }

            </div>
        </div>
    )
};

export default Filter;



