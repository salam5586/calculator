var butt =  document.getElementById("butt").innerText
var butto = document.getElementById("butto").innerText
function calcul(butt){
let result
if(butt=== '+' ){
 result=  butt + butto
}else if( butt === '-'){
result = butt - butto
}else if(butt === '/'){
    result = butt / butto
} else if(butt === '%'){
    result = butt % butto;
}
document.getElementById("result").innerText = "Result: " + result;
}

let country = "pakistan";
let CNIC = true;
let age = 20 ;
 let  blooklest = true;

 if( country ==="pakistan"&& CNIC === true && age > 18 && blooklest === true) {
    console.log ("You can vote")
 }else{
    console.log ("You can not vote")
 }