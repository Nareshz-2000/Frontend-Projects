let input = document.querySelector('input')
let get = (e)=>{
    // console.log(input.value);
    // console.log(e.target.innerText);
    input.value += e.target.innerText;
}

let res=()=>{
    input.value = eval(input.value)
}

let empty = ()=>{
    input.value = ""
}