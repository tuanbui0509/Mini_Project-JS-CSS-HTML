const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        //remove all class active into div
        removeActiveClass()
        // this div current add class active
        console.log(panel)

        panel.classList.add('active')
    })
})

function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
