const greeting = document.getElementById("greeting")
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"
// const username = window.prompt("What is your name?", "Jane")
// greeting.innerHTML = "Welcome to my website, " + username;
function flipCard(front) {
    const card = front.closest(".flip-card");
    card.classList.toggle("flipped");
}
