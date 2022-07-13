const cards = document.querySelectorAll('.card')

function setTransition(elt) {
    clearTimeout(elt.transitionTimeoutId)
    elt.style.transition = "transform 500ms cubic-bezier(.03,.98,.52,.99)"

    elt.transitionTimeoutId = setTimeout(() => {
        elt.style.transition = ""
    }, 500)
}

cards.forEach(card => {


    card.addEventListener('mousemove', (e) => { 
    const cardWidth = card.offsetWidth //300
    const cardHeight = card.offsetHeight //463
    const centerX = card.offsetLeft + cardWidth/2 //80 + 300 / 2 = 230
    const centerY = card.offsetTop + cardHeight/2 //60 + 463 / 2 = 291.5

    console.log(centerX, centerY);

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    
    const rotateX = ((+1)*25*mouseY/(cardHeight/2)).toFixed(2)
    const rotateY = ((-1)*25*mouseX/(cardWidth/2)).toFixed(2)
    console.log(rotateX, rotateY);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    card.addEventListener('mouseleave', (e) => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
        setTransition(elt)
    })

    card.addEventListener('mouseenter', (e) => {
        setTransition(card)
    })
});