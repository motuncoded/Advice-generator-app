const btn = document.querySelector("button");
const quote = document.getElementById ("quote");
const adviceId = document.getElementById("adviceId");
const api = "https://api.adviceslip.com/advice";
const dice = document.querySelector("#dice")

const displayRotation = () =>{
    dice.classList.add("rotate");
    setTimeout(()=>{
        dice.classList.remove("rotate")
    }, 1000)

}
const hideRotation= ()=>{
    dice.classList.remove("rotate")

}



function fetchApi(api){
displayRotation()
    fetch("https://api.adviceslip.com/advice").then((response) =>{
    return response.json();
})
.then((data)=>{
    hideRotation()
    const adviceMessage = data["slip"];
    adviceId.innerHTML = adviceMessage["id"];
    quote.innerHTML = adviceMessage["advice"];

})
}

btn.addEventListener("click", ()=>{
    fetchApi()
    
})




