let get = (e)=>{
    e.preventDefault()

    gun=e.target[0].value
    gps=e.target[1].value
}


let login = (e)=>{
    e.preventDefault()

    un=e.target[0]
    ps=e.target[1]

    console.log(un.value);
    console.log(ps.value);

    if(un.name==="naresh" && ps.value==="1234")
    {
        window.location = 'D:\WebTech\Projects\Testsub\welcome.html'
    }
    else{
        un.style.cssText = `border-color: red`
        ps.style.cssText = `border-color: red`
    }
}

