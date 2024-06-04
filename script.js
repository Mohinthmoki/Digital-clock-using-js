let ampm=document.getElementById("ampm")
function display(){
    let d=new Date()
    let h=zero(d.getHours())
    let m=zero(d.getMinutes())
    let s=zero(d.getSeconds())
    if(h>12){
        h=h-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById("hr").innerHTML=h
    document.getElementById("min").innerHTML=m
    document.getElementById("sec").innerHTML=s

}
function zero(num){
    return num<10?"0"+num:num
}
setInterval(display,500)