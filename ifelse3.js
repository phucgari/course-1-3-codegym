function convert(){
    let cel=document.getElementById("cel").value
    let fah=cel *9/5+32
    alert(fah+" fahrenheit")
}
function convert2(){
    let met=document.getElementById("met").value
    let foot=met *3.2808
    if (foot<0){
        alert("invalid")
    }else {
    alert(foot+" feet")
    }
}
function square(){
    let side=document.getElementById("side").value
    let area= Math.pow(side,2)
    if (area<0){
        alert("invalid")
    }else {
        alert(area)
    }
}