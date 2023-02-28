const btEle = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey ="s2WbTmGL89+GiBV9kGz8oQ==6OFH00jSTLPzIreL";


const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,

    },
};

const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText="Updating...";
    btEle.disabled=true;
    btEle.innerText="Loading...";
    const response = await fetch(apiURL,options);
    const data = await  response.json();

    btEle.disabled= false;
    btEle.innerText="Tell me a joke";

    jokeEl.innerText= data[0].joke ;
    

    } catch (error) {
        jokeEl.innerText="error ,try again later";
        btEle.disabled=false;
        btEle.innerText="Tell me a joke";
        
    }
    
}

btEle.addEventListener("click",getJoke);