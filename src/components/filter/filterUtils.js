export const isAllFiltersEnabled = (filters) => {
    for (let i = 0; i < filters.length; i++) {
        if (!filters[i].enabled) {
            return false;
        }
    }

    return true;
};

export const filterOnChange = (id, event, filters, filterCallback) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // filter.enabled = value;

    let newStateFilters = [...filters];
    newStateFilters[id] = {...newStateFilters[id], enabled: value};

    filterCallback(newStateFilters);
};

export const filterSelectOnly = (id, event, filters, filterCallback) => {
    event.preventDefault();

    let newStateFilters = [...filters];

    newStateFilters.forEach((item, i) => {
        if (i === id) {
            item.enabled = true;
        } else {
            item.enabled = false;
        }
    });

    filterCallback(newStateFilters);
};

export const filterSelectAll = (event, filters, filterCallback) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    let newStateFilters = [...filters];

    if (value) {
        newStateFilters.forEach(item => item.enabled = true);
    } else {
        newStateFilters.forEach(item => item.enabled = false);
    }

    filterCallback(newStateFilters);
};