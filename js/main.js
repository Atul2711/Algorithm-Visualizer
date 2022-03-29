var input_as = document.getElementById("array_size"), array_size = input_as.value;
var input_generate = document.getElementById("generate");
var input_aspeed = document.getElementById("array_speed");

let butt_algo = document.querySelectorAll(".algos button");
console.log(butt_algo[5]);

var bar_sizes = [];
var bars = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";



//Generate new arrays

input_generate.addEventListener("click", generate_array);
input_as.addEventListener("input", updated_as);

function generate_array() {
    cont.innerHTML = "";
    for (var i = 0; i < array_size; i++) {
        bar_sizes[i] = Math.floor(Math.random() * 0.5 * (input_as.max - input_as.min)) + 10;
        bars[i] = document.createElement("div");
        cont.appendChild(bars[i]);
        
        margin_size = 0.1;
        bars[i].style = " margin:0% " + margin_size + "%; background-color:rgb(7, 7, 66); display:inline-block; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (bar_sizes[i]) + "%;";
    }
}

function updated_as() {
    //default
    array_size = input_as.value;
    document.getElementById("array-info").innerHTML="An array with "+array_size+ " elements";
    generate_array();
}

window.onload = updated_as();

for (var i = 0; i < butt_algo.length; i++) {
    butt_algo[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butt_algo.length; i++) {
        console.log(butt_algo[i]);
        butt_algo[i].classList = [];
        butt_algo[i].classList.add("butt_locked");
        butt_algo[i].classList.add("AlgoButton");

        butt_algo[i].disabled = true;
        input_as.disabled = true;
        input_aspeed.disabled = true;
        input_generate.disabled = true;
    }
}


function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}

function success(){
    swal({
        title: "Success !",
        text: "Array sorted successfully",
        icon: "success",
        button: "Try other method",
      });
}



