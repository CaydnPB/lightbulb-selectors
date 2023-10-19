const bulb1 = document.querySelector("#lightbulb1")
const bulb2 = document.querySelector("#lightbulb2")
const bulb3 = document.querySelector("#lightbulb3")
const subtitle = document.querySelector(".subtitle")
let count = 0;

bulb1.addEventListener("click", function(){
    if (count === 0) {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " time";
    } else {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " times";
    }
    this.classList.toggle("active");
})

bulb2.addEventListener("click", function(){
    if (count === 0) {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " time";
    } else {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " times";
    }
    this.classList.toggle("active");
})

bulb3.addEventListener("click", function(){
    if (count === 0) {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " time";
    } else {
        subtitle.innerHTML = "You've clicked the lights " + (count+=1) + " times";
    }
    this.classList.toggle("active");
})