const $form =  document.querySelector('#apod-form')

$form.addEventListener('submit', handleSubmit)

var _explanation;
var _title;
var _date;

function handleSubmit(event){
    event.preventDefault();
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    getData(year, month, day)
    event.target.reset()
}

async function getData(year, month, day) {
    const response = await
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BAKO9hbFf4bJYTTXAB0udACfhoA9rYw9VeNoCfBy&start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day  }`)
    const json = await response.json();
    const { date, explanation, title, url } = json[0];
    document.getElementById("apod-card").setAttribute("class", "card text-dark bg-transparent")
    document.getElementById("apod-url").setAttribute("src", url)
    _date = document.getElementById("apod-date")
    _date.textContent += "Date: " + date;
    _explanation = document.getElementById("apod-explanation")
    _explanation.textContent += "Explanation: " + explanation;
    _title = document.getElementById("apod-title")
    _title.textContent += title
}