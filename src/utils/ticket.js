export const getDateLabel = (dateStr) => {
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июля', 'июня', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    let dateArr = dateStr.split('.');

    let yearNum = +dateArr[2] + 2000;
    let monthNum = dateArr[1] - 1;

    let date = new Date(yearNum, monthNum, +dateArr[0]);

    // let weekday = date.toLocaleString("ru", {weekday: 'short'});
    // let month = date.toLocaleString("ru", {month: 'short'});

    // weekday = weekday.split('');
    // weekday[0] = weekday[0].toUpperCase();
    // weekday = weekday.join('');

    let weekday = weekdays[date.getDay()];
    let month = months[monthNum];

    return `${dateArr[0]} ${month} ${yearNum}, ${weekday}`;
};

export const getStopsLabel = (stops) => {
    stops = +stops;

    let stopsLabel = '';

    if (stops === 1) {
        stopsLabel = '1 пересадка';
    } else if (stops > 1 && stops < 5) {
        stopsLabel = `${stops} пересадки`;
    } else if (stops >= 5) {
        stopsLabel = `${stops} пересадок`;
    }

    return stopsLabel;
};

export const getPriceLabel = (price) => {
    price = ("" + price).split('').reverse();

    let result = "";
    price.forEach((char, i) => {
        result = char + result;

        if ((i + 1) % 3 === 0) {
            result = ' ' + result;
        }
    })

    return result;
};