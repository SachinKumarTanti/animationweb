const month = document.getElementById("month");
const day = document.getElementById("day");
const daate = document.getElementById("daate");
const year = document.getElementById("year");

const date = new Date();
const monthname1 = date.getMonth();
month.innerText= date.toLocaleString("en",{month:"long"})
day.innerText= date.toLocaleString("en",{weekday:"long"})
daate.innerText= date.getDate();
year.innerText= date.getFullYear();
