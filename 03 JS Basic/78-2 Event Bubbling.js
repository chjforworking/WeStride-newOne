const b = document.querySelector('button')
b.addEventListener("click",function(e){
    e.stopPropagation()
})