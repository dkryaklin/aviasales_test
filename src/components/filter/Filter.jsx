import React from 'react';

import FilterAll from './FilterAll';
import FilterItem from './FilterItem';

import '../../css/filter.css';

const Filter = (props) => {
    const filters = props.filters;

    return (
        <div>
            <div className="filter">
                <label className="filter_title">количество пересадок</label>
                <div className="filter_items">

                    <FilterAll {...props} />
                    {
                        filters.map((filter, i) => <FilterItem {...props} id={i} key={i} />)
                    }

                </div>
            </div>
        </div>
    )
};

export default Filter;