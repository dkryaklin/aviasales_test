export const filterTickets = (tickets, filters) => {
    return tickets.filter((ticket, i) => {
        const filter = filters[ticket.stops];

        if (filter && filter.enabled) {
            return true;
        }

        return false;
    });
};