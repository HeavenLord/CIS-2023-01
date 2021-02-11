var $ = function(id) {
    return document.getElementById(id) ;
} ;//$

    //DEBUG alert ("in calculate click");
    
    var principal = document.loandata.initAmount.value;
    var payments = document.loandata.years.value * 12;
    var interest = document.loandata.months.value / 100 / 12;
    
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);
    document.loandata.payment.value = '$'+round(monthly);

function round(x) {
   return math.round(x*100)/100;
}

