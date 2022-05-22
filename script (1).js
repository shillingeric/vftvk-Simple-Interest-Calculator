function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == "") {
        alert("You must enter a positive number");
        document.getElementById("principal").focus();
        return false;
    } else {
        if (principal <= 0) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    var result = "If you deposit <mark>" + principal + "</mark>, at an interest rate of <mark>" + rate + "%</mark>. You will receive a return of <mark>" + interest + "</mark>, in the year <mark>" + year +"</mark>";
    document.getElementById("result").innerHTML = result;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
