document.addEventListener("DOMContentLoaded", () => {
    // **Menu Hambúrguer**
    const hamburgerMenu = document.getElementById("header-menu");
    const navList = document.getElementById("nav-list");

    // Ação para exibir/ocultar o menu de navegação ao clicar no hambúrguer
    hamburgerMenu.addEventListener("click", () => {
        navList.classList.toggle("active"); // Adiciona ou remove a classe 'active' no menu
    });

    // **Interatividade com ODS**
    const images = document.querySelectorAll(".ods-img");
    const card = document.getElementById("ods-card");
    const cardImg = document.getElementById("card-img");
    const cardInfo = document.getElementById("card-info");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    const odsData = {
        ods8: {
            img: "/assets/ods8.svg",
            text: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
        },
        ods9: {
            img: "/assets/ods9.svg",
            text: "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
        },
        ods10: {
            img: "/assets/ods10.svg",
            text: "Reduzir as desigualdades dentro dos países e entre eles.",
        },
        graph1: {
            img: "/assets/provisorio.png",
            text: "blablablabla",
        },
        graph2: {
            img: "/assets/provisorio.png",
            text: "blablablabla",
        },
    };

    images.forEach((img) => {
        img.addEventListener("click", () => {
            const odsId = img.getAttribute("data-id");
            const data = odsData[odsId];

            if (data) {
                cardImg.src = data.img;
                cardInfo.textContent = data.text;

                // Exibe o card e o overlay
                card.style.display = "block";
                overlay.style.display = "block";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        // Esconde o card e o overlay
        card.style.display = "none";
        overlay.style.display = "none";
    });

    // Fechar card ao clicar fora
    overlay.addEventListener("click", () => {
        card.style.display = "none";
        overlay.style.display = "none";
    });

    // **Interatividade dos Collapsibles**
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach((item) => {
        const head = item.querySelector('.collapsible-head');

        head.addEventListener('click', () => {
            // Fecha todos os outros dropdowns
            collapsibles.forEach((el) => {
                if (el !== item) {
                    el.classList.remove('open');
                }
            });

            // Alterna o dropdown clicado
            item.classList.toggle('open');
        });
    });
});
