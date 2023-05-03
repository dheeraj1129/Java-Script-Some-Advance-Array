

/*



1  // what is  errow Funtion
var myfuction =(a,b) =>{
    console.log(a+b);

}
myfuction(12,4);



2  // normal funtion
function naa (a,b){
    console.log(a+b)
}
naa( 2,2);




// 3 find  number is persent function
// make array
let arr=[1,3,4,5,6,7,8];

//make  method  and pass funtion
arr.find(myfuntion);

// make funtion ans pass value and index
function  myfuntion (value, index){

//if value=number 
if(value==6){
//console.log
console.log("6 exist");

    }

}


// 4  by error funtion  find num


let arr=[4,23,41,114];
const mufuct= (value, index ) =>{
    if(value===4){
    console.log("yes number is persent");
}

};

arr.find(mufuct);



//5  array in find method 
  
 let arr=[4, 23, 41, 114];

arr.find ((value, index )=>{
if(value===4){
    console.log("yes number is persended inthe arr")
}

})




//  6 if number is greater and less then filter method 
let arr=[2,3,4,5,5,9,8];

let result= arr.filter((value, index)=>{
    if (value>3){
        return value ;
    }
});
console.log(result);



//  7 if number is greater  & less  by boolen 
let arr=[2,3,4,5,5,9,8];

let result= arr.every((value, index)=>{
    if (value>1){
        return value ;
    }
});
console.log(result);



//  8 if number is greater  num by every method 
let arr=[2,3,4,5,5,9,8];

let result= arr.every((value, index)=>{
    if (value>4){
        return value ;
    }
});
console.log(result);
// value 2 3 are less then values then output is false 






 //   9 for of  loop value  
   
for(let value of arr){
    value+=3;
    console.log(value);
}



  //  10  forEach loop method call with arguments array 
let array=[1,2,3,4,5,6,7,8];

 array.forEach((index ,value)=>
 {
    // console.log(value); 
    console.log(value);
 }); 


  // 11 s find method for each element in array that matches ther given valuation function and retuen od the array length 
let total=222;
 arr.find((index ,value)=>
 {
    if(value<3){
    // console.log(value); 
    total+=value;
    console.log(total);
    }   
 }); 


// 12  let arr=[1,2,3,4,5,6,7,8];

 const result = arr.map((index, value) =>{
return value+=2;
}); 
console.log(result);
console.log(arr);



// 13  reduce function reduce the all value and give the previous only 
 let arr=[1,2,3,2]; 
let result=arr.reduce((total,  value)=>{
    console.log(value);

});


*/













































































































