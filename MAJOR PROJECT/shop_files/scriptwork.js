var cart=[];

var item=function(name,value,quantity){
this.name=name
this.value=Number(value)
this.quantity=quantity
};


function acart(name,value,quantity,recart){
document.getElementById(recart).style.visibility="visible";
var j=0;
for (var i in cart){
if(cart[i].name==name){
cart[i].quantity++;
alert("ITEM ADDED TO THE CART SUCCESSFULLY");
j=1;
}
}
if (j==0){
var product=new item(name,value,quantity);
cart.push(product);
alert("ITEM ADDED TO THE CART SUCCESSFULLY");
}
else{
}
sessionStorage.setItem("MY CART",JSON.stringify(cart)); 
}

function dcart(name,getid){
for (var i in cart){
if(cart[i].quantity==0){
cart.splice(i,1);
alert("Product has been completely removed from the cart");
document.getElementById(getid).style.visibility="hidden";
}
if(cart[i].name==name){
cart[i].quantity--;
alert("Quantity reduced to : ");
alert(cart[i].quantity);
if(cart[i].quantity==0){
cart.splice(i,1);
alert("Product has been completely removed from the cart");
document.getElementById(getid).style.visibility="hidden";
}
}
}
sessionStorage.setItem("MY CART",JSON.stringify(cart)); 
}


function total(){
var totalsum=0;
for(var i in cart){
totalsum=(totalsum+((cart[i].value)*(cart[i].quantity)));
}
localStorage.setItem("TS",JSON.stringify(totalsum));
var s=JSON.parse(localStorage.getItem("TS"));
alert(s);
}

function cartfunctioning(){
document.write("<style>body{border:6px solid Navy}</style>");
document.write("<div align=center><font size=15 color=green><b>CART</b></font></div><br><br>");
document.write("<div align=center><b><font size=8>** PRODUCT -- PRICE -- QUANTITY **</b></font></div><br><br><br>");
cart=JSON.parse(sessionStorage.getItem("MY CART"));
var totalsum=0;
for (var pp in cart){
totalsum=totalsum+(cart[pp].value*cart[pp].quantity);
document.write("<div align=center><ul><li style=font-size:300%><font size=7><b>",cart[pp].name," -- ",cart[pp].value*cart[pp].quantity,"/-"," --",cart[pp].quantity,"</b></font></li></ul>","<br><br>");
}
document.write("<div align=center><b><font size=8 color=Navy>CART TOTAL :</b></font></div>","<div align=center><b><font size=7>",totalsum,".00/-</b></font></div>","<br><br>");
document.write("<b><font size=15 color=red>TO MANAGE YOUR ITEMS IN YOUR CART GO BACK TO YOUR RESPECTIVE PRODUCT SITE</b></font><br><br><br><br>");
document.write("<div align=center><input type=button style=font-size:50px value=CLOSE onClick=window.close()></div><br><br>");
document.write("<div align=center><p><b><font size=6 color=Maroon>NOTE: IF YOU UPDATED THE CART ,KINDLY PRESS THE ABOVE BUTTON TO CLOSE AND OPEN YOUR CART IN THE SHOPPING WEBSITE</b></p></font></div>")
}

function clearcart(){
cart=[];
sessionStorage.setItem("MY CART",JSON.stringify(cart)); 
alert("ITEMS REMOVED FROM THE CART");
document.getElementById('r1').style.visibility="hidden";
document.getElementById('r2').style.visibility="hidden";
document.getElementById('r3').style.visibility="hidden";
document.getElementById('r4').style.visibility="hidden";
document.getElementById('r5').style.visibility="hidden";
document.getElementById('r6').style.visibility="hidden";
document.getElementById('r7').style.visibility="hidden";
document.getElementById('r8').style.visibility="hidden";
document.getElementById('r9').style.visibility="hidden";
document.getElementById('r10').style.visibility="hidden";
}

