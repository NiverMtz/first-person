/* fetch('https://api.nasa.gov/planetary/apod?api_key=BAKO9hbFf4bJYTTXAB0udACfhoA9rYw9VeNoCfBy&start_date=2017-07-08&end_date=2017-07-10')
.then(data => data.json())
.then(response => {
    console.log(response);
}) */

let year = 2017
let month = 07
let day = 7

async function getData(year, month, day) {
    const response = await
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BAKO9hbFf4bJYTTXAB0udACfhoA9rYw9VeNoCfBy&start_date=${year}-${month}-${day}&end_date=2017-07-10`)
    const json = await response.json();
    console.log(json);
}

getData(year, month, day)