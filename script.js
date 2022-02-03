
// query 

let plus = document.getElementById ("plus");
let minus= document.getElementById ("minus");
let number =document.getElementById ("value") ; 
let result =document.querySelector ("u");
console.log (result.textContent);




let resultValue = 0 ; // this is where we will put the result of the operation between the numbers ("+" || "-") 
result.textContent = `${resultValue}`;







plus.addEventListener ("click" , plusFun) ;
function plusFun () {

   if (number.value !== "") {
       plus.style.backgroundColor = "lightgrey";
       minus.style.backgroundColor = "white";

    let transformNumber = parseInt(number.value) ; // we tansform the string to a number 

    resultValue +=  transformNumber ; 
    console.log (resultValue);

    // console.log (typeof(resultValue));

    if ( resultValue < 0 ) { result.style.color = "red";} 
    if ( resultValue >= 0 ) { result.style.color = "black";} 


    result.textContent = `${resultValue}`;


   }


}


minus.addEventListener ("click" , minusFun) ;
function minusFun () {

    if (number.value !== "") {

        minus.style.backgroundColor = "lightgrey";
        plus.style.backgroundColor = "white";

    let transformNumber = parseInt(number.value) ;

    resultValue -=  transformNumber ; 
    console.log (resultValue);

    // console.log (typeof(resultValue));


    if ( resultValue < 0 ) { result.style.color = "red";} 
    if ( resultValue >= 0 ) { result.style.color = "black";} 
    

    result.textContent = `${resultValue}`;

    }

}







