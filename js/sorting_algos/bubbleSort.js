
function Bubble(){
    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        for(var j=0;j<array_size-i-1;j++){
            bar_update(bars[j],bar_sizes[j],"rgb(233, 233, 47)");  //element to excuete
            if(bar_sizes[j]>bar_sizes[j+1]){

                bar_update(bars[j],bar_sizes[j],"crimson"); 
                bar_update(bars[j+1],bar_sizes[j+1],"crimson");

                var tmp=bar_sizes[j];
                bar_sizes[j]=bar_sizes[j+1];
                bar_sizes[j+1]=tmp;                

                bar_update(bars[j],bar_sizes[j],"crimson"); 
                bar_update(bars[j+1],bar_sizes[j+1],"crimson");
            }
            bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228)");
        }
        bar_update(bars[j],bar_sizes[j],"rgb(29, 199, 66)");
    }
    bar_update(bars[0],bar_sizes[0],"rgb(29, 199, 66)");

    enable_buttons();
}