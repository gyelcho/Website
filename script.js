function myfunction(){
    var x= document.getElementById("navv");

    if (x.className === "nav"){
        x.className += " responsive";
    }

    else{
        x.className = "nav";
    }
    

}


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplays) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }

     }, duration);
});