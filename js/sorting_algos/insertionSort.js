function Insertion(){

    c_delay=0;
    var temp;
    var j;
    for(var i=1;i<array_size;i++){
        bar_update(bars[i],bar_sizes[i],"rgb(233, 233, 47)")
        temp=bar_sizes[i];
        j=i-1;
        while(j>=0 && bar_sizes[j]>temp){

            bar_update(bars[j],bar_sizes[j],"crimson");
            bar_update(bars[j+1],bar_sizes[j+1],"crimson");

            bar_sizes[j+1]=bar_sizes[j];
            bar_update(bars[j],bar_sizes[j],"crimson");
            bar_update(bars[j+1],bar_sizes[j+1],"crimson");

            bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228)"); //blue still can be changed
            
            if(j==(i-1)){
                bar_update(bars[j],bar_sizes[j],"rgb(233, 233, 47)")
            }
            else{
                bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228)");
            }
            
            j--;
        }
        bar_sizes[j+1]=temp;
        for(var k=0;k<i;k++){
        bar_update(bars[k],bar_sizes[k],"rgb(29, 199, 66)");
        }
    }

    bar_update(bars[i-1],bar_sizes[i-1],"rgb(29, 199, 66)");
    enable_buttons();

}