const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {
    let date = new Date();
    let h = formatTime(date.getHours());
    let m = formatTime(date.getMinutes());
    let s = formatTime(date.getSeconds());

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}
