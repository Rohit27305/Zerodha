var hm = document.querySelector(".ham");

var item = document.querySelector(".hamclick");
hm.addEventListener("click" , function(){
    if(item.style.display === 'none'){
        hm.src = "./ZStore/cross.svg";
        item.style.display = 'block';
    }else{
        hm.src = "./ZStore/Hamburger.svg";
        item.style.display = 'none';
    } 
});

var close = document.querySelector(".cross");
close.addEventListener("click" , function(){
    if(item.style.display === 'none'){
        hm.src = "./ZStore/cross.svg";
        item.style.display = 'block';
    }else{
        hm.src = "./ZStore/Hamburger.svg";
        item.style.display = 'none';
    } 
})

