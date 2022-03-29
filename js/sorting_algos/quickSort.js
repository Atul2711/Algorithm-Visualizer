function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function partition (start, end)
{
    var i = start + 1;
    var pivot = bar_sizes[start] ;
    bar_update(bars[start],bar_sizes[start],"rgb(233, 233, 47)"); //yellow 

        for(var j =start + 1; j <= end ; j++ )
        {
           
            if (bar_sizes[ j ] < pivot)
            {
                bar_update(bars[j],bar_sizes[j],"rgb(233, 233, 47)");//yellow

                bar_update(bars[i],bar_sizes[i],"crimson");//Color update
                bar_update(bars[j],bar_sizes[j],"crimson");//Color update

                var temp=bar_sizes[i];
                bar_sizes[i]=bar_sizes[j];
                bar_sizes[j]=temp;

                bar_update(bars[i],bar_sizes[i],"crimson");  //value update of array
                bar_update(bars[j],bar_sizes[j],"crimson");

                bar_update(bars[i],bar_sizes[i],"rgb(115, 196, 228);");
                bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228);");

                i++;
            }
    }
    bar_update(bars[start],bar_sizes[start],"crimson");
    bar_update(bars[i-1],bar_sizes[i-1],"crimson");
    
    var temp=bar_sizes[start];
    bar_sizes[start]=bar_sizes[i-1];
    bar_sizes[i-1]=temp;

    bar_update(bars[start],bar_sizes[start],"crimson");//value update
    bar_update(bars[i-1],bar_sizes[i-1],"crimson");

    for(var t=start;t<=i;t++)
    {
        bar_update(bars[t],bar_sizes[t],"rgb(29, 199, 66)");
    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        
        var pivot_pos = partition (start, end ) ;     
        quick_sort (start, pivot_pos -1); // left side of pivot.
        quick_sort (pivot_pos +1, end) ; // right side of pivot.
    }
 }