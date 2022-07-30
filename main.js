
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

const message = document.getElementById('message');

const btn = document.getElementById('btnSubmit');

const ratings = document.querySelectorAll(".buttons button");



let selected = '';

ratings.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
        removeClass();
        selected = e.target.outerText
        e.target.classList.add('selected');
        console.log(selected)
    })
    
})

btn.addEventListener("click", () => {
    message.textContent = `You selected ${selected} out of 5`
    card1.classList.add("content");
    card2.classList.remove("content");
})


function removeClass() {
    ratings.forEach(btn => {
        btn.classList.remove('selected');
    })
}