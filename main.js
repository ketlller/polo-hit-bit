var btn = document.querySelector('button');
var div = document.querySelector('.div');

var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuyPZM_BTC = document.querySelector('.buyPZM_BTC span');
var divSellPZM_BTC = document.querySelector('.sellPZM_BTC span');

var divBuyCOIN_USD = document.querySelector('.buyCOIN_USD span');
var divSellCOIN_USD = document.querySelector('.sellCOIN_USD span');
var divBuyCOIN_USD_livecoin = document.querySelector('.buyCOIN_USD_livecoin span');
var divSellCOIN_USD_livecoin = document.querySelector('.sellCOIN_USD_livecoin span');
var divBuyCOIN_USD_hotbit = document.querySelector('.buyCOIN_USD_hotbit span');
var divSellCOIN_USD_hotbit = document.querySelector('.sellCOIN_USD_hotbit span');

var divBuyCOIN_USD_livecoin1 = document.querySelector('.BuyCOIN_USD_livecoin1 span');
var divSellCOIN_USD_livecoin1 = document.querySelector('.SellCOIN_USD_livecoin1 span');
var divBuyCOIN_USD1 = document.querySelector('.BuyCOIN_USD1 span');
var divSellCOIN_USD1 = document.querySelector('.SellCOIN_USD1 span');
var divBuyCOIN_USD_hotbit1 = document.querySelector('.BuyCOIN_USD_hotbit1 span');
var divSellCOIN_USD_hotbit1 = document.querySelector('.SellCOIN_USD_hotbit1 span');
 
var btcalphalivecoin = document.querySelector('.inputdrub1 span');
var livecoinbtcalpha = document.querySelector('.inputdrub2 span');
var btcalphahotbit = document.querySelector('.inputdrub3 span');
var hotbitbtcalpha = document.querySelector('.inputdrub4 span');
var hotbitlivecoin = document.querySelector('.inputdrub5 span');
var livecoinhotbit = document.querySelector('.inputdrub6 span');

var counter = document.querySelector('#counter');
var counter1 = document.querySelector('#counter1');
var counter2 = document.querySelector('#counter2');
var counter3 = document.querySelector('#counter3');
var counter4 = document.querySelector('#counter4');
var counter5 = document.querySelector('#counter5');

var counterS11 = document.querySelector('#counterS11');
var counterS22 = document.querySelector('#counterS22');
var counterS33 = document.querySelector('#counterS33');
var counterS44 = document.querySelector('#counterS44');
var counterS55 = document.querySelector('#counterS55');
var counterS66 = document.querySelector('#counterS66');

var counterS111 = document.querySelector('#counterS111');
var counterS222 = document.querySelector('#counterS222');
var counterS333 = document.querySelector('#counterS333');
var counterS444 = document.querySelector('#counterS444');
var counterS555 = document.querySelector('#counterS555');
var counterS666 = document.querySelector('#counterS666');

var counterS1111 = document.querySelector('#counterS1111');
var counterS2222 = document.querySelector('#counterS2222');
var counterS3333 = document.querySelector('#counterS3333');
var counterS4444 = document.querySelector('#counterS4444');
var counterS5555 = document.querySelector('#counterS5555');
var counterS6666 = document.querySelector('#counterS6666');

var counterS11111 = document.querySelector('#counterS11111');
var counterS22222 = document.querySelector('#counterS22222');
var counterS33333 = document.querySelector('#counterS33333');
var counterS44444 = document.querySelector('#counterS44444');
var counterS55555 = document.querySelector('#counterS55555');
var counterS66666 = document.querySelector('#counterS66666');



 var currentPrice_BuyCOIN_USD = null;
 var currentPrice_SellCOIN_USD = null;
  var currentPrice_BuyCOIN_USD_livecoin = null;
  var currentPrice_SellCOIN_USD_livecoin = null;
var currentPrice_BuyCOIN_USD_hotbit = null;
var currentPrice_SellCOIN_USD_hotbit = null;

 var previousPositive = true; 
var previousPositive1 = true; 
var previousPositive2 = true; 
var previousPositive3 = true; 
var previousPositive4 = true; 
var previousPositive5 = true; 

var previousPositive11 = true; 
var previousPositive22 = true; 
var previousPositive33 = true; 
var previousPositive44 = true; 
var previousPositive55 = true; 
var previousPositive66 = true; 

