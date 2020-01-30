document.getElementById("button1").addEventListener("click",function() {
    document.getElementById("box").style.height="250px";
    document.getElementById("box").style.width="250px";
});
document.getElementById("button2").addEventListener("click",function() {
    document.getElementById("box").style.backgroundColor="blue";
});
document.getElementById("button3").addEventListener("click",function() {
    document.getElementById("box").style.opacity="0.2";
});
document.getElementById("button4").addEventListener("click",function() {
    document.getElementById("box").innerHTML="Hi!";
});
document.getElementById("button5").addEventListener("click",function() {
    document.getElementById("box").style.border="2px dashed #000000";
});
document.getElementById("button6").addEventListener("click",function() {
    document.getElementById("box").style.boxShadow = "10px 20px 30px blue";
});
document.getElementById("button7").addEventListener("click",function() {
    document.getElementById("box").style.backgroundColor="orange";
    document.getElementById("box").style.opacity="1.0";
    document.getElementById("box").style.height="150px";
    document.getElementById("box").style.width="150px";
    document.getElementById("box").innerHTML="";
    document.getElementById("box").style.border="none";
    document.getElementById("box").style.boxShadow="none";
});