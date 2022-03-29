var speed=1000;

input_aspeed.addEventListener("input",vis_speed);

function vis_speed(){
    var array_speed=input_aspeed.value ;
    switch(parseInt(array_speed)){
        case 1:speed=1;
        break;
        case 2:speed=10;
        break;
        case 3:speed=100;
        break;
        case 4:speed=1000;
        break;
        case 5:speed=10000;
        break;
    }

    delay_time=10000/(Math.floor(array_size/10)*speed);   //higher numerator lower speed
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;

function bar_update(cont,height,color){
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%;display:inline-block; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons(){
    window.setTimeout(function(){
        for(var i=0;i<butt_algo.length;i++){
        butt_algo[i].classList=[];
        butt_algo[i].classList.add("butt_unselected");
        butt_algo[i].classList.add("AlgoButton");
        butt_algo[i].disabled=false;
        input_as.disabled=false;
        input_aspeed.disabled=false;
        input_generate.disabled=false;
        success();
        }
    },c_delay+=delay_time);

    
    
}