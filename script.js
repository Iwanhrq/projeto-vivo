document.addEventListener("DOMContentLoaded", () => {
    // Variáveis para o hambúrguer e menu de navegação
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");

    // Ação para exibir/ocultar o menu de navegação ao clicar no hambúrguer
    hamburgerMenu.addEventListener("click", () => {
        navList.classList.toggle("active");  // Adiciona ou remove a classe 'active' no menu
    });

    // Código existente para o card de "ODS" (sem mudanças)
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
});
