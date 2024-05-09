let t = document.getElementById("output")

const display=(value)=>{
    t.value+=value
}
const evaluate=()=>{
    let m=t.value
    let r=eval(m)
    document.getElementById("output").value=r

   
}