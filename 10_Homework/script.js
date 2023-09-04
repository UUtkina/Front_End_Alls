let bank = [];

function Customer(numberAccount, firstName, secondName, beginBalance) {
    this.numberAccount = numberAccount;
    this.firstName = firstName;
    this.secondName = secondName;
    this.beginBalance = parseFloat(+beginBalance);
    this.toString = function () {
        return `Number: ${this.numberAccount}, First_name: ${this.firstName}, Second_name: ${this.secondName}, Balance: ${this.beginBalance}`;
    };
}

let inputCustomer = prompt(
    'Enter customer data separated by ";". Format: numberAccount;firstName;secondName;beginBalance'
);

while (inputCustomer) {
    let splitData = inputCustomer.split(";");
    const [numberAccount, firstName, secondName, beginBalance] = splitData;
    if (
        splitData.length === 4 &&
        numberAccount &&
        numberAccount.length === 4 &&
        firstName &&
        !isNaN(beginBalance) &&
        parseFloat(+beginBalance) >= 0 
    ) {
        const newCustomer = new Customer(
            numberAccount,
            firstName,
            secondName,
            beginBalance
        );
        bank.push(newCustomer);
        bank.forEach((customer) => {
            console.log(customer.toString());
        });
    } else {
        console.log("Invalid input format. Please try again.");
    }

    inputCustomer = prompt(
        'Enter customer data separated by ";". Format: numberAccount;firstName;secondName;beginBalance'
    );
}

function findCustomer(bank, numberAccount) {
    for (let i = 0; i < bank.length; i++) {
        console.log("Checking against account", bank[i].numberAccount);
        if (bank[i].numberAccount === numberAccount) {
            console.log("Looking for account:", numberAccount);
            return bank[i];
        }
    }
    return null;
}

function depositCustomer(bank, numberAccount, sumD) {
    console.log("Found customer:", numberAccount);
    const customer = findCustomer(bank, numberAccount);
    if (customer) {
        customer.beginBalance += parseFloat(sumD);
        console.log(
            `Deposited ${sumD} to account ${numberAccount}. New balance: ${customer.beginBalance}`
        );
    } else {
        console.log(`Account with number ${numberAccount} doesn't exist.`);
    }
}

function kreditCustomer(bank, numberAccount, sumK) {
    console.log("Found customer:", numberAccount);
    const customer = findCustomer(bank, numberAccount);
    if (!customer) {
        return console.log(
            `Account with number ${numberAccount} doesn't exist.`
        );
    }
    if (customer.beginBalance >= parseFloat(sumK)) {
        customer.beginBalance -= parseFloat(sumK);
        console.log(
            `Deposited ${sumK} to account ${customer.numberAccount}. New balance: ${customer.beginBalance}`
        );
    } else {
        console.log(`Not enough funds in account ${numberAccount}.`);
    }
}
