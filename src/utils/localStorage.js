const filtersInitialState = [
    {
        enabled: true,
        label: 'Без пересадок'
    }, {
        enabled: true,
        label: '1 пересадка'
    }, {
        enabled: true,
        label: '2 пересадки'
    }, {
        enabled: true,
        label: '3 пересадки'
    }
];

export const readFilters = () => {
    let filters = localStorage.getItem('filters');

    if (filters) {
        return JSON.parse(filters);
    } else {
        return filtersInitialState;
    }
};

export const storeFilters = (filters) => {
    localStorage.setItem('filters', JSON.stringify(filters));
};