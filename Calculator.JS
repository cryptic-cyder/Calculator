function calculate(x){
      var c = formforprint.print.value;
      var v = c.charAt(c.length-1);
      if(v=="+" && (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;
      else if(v=="-" && (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;
      else if(v=="*" && (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;  
      else if(v=="/" && (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;
      else if(v=="." && (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;
      else if((v>=0 && v<=9) || (x>=0 && x<=9))
        formforprint.print.value = formforprint.print.value + x;
        //Here we concatenate x with the previous value of (value="") in the html file.
      //and then assign it to the (value="") which will be print in the display box...
}
function backspace(){
  var c = formforprint.print.value;
  var v = c.charAt(c.length-1);
  formforprint.print.value = c.substring(0, c.length - 1);
}