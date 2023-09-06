
// const third = second; // for object purpuse to same

// if(third === second){
//     console.log('they are same');
// } 
// else{
//     console.log('they are not same');
// } 


// do not user this method to compare object or array
const first = { a:2, b:3, c:4 };
const second = { a:2, b:3, c:4 };
const firstString =JSON.stringify(first);
const secondString=JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('they are same');
// }
// else{
//     console.log('they are not same');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
}
}
const isSame = compareObject(first, second);
console.log(isSame);
