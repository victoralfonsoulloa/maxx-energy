const db = require('../db/db');

exports.getAccounts = async (req, res) => {
    try {
        const accounts = await db.query('SELECT DISTINCT "account_no" FROM "energy_data"');
        res.json(accounts);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


const maskAccountNumber = (accountNumber, i = 0, newAccount ="") => {
    const visibleDigits = 4;
    if(i === accountNumber.length){
        return newAccount;
    }
    if( i >= accountNumber.length - visibleDigits){
        newAccount += accountNumber[i];
    }else{
        newAccount += '*';
    }
    return maskAccountNumber(accountNumber, i+1); 

}