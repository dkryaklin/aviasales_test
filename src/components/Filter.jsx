import React from 'react';

import '../css/filter.css';

const Filter = ({filters, handleFilterChange}) => {
    const filterOnChange = (filter, key, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        filter.enabled = value;

        let newStateFilters = [...filters];
        newStateFilters[key] = filter;

        handleFilterChange(newStateFilters);
    }
    
    const filterOnly = (filter, key) => {
        let newStateFilters = [...filters];

        newStateFilters.forEach(item => item.enabled = false);
        newStateFilters[key].enabled = true;

        handleFilterChange(newStateFilters);
    }

    const changeAllFilters = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        let newStateFilters = [...filters];

        if (value) {
            newStateFilters.forEach(item => item.enabled = true);
        } else {
            newStateFilters.forEach(item => item.enabled = false);
        }

        handleFilterChange(newStateFilters);
    }

    let isAllFiltersEnabled = true;
    filters.forEach(item => {
        if (!item.enabled) {
            isAllFiltersEnabled = false;
        }
    });

    return (
        <div>
            <div className="filter">
                <label className="filter_title">количество пересадок</label>
                <div className="filter_items">

                    <label className="filter_item">
                        <input className="filter_hidden_checkbox" type="checkbox" onChange={changeAllFilters} checked={isAllFiltersEnabled} />
                        <span className="filter_item_checkbox"></span><label className="filter_item_name">Все</label>
                    </label>

                    {
                        filters.map((filter, i) => {
                            return (
                                <label className="filter_item" key={i}>
                                    <input className="filter_hidden_checkbox" type="checkbox" onChange={event => {filterOnChange(filter, i, event)}} checked={filter.enabled} />
                                    <span className="filter_item_checkbox"></span><label className="filter_item_name">{filter.label}</label>
                                    <label className="filter_item_only" onClick={() => filterOnly(filter, i)}>только</label>
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



