//Question 1
let HR1 = [
    {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
    },
    {
        "firstName": "Mary",
        "department": "Fiance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true

    },
    {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
    }
]

console.log(HR1)


//Question 2
let HR2 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": HR1
}

console.log(HR2);


//Question 3
let Anna = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false
}

HR2.employees.push(Anna);

console.log(HR2);


//Question 4
function calcSalary(data){
    var total = 0;
    for(let i = 0; i < data.employees.length; i++){
        total = data.employees[i].salary + total;
    }
    console.log(total);

}

calcSalary(HR2);


//Question 5
function raiseEligible(data){
    for(let i = 0; i < data.employees.length; i++){
        if(data.employees[i].raiseEligible){
            data.employees[i].salary = data.employees[i].salary * 1.1;
            data.employees[i].raiseEligible = false;
        }
    }
    console.log(data);
}

raiseEligible(HR2)


//Question 6
function workFromHome(data, people){
    for(let i = 0; i < data.employees.length; i++){
        if(people.includes(data.employees[i].firstName)){
            data.employees[i].wfh = true;
        }else{
            data.employees[i].wfh = false;
        }
    }
    console.log(data);
}

workFromHome(HR2, ["Anna", "Sam"]);