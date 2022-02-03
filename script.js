let plus = document.getElementById ("plus");
let minus= document.getElementById ("minus");
let number =document.getElementById ("value") ; 

let result =document.querySelector ("u");
console.log (result.textContent);




let resultValue = 0 ; 
result.textContent = `${resultValue}`;







plus.addEventListener ("click" , plusFun) ;
function plusFun () {

   if (number.value != "") {

    let transformNumber = parseInt(number.value) ;

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

    if (number.value != "") {

    let transformNumber = parseInt(number.value) ;

    resultValue -=  transformNumber ; 
    console.log (resultValue);

    // console.log (typeof(resultValue));


    if ( resultValue < 0 ) { result.style.color = "red";} 
    if ( resultValue >= 0 ) { result.style.color = "black";} 
    

    result.textContent = `${resultValue}`;

    }

}







