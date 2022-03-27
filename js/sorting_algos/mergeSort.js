function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=bar_sizes[q++];
            div_update(bars[q-1],bar_sizes[q-1],"crimson");
        }
        else if(q>end)
        {
            Arr[k++]=bar_sizes[p++];
            div_update(bars[p-1],bar_sizes[p-1],"crimson");
        }
        else if(bar_sizes[p]<bar_sizes[q])
        {
            Arr[k++]=bar_sizes[p++];
            div_update(bars[p-1],bar_sizes[p-1],"crimson");
        }
        else
        {
            Arr[k++]=bar_sizes[q++];
            div_update(bars[q-1],bar_sizes[q-1],"crimson");
        }
    }

    //Final display 
    for(var t=0;t<k;t++)
    {
        bar_sizes[start++]=Arr[t];
        div_update(bars[start-1],bar_sizes[start-1],"rgb(29, 199, 66)");
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(bars[mid],bar_sizes[mid],"rgb(233, 233, 47)");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
