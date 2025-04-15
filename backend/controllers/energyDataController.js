const db = require('../db/db');

const timeColumns = [
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
];
const times = timeColumns.map(t => `"${t}"`).join(', ');  
exports.getAccounts = async (req, res) => {
    
    try {
        const accountsResult = await db.query('SELECT DISTINCT "account_no" FROM "energy_data"');
        const userRole = req.query.role || 'Staff';
        let accounts;
        if(userRole === "Staff")
            accounts = accountsResult.rows.map(row => ({
                account_no: maskAccountNumber(row.account_no)
            }));
        else if(userRole === "Executive"){
            accounts = accountsResult.rows.map(row => ({
                account_no: row.account_no
            }));
        }
        res.json(accounts)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getSubstations = async (req, res) => {
    
    try {
        const substationsResult = await db.query('SELECT DISTINCT "substation" FROM "energy_data"');
        const transformersResult = await db.query('SELECT DISTINCT "transformer" FROM "energy_data"');
        let substations;
        substations = substationsResult.rows.map(rows => ({
            substation: rows.substation
        }));
        let transformers;
        transformers = transformersResult.rows.map(rows => ({
            transformer: rows.transformers
        }));
    
        res.json(accounts)
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getAccountUsage = async (req, res) => {
    const {account_no, start_date, end_date} = req.query;
    try {
        const query = `SELECT "account_no", ${times}, substation, transformer FROM "energy_data" WHERE "date" >=$1 AND "date" <= $2 AND "account_no" = $3`
        const values = [start_date, end_date, account_no];
        const accountsResult = await db.query(query, values);
        const userRole = req.query.role || 'staff';
        let accounts;
        if(userRole === "Staff")
            accounts = accountsResult.rows.map(row => ({
                ...row, account_no: maskAccountNumber(row.account_no)
            }));
        else if(userRole === "Executive"){
            accounts = accountsResult.rows.map(row => ({
                ...row, account_no: row.account_no
            }));
        }
        res.json({
            usage_details: {
            date_range: {
                start_date: start_date,
                end_date: end_date
            },
            accounts: accounts
            }});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
const maskAccountNumber = (accountNumber) => {
    const strAccountNumber = accountNumber.toString();
    const maskChart = '*';
    const visibleDigits = 4;

    const maskedCharts = maskChart.repeat(strAccountNumber.length - visibleDigits);
    const visibleCharts = strAccountNumber.slice(- visibleDigits);
    return maskedCharts + visibleCharts;
    
}

