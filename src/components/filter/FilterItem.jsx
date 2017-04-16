import React from 'react';

import { filterOnChange, filterSelectOnly } from './filterUtils';

const FilterItem = ({id, filters, filterCallback}) => {
    const filter = filters[id];

    return (
        <label className="filter_item">
            <input 
                id={`filter_hidden_checkbox_${id}`} 
                className="filter_hidden_checkbox" 
                type="checkbox" 
                onChange={event => {filterOnChange(id, event, filters, filterCallback)}} 
                checked={filter.enabled} 
            />
            
            <span className="filter_item_checkbox"></span>

            <label htmlFor={`filter_hidden_checkbox_${id}`} className="filter_item_name">{filter.label}</label>
            <label className="filter_item_only" onClick={event => filterSelectOnly(id, event, filters, filterCallback)}>только</label>
        </label>
    )
};

export default FilterItem;