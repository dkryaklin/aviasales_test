export const filterAndSortTickets = (tickets, filters) => {
    return tickets.filter((ticket, i) => {
        const filter = filters[ticket.stops];

        if (filter && filter.enabled) {
            return true;
        }

        return false;
    }).sort((a, b) => {
        return a.price - b.price;
    });
};