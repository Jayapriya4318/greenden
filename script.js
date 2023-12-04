var menu=document.getElementById("menu");
let sidemenu=document.getElementById("sidenav");
let close=document.getElementById("close-nav");
menu.addEventListener("click",function(){
    sidemenu.style.right="0";
});
close.addEventListener("click",function(){
    sidemenu.style.right="-50%";
});

let search=document.getElementById("search");
let product=document.getElementById("product");
let h2list=product.querySelectorAll("h2");
search.addEventListener("keyup",function(e){
    let entervalue=e.target.value.toUpperCase();
    for(let count=0;count<h2list.length;count++){
        if(h2list[count].textContent.toUpperCase().includes(entervalue)==true){
            h2list[count].closest("div").style.display="block";
        }else{
            h2list[count].closest("div").style.display="none";
        }
    }
})


// let search=document.getElementById("search");
// let product=document.getElementById("product");
// let productlist=product.querySelectorAll("div");
// console.log(productlist);
// search.addEventListener("keyup",function(e){
//     let entervalue=e.target.value.toUpperCase();
//     for(let count=0;count<productlist.length;count++){
//         let h2list=productlist[count].querySelector("h2").textContent;
//         if(h2list.toUpperCase().indexOf(entervalue)<0){
//             productlist[count].style.display='none';
//         }else{
//             productlist[count].style.display='block';
//         }
//     }
// })