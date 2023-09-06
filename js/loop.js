const num = [12,32,45,67,5];
// for(const number of num){
//     console.log(number);
// }

//for of can not be used on object 
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned:true,
    capacity:1
};

// first option to loop through to object 
const keys =Object.keys(bottle);
// console.log(keys);
/*
three ways to read object property
1. bottle.color // this is dot notation 
2.bottle[''color]  
3.bottle[key]  //variable notation
*/
for(const key of keys){
    // console.log(key, bottle[key]);
}

//for in loop
for(const key in bottle){ 
    const prop = bottle[key];
    // console.log(key, prop);
}
//advanced
const pair =Object.entries(bottle);
// console.log(pair);
for(const [key,value] of Object.entries(bottle)){
    console.log(key, value);
}