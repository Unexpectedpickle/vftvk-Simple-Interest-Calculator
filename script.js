// Function to compute interest with user provided input
function compute()
{
    var principal = document.getElementById("principal").value;

    // Validate retrieved principal value
    if (invalid_principle(principal)) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var principal = document.getElementById("principal").value;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML =
        "If you deposit " + principal + "<br>" +
        "at an interest rate of " + rate + "%<br>" +
        "You will receive an amount of " + interest + ",<br>" +
        "in the year " + year;
    
}

// Function to validate if principle has a value and the value is greater than 0
function invalid_principle(principal) {
    var principal_error = document.getElementById("principal_error");
    if (!principal || principal <= 0) {
        update_error_message(principal_error, "Enter a positive number");
        return true;
    } else {
        update_error_message(principal_error, "");
        return false;
    }
}

// Function to add or update error message with new message
function update_error_message(element, text) {
    element.innerHTML = text;
}

// Function to update value in slider for rate
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
        