const btn = document.querySelector("button");
const quote = document.getElementById ("quote");
const adviceId = document.getElementById("adviceId");
const api = "https://api.adviceslip.com/advice";





function fetchApi(api){

    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" }).then((response) =>{
    return response.json();
})
.then((data)=>{
    const adviceMessage = data["slip"];
    adviceId.innerHTML = adviceMessage["id"];
    quote.innerHTML = adviceMessage["advice"];

})
}

btn.addEventListener("click", ()=>{
    fetchApi()
})



