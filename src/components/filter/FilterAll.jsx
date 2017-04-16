import React from 'react';

import { filterSelectAll, isAllFiltersEnabled } from '../../utils/filter';

const FilterAll = ({filters, filterCallback}) => {
    return (
        <label className="filter_item">
            <input 
                id={`filter_hidden_checkbox_all`} 
                className="filter_hidden_checkbox" 
                type="checkbox" 
                onChange={event => {filterSelectAll(event, filters, filterCallback)}} 
                checked={isAllFiltersEnabled(filters, filterCallback)} 
            />
            <span className="filter_item_checkbox"></span>
            <label htmlFor={`filter_hidden_checkbox_all`} className="filter_item_name">Все</label>
        </label>
    )
};

export default FilterAll;