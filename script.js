
 

function berth_type()
{
    var s=Number(document.getElementById("seat_no").value);
       
    if (s > 0 && s < 73)
    {
        if ( s % 8 == 1 ||
            s % 8 == 4)
        {result.innerHTML=`
                     lower berth`;}
        else if (s % 8 == 2 ||
                 s % 8 == 5)
                { result.innerHTML=`
                        Middle berth`;}
        else if(s % 8 == 3 ||
                 s % 8 == 6)
                 { result.innerHTML=`
                   Upper berth`;}
        else if(s % 8 == 7)
        { result.innerHTML=`
          Side lower berth`;}
        else
        { result.innerHTML=`
          Side upper berth`;}
        }
    else
    { result.innerHTML=`
    Invalid seat number`;}
}