const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show",
            entry.isIntersecting)
        } )
    },
    {
        threshold: 1
    }
)    

cards.forEach(card=> {
    observer.observe(card)
})
        
// function loadNewCards() {
//     for(let i=0; i<20; i++) {
//         const card = document.createElement("div")
//         card.textContent = "New Card"
//         card.classList.add("card")
//         cardContainer.append(card)
//     }
// }