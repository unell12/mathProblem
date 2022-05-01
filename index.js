const problem = document.querySelector("#problem")
const calc = document.querySelector("#calc")
const form = document.querySelector("#ans")
const inp = form.querySelector("input")
const btn = form.querySelector("button")
const genQbtn = document.querySelector("#gen")

function genQ(){
    genQbtn.classList.add("hidden")
    inp.classList.remove("hidden")
    btn.classList.remove("hidden")
    inp.value = ""
    const r = Math.floor(Math.random() * 100)
    const r2 = Math.floor(Math.random() * 100)

    problem.innerText = `${r} + ${r2} = ?`
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const itext = inp.value
        if (parseInt(itext) == r + r2){
            problem.innerText = "well done!"
            inp.classList.add("hidden")
            btn.classList.add("hidden")
            genQbtn.classList.remove("hidden")
        }else{
            problem.innerText = `😓.. ${r} + ${r2} = ?`
            inp.value = ""
            console.log(r + r2)
        }
    })
}

genQbtn.addEventListener("click", () => {
    window.location.reload()
})

genQ()