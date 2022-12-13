function b1(){
    let a =document.getElementById("a").value
    let b =document.getElementById("b").value
    let b1result = a%b
    if (b1result==0){
        document.getElementById("b1").innerHTML="a chia hết cho b"
    }
    else{
    document.getElementById("b1").innerHTML="a không chia hết cho b"
    }
}
function b2(){
    let age=document.getElementById("age").value
    if (age>15){
        document.getElementById("b2").innerHTML="dư tuổi lên cấp 3 em nhé"
    }
    else{
        document.getElementById("b2").innerHTML="đợi vài năm nữa đi babe"
    }
}
function b3(){
    let amduong=document.getElementById("amduong").value
    if (amduong>=0){
        document.getElementById("b3").innerHTML=amduong + " là số dương"
    }
    else{
        document.getElementById("b3").innerHTML=amduong + " là số âm"
    }
}
function b4(){
    let st1=document.getElementById("st1").value
    let st2=document.getElementById("st2").value
    let st3=document.getElementById("st3").value
    let max= st1>st2&&st1>st3?st1:st2>st3?st2:st3
    document.getElementById("b4").innerHTML= "Số lớn nhất là "+ max
}
function b5(){
    let ktra=+document.getElementById("ktra").value
    let giua=+document.getElementById("giua").value
    let cuoi=+document.getElementById("cuoi").value
    let sum= (ktra*2+giua*3+cuoi*5)/10
    if (sum>8){
        document.getElementById("b5").innerHTML= "Điểm trung bình môn là " + sum.toFixed(2) + ". Đạt loại giỏi. Xin chúc mừng"
    }
    else if (sum>6){
        document.getElementById("b5").innerHTML= "Điểm trung bình môn là " + sum.toFixed(2) + ". Đạt loại khá. Tạm được"
    }
    else if (sum>4){
        document.getElementById("b5").innerHTML= "Điểm trung bình môn là " + sum.toFixed(2) + ". Đạt loại trung bình. Vừa đủ qua môn ok"
    }
    else {
        document.getElementById("b5").innerHTML= "Điểm trung bình môn là " + sum.toFixed(2) + ". Quá tệ. Chúng ta không bàn tới bạn"
    }
}