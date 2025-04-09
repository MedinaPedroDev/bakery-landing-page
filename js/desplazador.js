const boton=document.querySelector(".arriva")

boton.addEventListener(`click`,()=>{
    
    window.scrollTo(0,0)
})

window.onscroll=()=>{
    if(window.scrollY<300){
        boton.classList.remove(`show`)
    }else{
        boton.classList.add(`show`)
    }
}