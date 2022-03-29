
function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    bar_update(bars[i],bar_sizes[i],"crimson")
    bar_update(bars[j],bar_sizes[j],"crimson")

    var temp=bar_sizes[i];
    bar_sizes[i]=bar_sizes[j];
    bar_sizes[j]=temp;

    bar_update(bars[i],bar_sizes[i],"crimson");//update value
    bar_update(bars[j],bar_sizes[j],"crimson");

    bar_update(bars[i],bar_sizes[i],"rgb(115, 196, 228)")
    bar_update(bars[j],bar_sizes[j],"rgb(115, 196, 228)")
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bar_sizes[l]>bar_sizes[largest])
    {
        if(largest!=i)
        {
            bar_update(bars[largest],bar_sizes[largest],"rgb(115, 196, 228)");
        }

        largest=l;

        bar_update(bars[largest],bar_sizes[largest],"crimson");
    }

    if(r<n && bar_sizes[r]>bar_sizes[largest])
    {
        if(largest!=i)
        {
            bar_update(bars[largest],bar_sizes[largest],"rgb(115, 196, 228)");
        }

        largest=r;

        bar_update(bars[largest],bar_sizes[largest],"crimson");
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        bar_update(bars[i],bar_sizes[i],"rgb(29, 199, 66)");
        bar_update(bars[i],bar_sizes[i],"rgb(233, 233, 47)");

        max_heapify(i,0);

        bar_update(bars[i],bar_sizes[i],"rgb(115, 196, 228)");
        bar_update(bars[i],bar_sizes[i],"rgb(29, 199, 66)");
    }
    bar_update(bars[i],bar_sizes[i],"rgb(29, 199, 66)");
}
