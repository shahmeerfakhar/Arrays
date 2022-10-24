

const inventors = [
    {first: 'shahmeer', last: 'fakhar', year: 1856, passed: 1955},
    {first: 'Eshan', last: 'fakhar', year: 1888, passed: 1959},
    {first: 'Ashir', last: 'fakhar', year: 1920, passed: 1989},
    {first: 'Ahad', last: 'waseem', year: 1940, passed: 2000},
    {first: 'shayan', last: 'khalid', year: 1999, passed: 2008},
    {first: 'alyan', last: 'tariq', year: 2010, passed: 2017},
    {first: 'arsalan', last: 'arif', year: 2015, passed: 2019},
];


const people = [
    'tom, jeery', 'william, worth', 'sheikh smith', 'berne, eric',
    'benny, tony', 'berhard, sandra','bethea, Erin', 'bent, silas',
    'bilar, tony', 'beecher, henry', 'bevel, ken', 'biden, ingmar',
];

const fifteen = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year < 1900));

console.log(fifteen);

const fullNames = inventors.map(inventor => '${inventor.first} ${inventor.last}');

console.log(fullNames);

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);


const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


const oldest = inventors.sort(function(a,b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;

});

console.table(oldest);

const alpha = people.sort((lastOne, nextOne ) => {
    const [aLast, aFirst] = lastOne.split(',  ');
    const [bLast, bFirst] = nextOne.split(',  ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);

const data= ['car', 'car', 'truck', 'truck', 'bike', 'bike', 'bicycle', 'van', 'vigo', 'civic'];

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);
