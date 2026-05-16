const reviewsContainer =
document.getElementById("reviewsContainer");

const reviews = [
    "Excelente servicio y productos de gran calidad.",
    "Los componentes llegaron rápidamente y bien protegidos.",
    "Muy buena experiencia comprando en Gaming Space.",
    "Gran variedad de periféricos gamer.",
    "La atención al cliente fue excelente.",
    "Me encantó el diseño y funcionamiento del sitio.",
    "Muy recomendable para armar PCs gamer.",
    "Productos originales y a buen precio."
];
fetch("https://randomuser.me/api/?results=8")

.then(response => response.json())

.then(data => {

    data.results.forEach(user => {

        const randomReview =

        reviews[
            Math.floor(
                Math.random() * reviews.length
            )
        ];

        const card =
        document.createElement("div");

        card.className =
        "review-card";

        card.innerHTML = `
            <img src="${user.picture.large}"
                 alt="Usuario">

            <h3>
                ${user.name.first}
                ${user.name.last}
            </h3>

            <p class="stars">
                ⭐⭐⭐⭐⭐
            </p>

            <p class="review-text">
                "${randomReview}"
            </p>

            <p class="country">
                ${user.location.country}
            </p>
        `;
        reviewsContainer.appendChild(card);
    });
})

.catch(error => {
    console.log(error);
    reviewsContainer.innerHTML = `<p>No fue posible cargar las reviews.</p>`;
});