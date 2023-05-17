let num1 = 6
let num2 = 5

if (num1>num2){                         //if true then print first command
    console.log ('num1 is greatest')
}
else {                                 //if false then print second command
    console.log ('num2 is greatestS')
}


let x = 7
let y = 6
let z = 5 

if (x>y && x>z) {                       
       console.log ('x is greatest')
}
else if ( y>z && y>x)  {
        console.log('y is greatest')
}
else {
    console.log ('z is greatest')
}

let n = 8
let result

if(n%2===0)             //if num is devided by 2 then is even othervise is odd
    result="even"
else 
    result="odd"
 console.log(result)       




 let m = 4
 let rot = m%2===0 ? 'even' : 'odd' 
 console.log(rot)