var previousPositive111 = true; 
var previousPositive222 = true; 
var previousPositive333 = true; 
var previousPositive444 = true; 
var previousPositive555 = true; 
var previousPositive666 = true; 

var previousPositive1111 = true; 
var previousPositive2222 = true; 
var previousPositive3333 = true; 
var previousPositive4444 = true; 
var previousPositive5555 = true; 
var previousPositive6666 = true; 

var previousPositive11111 = true; 
var previousPositive22222 = true; 
var previousPositive33333 = true; 
var previousPositive44444 = true; 
var previousPositive55555 = true; 
var previousPositive66666 = true; 

//var StatusConect_btcalpha = document.querySelector('#StatusConect_btcalpha');
//var StatusConect_livecoin = document.querySelector('#StatusConect_livecoin');
//var StatusConect_hotbit = document.querySelector('#StatusConect_hotbit');

 btn.addEventListener('click', () => {  


   var val1 = document.querySelector("#new_type1").value;
   var val2 = document.querySelector("#new_type2").value;
   var val3 = document.querySelector("#new_type3").value;
   //var val4 = document.querySelector("#new_type4").value;
   
    var targetUrl_COIN_USD = 'https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_ETH'; 
   targetUrl_COIN_USD=targetUrl_COIN_USD.replace(/[^\=]*$/,val1);
   
   
    var targetUrl_COIN_USD_Livecoin = 'https://api.hitbtc.com/api/2/public/orderbook/ETHBTC';
   targetUrl_COIN_USD_Livecoin=targetUrl_COIN_USD_Livecoin.replace(/[^\/]*$/,val2);
   
   
   
      var targetUrl_COIN_USD_hotbit1 = 'https://api.bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both'; 
   targetUrl_COIN_USD_hotbit1=targetUrl_COIN_USD_hotbit1.replace(/([?&]market=)[^&]+/,'$1'+val3);


   
     // var targetUrl_COIN_USD_hotbit2 = 'https://api.hotbit.io/api/v1/order.book?market=PZM/USDT&side=2&offset=0&limit=1'; 
 //  targetUrl_COIN_USD_hotbit2=targetUrl_COIN_USD_hotbit2.replace(/([?&]market=)[^&]+/,'$1'+val3);



   
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    
let resUrl1 = proxyUrl + targetUrl_COIN_USD;
let resUrl2 = proxyUrl + targetUrl_COIN_USD_Livecoin;
let resUrl3 = proxyUrl + targetUrl_COIN_USD_hotbit1;
//let resUrl4 = proxyUrl + targetUrl_COIN_USD_hotbit2;

console.log()
   
   
   
   
   
   
   
 
   fetch(resUrl1)
    .then(res => {
      res.json().then(body => {
     divBuyCOIN_USD.innerHTML = body.bids[0][0];  
   divBuyCOIN_USD1.innerHTML = body.bids[0][1]; 
    divSellCOIN_USD.innerHTML = body.asks[0][0];
  divSellCOIN_USD1.innerHTML = body.asks[0][1];
    
     currentPrice_BuyCOIN_USD = body.bids[0][0];
     currentPrice_SellCOIN_USD = body.asks[0][0];
   // StatusConect_COIN_USD_btcalpha = body.asks[0].price;
    
   
    });
  })
  .catch(err => console.log(err)); 


     

   fetch(resUrl2)
    .then(res => {
      res.json().then(body => {  
      divBuyCOIN_USD_livecoin.innerHTML = body.bid[0].price;
    divBuyCOIN_USD_livecoin1.innerHTML = body.bid[0].size;
      divSellCOIN_USD_livecoin.innerHTML = body.ask[0].price;
    divSellCOIN_USD_livecoin1.innerHTML = body.ask[0].size;
    
       currentPrice_BuyCOIN_USD_livecoin = body.bid[0].price;
       currentPrice_SellCOIN_USD_livecoin = body.ask[0].price;
     //  StatusConect_COIN_USD_livecoin = body.bids[0].length; 
        
       
        
 var value = (((currentPrice_BuyCOIN_USD*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);   
      livecoinbtcalpha.innerHTML = value;
 var value1 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);
      livecoinhotbit.innerHTML = value1;    
 var value2 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_SellCOIN_USD)-100).toFixed(2); 	 
      btcalphalivecoin.innerHTML = value2;        
  var value3 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);
      hotbitlivecoin.innerHTML = value3; 
 var value4 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD)-100).toFixed(2);         
      btcalphahotbit.innerHTML = value4;
 var value5 = (((currentPrice_BuyCOIN_USD*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);      
      hotbitbtcalpha.innerHTML = value5; 	      
      console.log(body);
	      
        
       
      
      if(value > 0) {
        if(previousPositive) {
          counter.innerHTML++;
          previousPositive = false;
     }	      
      } else {
        previousPositive = true;
      }
        
      
        if(value1 > 0) {
        if(previousPositive1) {
          counter1.innerHTML++;
          previousPositive1 = false;
     }		
      } else {
        previousPositive1 = true;
      }
	      
      
        if(value2 > 0) {
        if(previousPositive2) {
          counter2.innerHTML++;
          previousPositive2 = false;
 }		
      } else {
        previousPositive2 = true;
      }


        if(value3 > 0) {
        if(previousPositive3) {
          counter3.innerHTML++;
          previousPositive3 = false;
 }		
      } else {
        previousPositive3 = true;
      }
        
      
        if(value4 > 0) {
        if(previousPositive4) {
          counter4.innerHTML++;
          previousPositive4 = false;
}		
      } else {
        previousPositive4 = true;
      }

        

        if(value5 > 0) {
        if(previousPositive5) {
          counter5.innerHTML++;
          previousPositive5 = false;
       }		
      } else {
        previousPositive5 = true;
      }
        
	      
	      
	      
     
      if(value > 0) {
        if(previousPositive11) {
          if(value > 1.49) { 
          counterS11.innerHTML++;
          previousPositive11 = false;
        }
}	      
      } else {
        previousPositive11 = true;
      }
        
     
        if(value1 > 0) {
        if(previousPositive22) {
          if(value1 > 1.49) {   
          counterS22.innerHTML++;
          previousPositive22 = false;
        }
}		
      } else {
        previousPositive22 = true;
      }
	      
    
        if(value2 > 0) {
        if(previousPositive33) {
          if(value2 > 1.49) {    
          counterS33.innerHTML++;
          previousPositive33 = false;
        }
 }		
      } else {
        previousPositive33 = true;
      }


        if(value3 > 0) {
        if(previousPositive44) {
          if(value3 > 1.49) {
          counterS44.innerHTML++;
          previousPositive44 = false;
        }
 }		
      } else {
        previousPositive44 = true;
      }
        
      
        if(value4 > 0) {
        if(previousPositive55) {
          if(value4 > 1.49) {	
          counterS55.innerHTML++;
          previousPositive55 = false;
        }
}		
      } else {
        previousPositive55 = true;
      }


        if(value5 > 0) {
        if(previousPositive66) {
          if(value5 > 1.49) {	
          counterS66.innerHTML++;
          previousPositive66 = false;
        }
}		
      } else {
        previousPositive66 = true;
      }
        
	      
	      
	      
   
      if(value > 0) {
        if(previousPositive111) {
          if(value > 2.49) {   
          counterS111.innerHTML++;
          previousPositive111 = false;
        }
}	      
      } else {
        previousPositive111 = true;
      }
        
      
        if(value1 > 0) {
        if(previousPositive222) {
          if(value1 > 2.49) {  
          counterS222.innerHTML++;
          previousPositive222 = false;
        }
}		
      } else {
        previousPositive222 = true;
      }
	      
     
        if(value2 > 0) {
        if(previousPositive333) {
          if(value2 > 2.49) {   
          counterS333.innerHTML++;
          previousPositive333 = false;
        }
 }		
      } else {
        previousPositive333 = true;
      }


        if(value3 > 0) {
        if(previousPositive444) {
          if(value3 > 2.49) {
          counterS444.innerHTML++;
          previousPositive444 = false;
        }
 }		
      } else {
        previousPositive444 = true;
      }
        
     
        if(value4 > 0) {
        if(previousPositive555) {
          if(value4 > 2.49) {	 
          counterS555.innerHTML++;
          previousPositive555 = false;
        }
}		
      } else {
        previousPositive555 = true;
      }


        if(value5 > 0) {
        if(previousPositive666) {
          if(value5 > 2.49) {	
          counterS666.innerHTML++;
          previousPositive666 = false;
        }
}		
      } else {
        previousPositive666 = true;
      }
        
	      
	      
	   	      
	      	      
    
      if(value > 0) {
        if(previousPositive1111) {
	  if(value > 4.99) {	
          counterS1111.innerHTML++;
          previousPositive1111 = false;
        }
}	      
      } else {
        previousPositive1111 = true;
      }
        
     
        if(value1 > 0) {
        if(previousPositive2222) {
          if(value1 > 4.99) {   
          counterS2222.innerHTML++;
          previousPositive2222 = false;
        }
}		
      } else {
        previousPositive2222 = true;
      }
	      
     
        if(value2 > 0) {
        if(previousPositive3333) {
          if(value2 > 4.99) {   
          counterS3333.innerHTML++;
          previousPositive3333 = false;
        }
 }		
      } else {
        previousPositive3333 = true;
      }


        if(value3 > 0) {
        if(previousPositive4444) {
          if(value3 > 4.99) {
          counterS4444.innerHTML++;
          previousPositive4444 = false;
        }
 }		
      } else {
        previousPositive4444 = true;
      }
        
      
        if(value4 > 0) {
        if(previousPositive5555) {
          if(value4 > 4.99) {	
          counterS5555.innerHTML++;
          previousPositive5555 = false;
        }
}		
      } else {
        previousPositive5555 = true;
      }

	
        if(value5 > 0) {
        if(previousPositive6666) {
          if(value5 > 4.99) {
          counterS6666.innerHTML++;
          previousPositive6666 = false;
        }
}		
      } else {
        previousPositive6666 = true;
      }
        
	      
	      
	   	      
   
      if(value > 0) {
        if(previousPositive11111) {
          if(value > 9.99) {   
          counterS11111.innerHTML++;
          previousPositive11111 = false;
        }
}	      
      } else {
        previousPositive11111 = true;
      }
        
     
        if(value1 > 0) {
        if(previousPositive22222) {
          if(value1 > 9.99) {   
          counterS22222.innerHTML++;
          previousPositive22222 = false;
        }
}		
      } else {
        previousPositive22222 = true;
      }
	      
     
        if(value2 > 0) {
        if(previousPositive33333) {
          if(value2 > 9.99) {   
          counterS33333.innerHTML++;
          previousPositive33333 = false;
        }
 }		
      } else {
        previousPositive33333 = true;
      }


        if(value3 > 0) {
        if(previousPositive44444) {
          if(value3 > 9.99) {
          counterS44444.innerHTML++;
          previousPositive44444 = false;
        }
 }		
      } else {
        previousPositive44444 = true;
      }
        
     
        if(value4 > 0) {
        if(previousPositive55555) {
          if(value4 > 9.99) {	 
          counterS55555.innerHTML++;
          previousPositive55555 = false;
        }
}		
      } else {
        previousPositive55555 = true;
      }


        if(value5 > 0) {
        if(previousPositive66666) {
          if(value5 > 9.99) {	
          counterS66666.innerHTML++;
          previousPositive66666 = false;
        }
}		
      } else {
        previousPositive66666 = true;
      }
        
	      
	    	      	      
	  	      
	      
	      
	      
	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_BuyCOIN_USD && $('#livecoinbtcalpha_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_SellCOIN_USD_hotbit && $('#livecoinhotbit_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD < currentPrice_BuyCOIN_USD_livecoin && $('#btcalphalivecoin_notificator').prop('checked'))beep();
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD_livecoin && $('#hotbitlivecoin_notificator').prop('checked'))beep();        
if(currentPrice_SellCOIN_USD < currentPrice_SellCOIN_USD_hotbit && $('#btcalphahotbit_notificator').prop('checked'))beep();        
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD && $('#hotbitbtcalpha_notificator').prop('checked'))beep();        
       
   // if(StatusConect_COIN_USD_btcalpha > 0) { 
         //   StatusConect_btcalpha.innerHTML = ('Status: OK Conected');
     // StatusConect_btcalpha.style.color = "#006400";

      //   } else {
      //  StatusConect_btcalpha.innerHTML = ('Status: NO Conected');
      //       StatusConect_btcalpha.style.color = "#f00";
     // }      
      
        
     // if(StatusConect_COIN_USD_livecoin == 3) { 
     //       StatusConect_livecoin.innerHTML = ('Status: OK Conected');
    //    StatusConect_livecoin.style.color = "#006400";
      //   } else {
       // StatusConect_livecoin.innerHTML = ('Status: NO Conected');
       //    StatusConect_livecoin.style.color = "#f00";
//      }   
        
  //     if(StatusConect_COIN_USD_hotbit == 1) { 
    //        StatusConect_hotbit.innerHTML = ('Status: OK Conected');
      //   StatusConect_hotbit.style.color = "#006400";
  //       } else {
   //     StatusConect_hotbit.innerHTML = ('Status: NO Conected');
       //    StatusConect_hotbit.style.color = "#f00";
     // }     
     
        
        
     
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  fetch(resUrl3)
    .then(res => {
      res.json().then(body => {  
      
    divBuyCOIN_USD_hotbit.innerHTML = body.result.sell[0].Rate;
    divBuyCOIN_USD_hotbit1.innerHTML = body.result.sell[0].Quantity;
     
    currentPrice_BuyCOIN_USD_hotbit = body.result.sell[0].Rate;
     
        
   divSellCOIN_USD_hotbit.innerHTML = body.result.buy[0].Rate;
   divSellCOIN_USD_hotbit1.innerHTML = body.result.buy[0].Quantity;
    
   currentPrice_SellCOIN_USD_hotbit = body.result.buy[0].Rate;   
        
       
     console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  // fetch(resUrl4)
 //   .then(res => {
  //    res.json().then(body => {  
 	// divSellCOIN_USD_hotbit.innerHTML = body.result.orders[0].price;
 //  divSellCOIN_USD_hotbit1.innerHTML = body.result.orders[0].left;
    
  // currentPrice_SellCOIN_USD_hotbit = body.result.orders[0].price;
        
  //StatusConect_COIN_USD_hotbit = body.result.orders.length;  
        
  //  console.log(body);

 //   });
 // })
  //.catch(err => console.log(err)); 
  
   
   
   setTimeout(() => {   
//отправляем смс на Телеграм бота   
var chatid = "278006495";
var token = "996232700:AAEnZnXQV8SkMOXNIm3zChiytOdZtFcKu4Q";

     // %0A - строка будет с нового рядка
var text1 = "Btc-alpha ➤ Hotbit:" + ' ' + (btcalphahotbit.innerHTML) + "%"; 
var text2 = "%0AHotbit ➤ Btc-alpha:" + ' ' + (hotbitbtcalpha.innerHTML) + "%"; 
var text3 = "%0ABtc-alpha ➤ Livecoin:" + ' ' + (btcalphalivecoin.innerHTML) + "%";
var text4 = "%0ALivecoin ➤ Btc-alpha:" + ' ' + (livecoinbtcalpha.innerHTML) + "%";   var text5 = "%0ALivecoin ➤ Hotbit:" + ' ' + (livecoinhotbit.innerHTML) + "%";
var text6 = "%0AHotbit ➤ Livecoin:" + ' ' + (hotbitlivecoin.innerHTML) + "%";  
     
//Отправляем текст в наш телеграм канал
livecoinbtcalphaSMS(token,text1,text2,text3,text4,text5,text6,chatid); 
 function livecoinbtcalphaSMS(token,text1,text2,text3,text4,text5,text6,chatid){
  var z=$.ajax({  
  type: "POST",  
  url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid+"&text="+text1+text2+text3+text4+text5+text6,
  
   
  }); 
 };

     }, 3000);
   
   
   // Last Sync: 15/12/2019 @ 19:52:37 - последний запуск функции покажет)),  обновили и показало(обновило) время и на паузу его поставило
   var currentdate = new Date(); 
	var datetime = "Last Sync: " + currentdate.getDate() + "/"
	                + (currentdate.getMonth()+1)  + "/" 
	                + currentdate.getFullYear() + " @ "  
	                + currentdate.getHours() + ":"  
	                + currentdate.getMinutes() + ":" 
	                + currentdate.getSeconds();
	$('.updtime span').html(datetime);
   
   
   
  
   });


  



  function beep() {
	(new Audio("beep.wav")).play();
};
  
