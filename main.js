const cards = [
    {
        name: "Стив Джобс",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMr0eqCSav_lBcdZal3aCTMywiOfnB7BFPg&s",
        quote: "Ваше время ограничено, не тратьте его, проживая чужую жизнь."
    },
    {
        name: "Альберт Эйнштейн",
        photo: "https://dovidka.biz.ua/wp-content/uploads/2015/12/albert-eynshteyn-tsikavi-fakty.jpg",
        quote: "Воображение важнее знания."
    },
    {
        name: "Мария Кюри",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbm4IxfnTbtJxiyHwbamauqEW8o0jMYngWQ&s",
        quote: "Ничего в жизни не следует бояться, это нужно только понять."
    },
    {
        name: "Нельсон Мандела",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrRwCLX6NIG73bCkHshTSL2VjSMuA_fxDBw&s",
        quote: "Образование — это самое мощное оружие, которое вы можете использовать."
    },
    {
        name: "Майя Энджелоу",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEa1Z_s-PPa86948yvy3HuurnMq4PplMq-g&s",
        quote: "Люди никогда не забудут, что вы заставили их почувствовать."
    }
];

let current = 0;

function showCard() {
    const card = cards[current];
    document.getElementById('cardContainer').innerHTML = `
        <div class="card">
            <img src="${card.photo}" alt="${card.name}">
            <h2>${card.name}</h2>
            <p>${card.quote}</p>
        </div>
    `;
    document.getElementById('counter').textContent = `${current + 1} / ${cards.length}`;
}

function nextCard() {
    current = (current + 1) % cards.length;
    showCard();
}

function prevCard() {
    current = (current - 1 + cards.length) % cards.length;
    showCard();
}

showCard();