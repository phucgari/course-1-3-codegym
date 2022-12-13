function b6(){
    let dt=+document.getElementById("dt").value
    let heso
    if (dt>300)
        heso=5
    else if (dt>250)
        heso=4
    else if (dt>200)
        heso=3
    else if (dt>150)
        heso=2
    else
        heso=1
    let hh= heso*dt/100
    document.getElementById("b6").innerHTML= "Xep hạng hoa hồng: "+heso+". Tổng hoa hồng của bạn là: "+hh
}

function b7(){
    let soluong= document.getElementById("soluong").value
    let thoigian=document.getElementById("thoigian").value
    let tien=soluong*1000+thoigian*2000
    document.getElementById("b7").innerHTML= "Tổng tiền phải trả là "+tien+" VND"
}