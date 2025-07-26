

function calcul (value){
    const display = document.getElementById('result')
    display.value += value
}

  function calculate() {
  result.value = eval(result.value);
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