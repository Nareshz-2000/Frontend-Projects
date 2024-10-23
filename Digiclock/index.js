let digi = ()=>{
    let span=document.getElementsByTagName('span');

    let d=new Date();

    span[0].innerText = ("0" + d.getHours()).slice(-2);   
    span[1].innerText = ("0" + d.getMinutes()).slice(-2);  
    span[2].innerText = ("0" + d.getSeconds()).slice(-2);  

    span[3].innerText = ("0" + d.getDate()).slice(-2);  
    span[4].innerText = month [d.getMonth()];
    span[5].innerText = d.getFullYear();

    span[6].innerText = day[d.getDate()]
}

let day = ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"]
let month = ["Jan","Feb","Mar","April","May","June","July","Aug","Nov","Dec"]





// span[0].innerText=dateObj.tolocaleTimestring()
// span[1].innerText=dateObj.tolocaleDatestring()

span

