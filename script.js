async function apiCall(){
    let data = await fetch("https://meowfacts.herokuapp.com/");

    let finalresult = await data.json();
    let ultimatefinal = finalresult.data[0];

    document.getElementById('para').innerText = ultimatefinal;
}