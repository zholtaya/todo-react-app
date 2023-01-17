const addZero = (number) => {
    return number < 10 ? `0${number}` : number;
}

const formatDate = (date) => {

    date = new Date(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${addZero(day)}.${addZero(month)}.${year}(${addZero(hours)}:${addZero(minutes)})`;

}

export default formatDate;
