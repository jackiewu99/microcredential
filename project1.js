let btn1 = document.querySelectorAll('.add');

let btn2 = document.querySelectorAll('.cart');

let btn3 = document.querySelector('.openAll');


let pricing = document.querySelectorAll('.nowPrice');
let name = document.querySelectorAll('.itemName');
var counter1 = 1;
btn3.onclick = function(){
    if(counter1 == 1)
    {
    let sum = 0;
    let allName = "";
        for(var i = 0;i < 3;i++)
            {
                btn2[i].innerHTML = "Added to bag";
                btn2[i].style.backgroundColor = 'red';
                counter1 = 0;
                btn3.innerHTML = "Remove all";
                sum = sum + parseInt((pricing[i].innerHTML).substring(1)); 
                allName = allName + name[i].innerHTML+ " , "; 
                localStorage.setItem("flower",allName);
                localStorage.setItem("flowerPrice", sum);
                
            }
    }
    else
        for(var i = 0;i < 3;i++)
        {
            btn2[i].innerHTML = "Removed";
            btn2[i].style.backgroundColor = 'gray';
            counter1 = 1;
            btn3.innerHTML = "Add all to cart"
        }
    }

let btn4 = document.querySelector('.openAll2');
var counter2 = 1;
btn4.onclick = function(){
        if(counter2 == 1){
            let sum = 0;
            let allName = "";
            for(var i = 3;i < 6;i++)
            {
                btn2[i].innerHTML = "Added to bag";
                btn2[i].style.backgroundColor = 'red';
                counter2 = 0;
                btn4.innerHTML = "Remove all";
                sum = sum + parseInt((pricing[i].innerHTML).substring(1)); 
                allName = allName + name[i].innerHTML+ " , "; 
                localStorage.setItem("flower",allName);
                localStorage.setItem("flowerPrice", sum);
            }
        }
        else
        for(var i = 3;i < 6;i++)
        {
            btn2[i].innerHTML = "Removed";
            btn2[i].style.backgroundColor = 'gray';
            counter2 = 1;
            btn4.innerHTML = "Add all to cart"
        }
    }






    function add_bag(a){
        itemPrice = pricing[a-1].innerHTML; 
        itemName = name[a-1].innerHTML; 

        localStorage.setItem("flower",itemName);
        localStorage.setItem("flowerPrice", itemPrice);
    }

    let change = document.querySelector('.change');
    let theme = document.querySelector('.back');
    themeCounter = 1
    change.onclick = function(){
        if(themeCounter == 1)
        {
            theme.style.background = "lightgray";
            themeCounter = 0;
        }
        else
        {
            theme.style.background = "lightyellow";
            themeCounter = 1;
        }
    }