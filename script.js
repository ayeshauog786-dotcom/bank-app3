// PART 1 — Helper functions

function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function printBalance(num) {
    document.getElementById("balance").innerText = num;
}

function getAmount() {
    return Number(document.getElementById("amount").value);
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}


// PART 2 — Credit

document.getElementById("credit-btn").addEventListener("click", function () {

    if (isAmountValid() == false) {
        return;
    }

    var newBalance = getBalance() + getAmount();

    printBalance(newBalance);

    showMessage("Credited " + getAmount() + " successfully.");

    document.getElementById("amount").value = "";
});


// PART 3 — Debit

document.getElementById("debit-btn").addEventListener("click", function () {

    // Check the amount first
    if (isAmountValid() == false) {
        return;
    }

    // Check whether there is enough balance
    if (getAmount() > getBalance()) {
        showMessage("Not enough balance.");
        return;
    }

    // Subtract the amount
    var newBalance = getBalance() - getAmount();

    printBalance(newBalance);

    showMessage("Debited " + getAmount() + " successfully.");

    document.getElementById("amount").value = "";
});


// PART 3 — Amount validation

function isAmountValid() {

    var typed = document.getElementById("amount").value;

    if (typed == "") {
        showMessage("Please enter an amount.");
        return false;
    }

    else if (Number(typed) <= 0) {
        showMessage("Amount must be more than zero.");
        return false;
    }

    return true;
}