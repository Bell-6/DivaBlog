const API_URL = "http://localhost:3000/posts";

const destaque = document.querySelector(".divimgg");
const popularesWrapper = document.querySelector(".wrapper");
const artigosContainer = document.querySelector(".artdimages");
const btnCarregar = document.querySelector(".butart");

let limiteArtigos = 3;
let allPosts = [];     
let artigosData = [];

const searchInput = document.getElementById("busca");


// Para os posts aprecerem no show funcionar
async function carregarPosts() {
    const resposta = await fetch(API_URL);
    const posts = await resposta.json();

    allPosts = posts;
    artigosData = posts.slice(4); 

    mostrarDestaque(posts[0]);
    mostrarPopulares(posts.slice(1, 4));
    mostrarArtigos(artigosData);

    controlarArtigos();
    atualizarTempos();
}

// Para a gente checar se o campo busca existe funcionar
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.trim().toLowerCase();
        filtrarPosts(termo);
    });
}

// Para só aparecerem com base no que eu digitar funcionar
function filtrarPosts(termo) {
    if (!termo) {
        mostrarArtigos(artigosData);
        controlarArtigos();
        return;
    }

    const filtrados = artigosData.filter(post =>
        post.titulo.toLowerCase().includes(termo) ||
        post.categoria.toLowerCase().includes(termo)
    );

    mostrarArtigos(filtrados);

    btnCarregar.style.display = "none";
}


// Parte que ficará o destaque funcionar
function mostrarDestaque(post) {
    destaque.innerHTML = `
        <a href="../Pages/Subpages/Taylor.html?id=${post.id}" class="postLinkd">
            <h2 class="destaque">Em destaque</h2>
            <img src="${post.url}" class="imgg">

            <div class="divps">
                <h4 class="ptagdes">${post.categoria}</h4>
                
                <p class="pdatades">
                <i class="fa-regular fa-calendar" style="color: var(--cor-neon-3)"></i>  ${post.data} · <i class="fa-regular fa-clock" style="color: var(--cor-neon-3)"></i> <span data-editado="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span>
                </p>
            </div>

            <h3 class="textdest">${post.titulo}</h3>
        </a>
    `;
}

// Parte que ficarão os populares funcionar
function mostrarPopulares(posts) {
    popularesWrapper.innerHTML = "";

    posts.forEach(post => {     

        let link = '#';

        if (post.titulo.includes("Ariana")) {
            link = '../Pages/Subpages/Ariana.html'
        } else if (post.titulo.includes("Melaine")) {
            link = '../Pages/Subpages/Melaine.html'
        } else if (post.titulo.includes("Billie")) {
            link = '../Pages/Subpages/Billie.html'
        }

        const div = document.createElement("div");
        div.classList.add("divpimg");

        div.innerHTML = `
            <a href="${link}" class="postLink">
                <div class="divpimgs">
                    <img src="${post.url}" class="pimg">
                </div>

                <div class="textimg">
                    <h4 class="ptagpop">${post.categoria}</h4>
                    <p>${post.titulo}</p>
                    <p>${post.data} <i class="fa-regular fa-clock" style="color: var(--cor-neon-3)"></i> <span data-editado ="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span></p>
                </div>
            </a>
        `;

        popularesWrapper.appendChild(div);
    });
}

// Post que ficarão na parte de artigos funcionar
function mostrarArtigos(posts) {
    artigosContainer.innerHTML = "";

    posts.forEach(post => {

        let link = '#';

        if(post.titulo.includes("Dua")) {
            link = '../Pages/Subpages/Dua.html'
        } else if (post.titulo.includes("Britney")) {
            link = '../Pages/Subpages/Britney.html'
        } else if (post.titulo.includes("Laufey")) {
            link = '../Pages/Subpages/Laufey.html'
        } else if (post.titulo.includes("Sabrina")) {
            link = '../Pages/Subpages/Sabrina.html'
        } else if (post.titulo.includes("Rita")) {
            link = '../Pages/Subpages/Rita.html'
        } else if (post.titulo.includes("Lady")) {
            link = '../Pages/Subpages/Lady.html'
        } else if (post.titulo.includes("Marina")) {
            link = '../Pages/Subpages/Marina.html'
        } else if (post.titulo.includes("Chappell")) {
            link = '../Pages/Subpages/Chappell.html'
        } else if (post.titulo.includes("Lana")) {
            link = '../Pages/Subpages/Lana.html'
        } else if (post.titulo.includes("Lauren")) {
            link = '../Pages/Subpages/Lauren.html'
        } else if (post.titulo.includes("Ana")) {
            link = '../Pages/Subpages/Ana.html'
        } else if (post.titulo.includes("Camilla")) {
            link = '../Pages/Subpages/Camilla.html'
        } else if (post.titulo.includes("Katy")) {
            link = '../Pages/Subpages/Katy.html'
        }  else if (post.titulo.includes("Beyonce")) {
            link = '../Pages/Subpages/Beyonce.html'
        } else if (post.titulo.includes("Olivia")) {
            link = '../Pages/Subpages/Oli'
        }

        const div = document.createElement("div");
        div.classList.add("artimages");

        div.innerHTML = `
        <a href="${link}" class="postLink">
            <img src="${post.url}" class="imgsart">
            <h4 class="tagart">${post.categoria}</h4>
            <p>${post.titulo}</p>
            <p>${post.data} · <span data-editado="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span></p>
        </a>    
        `;

        artigosContainer.appendChild(div);
    });
}

// Editado há tantos minutos funcionar
function tempoDesde(timestamp) {

    const agora = Date.now();
    const diferenca = agora - Number(timestamp);

    if (diferenca < 0) return "editado agora";

    const segundos = Math.floor(diferenca / 1000);
    if (segundos < 60) return `editado há ${segundos} segundos`;

    const minutos = Math.floor(segundos / 60);
    if (minutos < 60) return `editado há ${minutos} minutos`;

    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `editado há ${horas} horas`;

    const dias = Math.floor(horas / 24);
    return `editado há ${dias} dias`;
}

function atualizarTempos() {
    const elementos = document.querySelectorAll("[data-editado]");

    elementos.forEach(el => {
        const timestamp = el.dataset.editado;
        el.textContent = tempoDesde(timestamp);
    });
}

// Botão carregar mais funcionar
function controlarArtigos() {
    const artigos = document.querySelectorAll(".artimages");

    artigos.forEach((art, index) => {
        art.style.display = index < limiteArtigos ? "flex" : "none";
    });

    if (artigos.length > limiteArtigos) {
        btnCarregar.style.display = "block";
    } else {
        btnCarregar.style.display = "none";
    }
}

btnCarregar.addEventListener("click", () => {
    limiteArtigos += 3;
    controlarArtigos();
});

// Botão de voltar ao topo funcionar
const btnScrollToTop = document.getElementById("topp");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })


})

carregarPosts();
