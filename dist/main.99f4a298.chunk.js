(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,o,n){"use strict";n.r(o);n(29),n(56);var e="goku",r="naruto",i="jawa",a="add",c=5,l=20,u=7.5,f={items:0,subTotal:0,doubleDiscount:0,bulkDiscount:0,total:0,gokuQuantity:0,narutoQuantity:0,jawaQuantity:0},d=function(t,o){t&&(document.getElementById(t).innerText=o)},s=function(){!function(t,o,n,e,r){var i=0;if(t<2)return d(o,""),d(e,""),void(f.doubleDiscount=0);if(0===t%2){var a=t/2;i=a*r,d(o,"".concat(f.gokuQuantity," x ").concat(a," ").concat(n," POP offer")),d(e,"-".concat(i," €")),f.doubleDiscount=i}}(f.gokuQuantity,"goku-discount-title","Goku","goku-discount-price",c),function(t,o,n,e){var r=0;if(t<3)return d(o,""),d(e,""),void(f.bulkDiscount=0);if(0===t%3){var i=t/3;r=1*i,d(o,"".concat(t," x ").concat(i," ").concat(n," POP offer")),d(e,"-".concat(r," €")),f.bulkDiscount=r}}(f.narutoQuantity,"naruto-discount-title","Naruto","naruto-discount-price"),f.total=f.gokuQuantity*c+f.narutoQuantity*l+f.jawaQuantity*u-f.doubleDiscount-f.bulkDiscount,d("total-cost","".concat(f.total," €"))},p=function(){var t,o;t=f.gokuQuantity+f.narutoQuantity+f.jawaQuantity,o=f.gokuQuantity*c+f.narutoQuantity*l+f.jawaQuantity*u,f.items=t,f.subTotal=o,d("order-summary-title","".concat(t," items")),d("order-summary-price","".concat(o," €")),s()},x=function(t,o,n,e,r){var i=o;t===a?i+=1:o>0&&(i-=1);var c,l,u=i>0?i*n:0;return l=i,(c=e)&&(document.getElementById(c).value=l),d(r,"".concat(u," €")),i},g=function(t,o){switch(t){case e:var n=x(o,f.gokuQuantity,c,"goku-product","goku-total");f.gokuQuantity=n;break;case r:var a=x(o,f.narutoQuantity,l,"naruto-product","naruto-total");f.narutoQuantity=a;break;case i:var d=x(o,f.jawaQuantity,u,"jawa-product","jawa-total");f.jawaQuantity=d}p()},m=function(t){g(t,"add")},h=function(t){g(t,"remove")};document.getElementById("goku-add").onclick=function(){return m(e)},document.getElementById("goku-remove").onclick=function(){return h(e)},document.getElementById("naruto-add").onclick=function(){return m(r)},document.getElementById("naruto-remove").onclick=function(){return h(r)},document.getElementById("jawa-add").onclick=function(){return m(i)},document.getElementById("jawa-remove").onclick=function(){return h(i)},document.getElementById("checkout-button").onclick=function(){console.log("checkout!")}},56:function(t,o,n){var e=n(57),r=n(58);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};e(r,i);t.exports=r.locals||{}},58:function(t,o,n){(o=n(59)(!1)).push([t.i,"body{font-family:'Kumbh Sans', Arial, Helvetica, sans-serif;background-color:#212140}hr{border:1px solid #CFCFD6}.root{min-height:80vh;margin:40px 100px 40px 100px;display:flex;flex-direction:row}.left-container{flex:3;background-color:#fff}.left-container .title{margin:40px 20px 20px 20px;font-size:larger;font-weight:bold;color:#232323}.left-container .header{display:flex;flex-direction:row;margin:0 0 0 20px}.left-container .header .details{flex:3;font-size:small;color:#CFCFD6}.left-container .header .quantity{flex:2;text-align:center;margin:0 60px 0 0;font-size:small;color:#CFCFD6}.left-container .header .price{flex:1;text-align:center;font-size:small;color:#CFCFD6}.left-container .product{display:flex;flex-direction:row;margin:20px 0 0 20px}.left-container .product img{height:100px;width:100px;border:1px solid #CFCFD6;cursor:pointer}.left-container .product .product-container{flex:3;display:flex;flex-direction:row}.left-container .product .image-container{flex:1}.left-container .product .title-container{flex:3;display:flex;flex-direction:column;margin-left:20px}.left-container .product .product-title{flex:1;margin-top:10px;font-size:medium;font-weight:bold;color:#9274ff;cursor:pointer}.left-container .product .product-description{flex:1;margin-top:-30px;font-size:small;color:#CFCFD6}.left-container .product .select-container{flex:2;margin:0 60px 0 0}.left-container .product .select-container .one{display:flex;flex-direction:row;place-items:center}.left-container .product .select-container .two{flex:1;text-align:end}.left-container .product .select-container .three{flex:1;text-align:center}.left-container .product .select-container .four{flex:1;text-align:start}.left-container .product .select-container .sign{cursor:pointer;font-size:24px;font-weight:bold;color:#9274ff}.left-container .product .select-container .quantity{font-size:16px;width:40px;height:40px;border:1px solid #CFCFD6;text-align:center}.right-container{flex:1;background-color:#f3f3f3}.right-container .order-summary{margin:40px 20px 0 20px;font-size:larger;font-weight:bold;color:#232323}.right-container .separator{margin:20px 20px 0 0;color:#232323}.right-container .product-separator{margin:0 20px 0 0;color:#232323}.right-container .total-separator{margin:40px 20px 0 20px;padding-top:10vh}.right-container .discounts{flex:2;font-size:small;margin:20px 0 0 0;color:#CFCFD6}.right-container .columns{display:flex;flex-direction:row;align-items:center}.right-container .title{flex:3;font-size:small;font-weight:lighter}.right-container .import{flex:1;font-size:medium;font-weight:bold}.right-container .checkout-button{background-color:#9274ff;color:#fff;width:100%;font-size:18px;font-weight:bold;box-shadow:0;border:0px;border-radius:10px;padding:10px;cursor:pointer}.right-container .checkout-button *:focus{border:0px solid #fff}\n",""]),t.exports=o}},[[28,1,2]]]);