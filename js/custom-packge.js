



let priceAssignor = {
    
}

let time =$("#timePk");

time.focusout(function () { 
   console.log(time.val()) ;
 });





  const totalFee = $("#totalFee");
  let totalFeeValue = 0;

$("#sponsorship .custom-package input, select").on("click", function(){

 totalFeeValue += 100;
  
  totalFee.text(totalFeeValue);

});

