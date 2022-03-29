function Selection()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        bar_update(bars[i],bar_sizes[i],"crimson"); //ready

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            bar_update(bars[j],bar_sizes[j],"rgb(233, 233, 47)"); 

            if(bar_sizes[j]<bar_sizes[index_min])
            {
                if(index_min!=i)
                {
                    bar_update(bars[index_min],bar_sizes[index_min],"rgb(115, 196, 228)");
                }
                index_min=j;
                bar_update(bars[index_min],bar_sizes[index_min],"crimson");
            }
            else
            {
                bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228)");
            }
        }
        
        if(index_min!=i)
        {
            var temp=bar_sizes[index_min];
            bar_sizes[index_min]=bar_sizes[i];
            bar_sizes[i]=temp;

            bar_update(bars[index_min],bar_sizes[index_min],"crimson"); //update value 
            bar_update(bars[i],bar_sizes[i],"crimson");

            bar_update(bars[index_min],bar_sizes[index_min],"bar(115, 196, 228)");
        }
        bar_update(bars[i],bar_sizes[i],"rgb(29, 199, 66)");
    }
    bar_update(bars[i],bar_sizes[i],"rgb(29, 199, 66)");

    enable_buttons();
}