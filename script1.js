
let displayVal="";
let calcVal="";
function display(value) //displays the entered operations on the display tab
{
    "use strict";
    if(value === '**2')
    {
        displayVal += "^2";
        calcVal += value;
        PopulateResult(displayVal);
        return;
    }
    if(value === '**') 
    {
        displayVal += "^";
        calcVal += value;
        PopulateResult(displayVal);
        return;
    }
    
        displayVal += value;
        calcVal += value;
        PopulateResult(displayVal);
    
}

function PopulateResult(inputValue)
{
    document.getElementById("display").innerHTML=inputValue;
    //$("display").val(inputValue); =>
}

function clearDisplay()  //clears the result tab from previous operations
{
     displayVal = "";calcVal = "";
     PopulateResult(displayVal);
}

function result()
{
    try{
        let res = eval(calcVal);
        PopulateResult(res);
    }
    catch(error)
    {
        PopulateResult("ERROR :" +error);
        clearDisplay();
    }
}