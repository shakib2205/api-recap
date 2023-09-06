const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned:true,
    capacity:1
};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);

// const TwoDimension =[
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'isCleaned', true ],
//     [ 'capacity', 1 ]
//   ]
console.log(bottle);
// Object.seal(bottle); // delete atkanor jonno
Object.freeze(bottle); // same as seal 
delete bottle.isCleaned;// for delete bottle
bottle.price = 1000; // for price increase
bottle.height = 12;
console.log(bottle);
