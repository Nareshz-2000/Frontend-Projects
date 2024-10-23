let log=(e)=>{
    e.preventDefault()
    window.location= 'D:\WebTech\Projects\SuperSuitz\home.html'

    let name=e.target[0]
    let pass=e.target[1]
    
    let err=`border: solid 2px red;`
    if(name.value === "" || name.value === null)
    {
        name.style.cssText = err;
    }
    else if(pass.value ==="" || pass.value==null)
    {
        pass.style.cssText=err;
    }
    else{
        if(name.value==='Naresh')
        {
            if(pass.value==='1009'){
                location= './home.html'
            }
            else{
                pass.style.cssText = err;
            }
        }
        else{
            name.style.cssText = err;
        }
    }
}