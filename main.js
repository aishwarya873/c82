var mouseevent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width=document.getElementById("width").value;

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
    
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseevent="mouseleave";
    
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft;
    currentpositionofy=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width;
        ctx.arc(currentpositionofx,currentpositionofy,radius,0,2*Math.PI)
        ctx.stroke();
    }
    
 
    
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    

}

