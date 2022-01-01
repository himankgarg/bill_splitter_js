var split_button = document.querySelector("#action-button");
var reset_button = document.querySelector("#reset-button");
split_button.addEventListener("click", function(){
//fetch the amount
var amount = parseInt(document.querySelector("#amount").value);

//fetch the persons
var persons = parseInt(document.querySelector("#persons").value);
    
//tip values
var tips = document.querySelector("#tip").value;
var tip = parseInt(tips);
if(tips===''){
    tip=0;
}
var result = (amount+tip) / persons;
var split_amount = document.querySelector("#split-amount");
split_amount.innerHTML = result



});


//split amount


//reset button
reset_button.addEventListener("click",function(){
    window.location.reload();
})