let val = document.getElementById("output")

const display = (value) => {
    val.value += value
}
const solve = () => {
    let result = eval(val.value)
    val.value = result
}

/*let btn = document.getElementById("btn")
btn.style.backgroundColor = "brown"
btn.style.boxShadow = "1px 4px brown" */