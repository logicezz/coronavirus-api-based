var statButton = document.getElementsByClassName("statButton")[0];
var input = document.getElementsByClassName("countryInput")[0];
var results = document.getElementsByClassName("results")[0];

results.style.display = "none";

function countryURL(input){
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${input.value}`)
    .then((request)=>{
        return request.json();
    })
    .then((data)=>{
        results.style.display = "";
        results.innerHTML = `<h2>${data.country} Results</h2>
                                        <p>Total Case Confirmed: <span>${data.cases}</span></p>
                                        <p>Total Deaths: <span>${data.deaths}</span></p>
                                        <p>Total Recovered: <span>${data.recovered}</span></p>`;
    }); 
}

statButton.addEventListener("click", (e) => {
    e.preventDefault();
    countryURL(input);
});
