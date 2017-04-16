import React from 'react';

import { isAllFiltersEnabled, filterSelectAll, filterOnChange, filterSelectOnly } from '../utils';

import '../css/filter.css';

const Filter = ({filters, filterCallback}) => {
    return (
        <div>
            <div className="filter">
                <label className="filter_title">количество пересадок</label>
                <div className="filter_items">

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

                    {
                        filters.map((filter, i) => {
                            return (
                                <label className="filter_item" key={i}>
                                    <input 
                                        id={`filter_hidden_checkbox_${i}`} 
                                        className="filter_hidden_checkbox" 
                                        type="checkbox" 
                                        onChange={event => {filterOnChange(i, event, filters, filterCallback)}} 
                                        checked={filter.enabled} 
                                    />
                                    <span className="filter_item_checkbox"></span>
                                    <label htmlFor={`filter_hidden_checkbox_${i}`} className="filter_item_name">{filter.label}</label>
                                    <label className="filter_item_only" onClick={event => filterSelectOnly(i, event, filters, filterCallback)}>только</label>
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