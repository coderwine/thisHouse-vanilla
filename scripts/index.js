const tbody = document.querySelector('tbody');

// Declaration of table value variables 
let year, mortgage,maintPerc, maint, marginPerc, margin, tax, insurance, exp, rentIncome,capExPerc, capEx, vacancyPerc, vacancy, total, profit, cycle;

// TESTING DATA
year = 2021;
mortgage = 850;
maintPerc = .05;
marginPerc = .08;
tax = 0;
insurance = 0;
rentIncome = 1300;
capExPerc = .05;
vacancyPerc = .05;
cycle = 10;
// TESTING DATA ^^^


const calculateTable = () => {

    const calc = (x,y) => {
        let sum = Number(Math.round((x*y)+'e2')+'e-2');
        return sum;
    }
    
    maint = calc(mortgage, maintPerc);
    margin = calc(mortgage, marginPerc);
    exp = mortgage + tax + insurance + maint + margin;
    capEx= calc(mortgage, capExPerc);
    vacancy = calc(mortgage, vacancyPerc);
    total = Number(Math.round((exp+capEx+vacancy)+'e2')+'e-2')
    profit = Number(Math.round((rentIncome-total)+'e2')+'e-2')

    let values = [
        year, mortgage, maint, margin, tax, insurance, exp, rentIncome, capEx, vacancy, total, profit
    ]

    displayTable(values);
}

const displayTable = (data) => {
    console.log(data);

    let tr = document.createElement('tr');
    let th = document.createElement('th');

    th.setAttribute('scope','row');
    th.innerText = data[0];
    
    tbody.appendChild(tr);
    tr.appendChild(th);

    for(let i = 1; i<data.length; i++) {
        let td = document.createElement('td');
        td.innerText = `$${data[i]}`;
        tr.appendChild(td);
    }


}

calculateTable();

const testCalc = () => {
    let mainObj = {
        values: [],
    }

    //NOTE: I want to build an object to store a set number of values that calculate going up.
}