const $form =  document.querySelector('#apod-form')

$form.addEventListener('submit', handleSubmit)

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
    const image = json[0].url;
    document.getElementById("apod-image").setAttribute("src",image)
}