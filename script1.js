let displayVal="";
let calcVal="";
function display(value) //displays the entered operations on the display tab
{
    if(value=='**2')
    {
        displayVal+="^2";
        calcVal+=value;
    }
    else if(value=='**') 
    {
        displayVal+="^";
        calcVal+=value;
    }
    else
    {
        displayVal+=value;
        calcVal+=value;
    }
    document.getElementById("display").innerHTML=displayVal;
   
}

function clearDisplay()  //clears the result tab from previous operations
{
     displayVal="";calcVal="";
     document.getElementById("display").innerHTML=displayVal;
}

function result()
{
    try{
        const res=eval(calcVal);
        document.getElementById("display").innerHTML=res;
        displayVal=res.toString();
        calcVal=res.toString();
    }
    catch(error)
    {
        document.getElementById("display").innerHTML="ERROR";
        displayVal="";calcVal="";
    }
}