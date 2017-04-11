import React from 'react';

import '../css/filter.css';

const Filter = ({filters, handleFilterChange}) => {
    const filterOnChange = (filter, key, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        filter.enabled = value;

        const newStateFilters = [...filters];
        newStateFilters[key] = filter;

        handleFilterChange(newStateFilters);
    }

    return (
        <div>
            <div className="filter">
                <label className="filter_title">количество пересадок</label>
                <div className="filter_items">

                    <label className="filter_item">
                        <input className="filter_hidden_checkbox" type="checkbox" defaultChecked={true} />
                        <span className="filter_item_checkbox"></span><label>Все</label>
                    </label>

                    {
                        filters.map((filter, i) => {
                            return (
                                <label className="filter_item" key={i}>
                                    <input className="filter_hidden_checkbox" type="checkbox" onChange={event => {filterOnChange(filter, i, event)}} defaultChecked={filter.enabled} />
                                    <span className="filter_item_checkbox"></span><label>{filter.label}</label>
                                    <label className="filter_item_only">только</label>
                                </label>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
};

export default Filter;



