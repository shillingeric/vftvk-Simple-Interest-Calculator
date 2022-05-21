function compute() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    if(principal == undefined || principal <= 0){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        
        return
    }else{
        // Display the text with the calculated values
        var inr = "If you deposit <mark>" + principal +",</mark><br>";
        var ra = "at an interest rate of <mark>"+ rate +" %,</mark><br>";
        var am="You will receive an amount of <mark>" +interest + ",</mark><br>"
        var ye ="in the year <mark>"+year +"</mark>";

        document.getElementById("result").innerHTML=inr+ra+am+ye;

    }
function updateRate() {

    var rateval = document.getElementById("rate").value;
    rateval.onchange = function()

    }
