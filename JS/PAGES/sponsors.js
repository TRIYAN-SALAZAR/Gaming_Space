const sponsors = [

    {
        name: "NVIDIA",

        logo:
        "https://1000marcas.net/wp-content/uploads/2020/03/Logo-NVIDIA.png",

        description:
        "Empresa líder en tarjetas gráficas RTX y tecnologías de inteligencia artificial."
    },

    {
        name: "AMD",

        logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/960px-AMD_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220519064011",

        description:
        "Fabricante de procesadores Ryzen y tarjetas gráficas Radeon."
    },

    {
        name: "Intel",

        logo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",

        description:
        "Compañía reconocida mundialmente por sus procesadores de alto rendimiento."
    },

    {
        name: "MSI",

        logo:
        "https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo-2019-present.png",

        description:
        "Fabricante de hardware gamer, laptops y tarjetas madre."
    },

    {
        name: "Corsair",

        logo:
        "https://1000logos.net/wp-content/uploads/2020/10/Corsair-logo.png",

        description:
        "Especialistas en periféricos gamer, memorias RAM y sistemas RGB."
    },

    {
        name: "Razer",

        logo:
        "https://www.freelogovectors.net/wp-content/uploads/2023/08/razer-logo-03-freelogovectors.net_.png",

        description:
        "Marca icónica de periféricos y accesorios gamer."
    }
];

/* ============================================
   GENERAR CARDS
   ============================================ */

const sponsorsContainer =
document.getElementById("sponsorsContainer");

sponsors.forEach(sponsor => {

    const card =
    document.createElement("div");

    card.className =
    "sponsor-card";

    card.innerHTML = `

        <img src="${sponsor.logo}"
             alt="${sponsor.name}">

        <h3>
            ${sponsor.name}
        </h3>

        <p>
            ${sponsor.description}
        </p>
    `;

    sponsorsContainer.appendChild(card);
});

/* ============================================
   GENERAR CARRUSEL
   ============================================ */

const carouselTrack =
document.getElementById("carouselTrack");

sponsors.forEach(sponsor => {

    const logo =
    document.createElement("img");

    logo.src =
    sponsor.logo;

    logo.alt =
    sponsor.name;

    carouselTrack.appendChild(logo);
});

/* Duplicar logos para scroll infinito */

sponsors.forEach(sponsor => {

    const logo =
    document.createElement("img");

    logo.src =
    sponsor.logo;

    logo.alt =
    sponsor.name;

    carouselTrack.appendChild(logo);
});