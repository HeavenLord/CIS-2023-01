var $ = function(id)
{
    return document.getElementById(id);
};


var calculate = function()
{ var fullName, floatLoanAmount, floatLoanLength, floatInterestRate, monthlyPayment;
 fullName = $("full_name");
 floatLoanAmount = parseFloat($("loan_amount").value);
 floatLoanLength = parseFloat($("loan_months").value);
 floatInterestRate = (parseFloat($("annual_rate").value)/12)/100;
 monthlyPayment = $("monthly_payment").value;
 //DEBUG alert("Monthly Payment is" + monthlyPayment)
 
  monthlyPayment = floatLoanAmount + (floatInterestRate * floatLoanLength);
  $("monthly_payment").value = "$" + monthlyPayment.toFixed(2);
  
  return false;
    
};

 window.onload = function () 
{
    $("full_name").value = "";
    $("full_name").focus();
    $("loan_amount").value = "";
    $("loan_months").value = "";
    $("monthly_payment").value();
    $("annual_rate").value = "";
    $("calc").onclick = calculate;
};