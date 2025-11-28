const API_URL = "http://localhost:3000/posts";


const destaque = document.querySelector(".divimgg");
const popularesWrapper = document.querySelector(".wrapper");
const artigosContainer = document.querySelector(".artdimages");
const btnCarregar = document.querySelector(".butart");

let limiteArtigos = 9;


function formatarData(data) {
    return data;
}

// Para os posts aprecerem no show funcionar
async function carregarPosts() {
    const resposta = await fetch(API_URL);
    const posts = await resposta.json();

    mostrarDestaque(posts[0]);
    mostrarPopulares(posts.slice(1, 4));
    mostrarArtigos(posts.slice(4));

    controlarArtigos();
    atualizarTempos();
}

// Parte que ficará o destaque funcionar
function mostrarDestaque(post) {
    destaque.innerHTML = `
        <h4 class="pdiva">Diva Blog</h4>
        <h2 class="destaque">Em destaque</h2>
        <img src="${post.url}" class="imgg">

        <div class="divps">
            <h4 class="ptagdes">${post.categoria}</h4>
            
            <p class="pdatades">
            <i class="fa-regular fa-calendar"></i>  ${post.data} · <i class="fa-regular fa-clock"></i> <span data-editado="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span>
            </p>
        </div>

        <h3 class="textdest">${post.titulo}</h3>
    `;
}

// Parte que ficarão os populares funcionar
function mostrarPopulares(posts) {
    popularesWrapper.innerHTML = "";

    posts.forEach(post => {     

        const div = document.createElement("div");
        div.classList.add("divpimg");

        div.innerHTML = `
            <div class="divpimgs">
                <img src="${post.url}" class="pimg">
            </div>

            <div class="textimg">
                <h4 class="ptagpop">${post.categoria}</h4>
                <p>${post.titulo}</p>
                <p>${post.data} · <i class="fa-regular fa-clock"></i> <span data-editado="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span></p>
            </div>
        `;

        popularesWrapper.appendChild(div);
    });
}

// Post que ficarão na parte de artigos funcionar
function mostrarArtigos(posts) {
    artigosContainer.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("artimages");

        div.innerHTML = `
            <img src="${post.url}" class="imgsart">
            <h4 class="tagart">${post.categoria}</h4>
            <p>${post.titulo}</p>
            <p>${post.data} · <span data-editado="${post.editadoEm}">${tempoDesde(post.editadoEm)}</span></p>
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
    limiteArtigos += 6;
    controlarArtigos();
});

carregarPosts();
