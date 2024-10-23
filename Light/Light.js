let onoff=()=>{
    let button=document.getElementById('mood')
    let a=button.innerText
    if(a==='ON'){
        button.innerText='OFF'
        document.getElementsByTagName('button')[0].style = `background: red`
        document.getElementsByClassName('bulb')[0].style =`background: radial-gradient(orange,yellow);
        box-shadow: 0px 0px 20px orange,0px 0px 40px yellow,0px 0px 80px yellow,0px 0px 100px yellow,0px 0px 200px yellow,0px 0px 300px yellow,0px 0px 500px yellow`
    }
    else{
        button.innerText='ON'
        document.getElementsByTagName('button')[0].style = `background: green`
        document.getElementsByClassName('bulb')[0].style ='background:rgb(189, 176, 176)';
    }
}

let bgc=()=>{
    let a=prompt('Enter color')
    document.body.style = `background: ${a}`
}