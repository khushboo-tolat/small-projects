const userCard = document.querySelector("[data-user-template]");
const cardContainer = document.querySelector("[data-user-card-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisisble =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value);
        
        user.element.classList.toggle("hide", !isVisisble);
    });
});

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCard.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            header.textContent = user.name;
            body.textContent = user.email;
            cardContainer.append(card);

            return { name: user.name, email:user.email, element: card}
        });
    })
