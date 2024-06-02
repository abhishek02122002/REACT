const basketOne = document.querySelector('.basket-one span');
const basketTwo = document.querySelector('.basket-two span');
const btnleft = document.querySelector('#left-btn');
const btnRight = document.querySelector('#right-btn');

let totalApple = 10;
let firstBasketAppleCount = 10;
let SecondBasketAppleCount = totalApple - firstBasketAppleCount;

basketOne.innerText=firstBasketAppleCount;
basketTwo.innerText=SecondBasketAppleCount; 

btnleft.addEventListener('click',()=>{
     if(firstBasketAppleCount === totalApple){
          alert("Not Possible");
     }
    
     else{
          SecondBasketAppleCount--;
          basketTwo.innerText=SecondBasketAppleCount;
          firstBasketAppleCount++;
          basketOne.innerText=firstBasketAppleCount;

     }
},false);

btnRight.addEventListener('click',()=>{
     if(SecondBasketAppleCount === totalApple){
          alert("Not Possible");
     }
    
     else{
          firstBasketAppleCount--;
          basketOne.innerText=firstBasketAppleCount;
          SecondBasketAppleCount++;
          basketTwo.innerText=SecondBasketAppleCount;
     }
},false);
