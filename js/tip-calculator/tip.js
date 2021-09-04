function calcTip() {
    var subtotalElem =  document.getElementById('subtotal');
    var tipElem =document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip =(subtotal*tipElem.value)/100;
    var total = subtotal+tip;
    totalElem.innerHTML = '$' + total;
}
