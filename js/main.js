const $form =  document.querySelector('#apod-form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    console.log("Hola mundo!")
}

/* let year = 2017
let month = 07
let day = 7

async function getData(year, month, day) {
    const response = await
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BAKO9hbFf4bJYTTXAB0udACfhoA9rYw9VeNoCfBy&start_date=${year}-${month}-${day}&end_date=2017-07-10`)
    const json = await response.json();
    console.log(json);
}

getData(year, month, day) */