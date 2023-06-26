let p1 = $(".p1");
let p2 = $(".p2");
let p3 = $(".p3");
let p4 = $(".p4");
let p5 = $(".p5");

p1.click(function(){
   document.getElementById("demo").innerHTML = "You selected 1 out of 5"
})

p2.click(function(){
   document.getElementById("demo").innerHTML = "You selected 2 out of 5"
})

p3.click(function(){
   document.getElementById("demo").innerHTML = "You selected 3 out of 5"
})

p4.click(function(){
   document.getElementById("demo").innerHTML = "You selected 4 out of 5"
})

p5.click(function(){
   document.getElementById("demo").innerHTML = "You selected 5 out of 5"
})

$("button").click(function(){
   $(".sec-div").css({display:"none"});
   $(".main-thanks").css({display:"block"});
});

