let p1 = $(".p1");
let p2 = $(".p2");
let p3 = $(".p3");
let p4 = $(".p4");
let p5 = $(".p5");

p1.click(function(){
   document.getElementById("demo").innerHTML = "you click 1 out of 5"
})

p2.click(function(){
   document.getElementById("demo").innerHTML = "you click 2 out of 5"
})

p3.click(function(){
   document.getElementById("demo").innerHTML = "you click 3 out of 5"
})

p4.click(function(){
   document.getElementById("demo").innerHTML = "you click 4 out of 5"
})

p5.click(function(){
   document.getElementById("demo").innerHTML = "you click 5 out of 5"
})

$("button").click(function(){
   $(".sec-div").css({display:"none"});
   $(".main-thanks").css({display:"block"});
});

