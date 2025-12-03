const API_URL = "http://localhost:3000/posts";

// Botão novo post funcionar
const butnovo = document.getElementById("butnovo");
const modal = document.getElementById("modal-overlay");

butnovo.addEventListener("click", () => {
    modal.classList.add("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// Formulário de novo post funcionar
const form = document.getElementById("form");
const publicacoes = document.querySelector(".publicacoes");

const nome = document.getElementById("nome");
const titulo = document.getElementById("titulo");
const categoria = document.getElementById("categoria");
const url = document.getElementById("url");
const mensagem = document.getElementById("mensagem");

const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

form.onsubmit = async function (e) {
    e.preventDefault();

    const hoje = new Date();
    const dia = hoje.getDate();
    const mesAbrev = meses[hoje.getMonth()];
    const dataFormatada = `${dia} ${mesAbrev}`;
    const agora = Date.now();

    const post = {
        autor: nome.value,
        titulo: titulo.value,
        categoria: categoria.value,
        url: url.value,
        mensagem: mensagem.value,
        data: dataFormatada,
        editadoEm: agora
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    });

    modal.classList.remove("active");
    form.reset();
    CarregarPosts();
};

// Botão editar post funcionar
const emodalOverlay = document.getElementById("emodal-overlay");
const eform = document.getElementById("eform");

const enome = document.getElementById("enome");
const etitulo = document.getElementById("etitulo");
const ecategoria = document.getElementById("ecategoria");
const eurl = document.getElementById("eurl");
const emensagem = document.getElementById("emensagem");

let currentPost = null;

emodalOverlay.addEventListener("click", (e) => {
    if (e.target === emodalOverlay) {
        emodalOverlay.classList.remove("active");
        currentPost = null;
    }
});

// após clicar em editar post para colocar as novas informações funcionar
publicacoes.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        const section = e.target.closest("section");
        currentPost = section;

        eform.reset();

        enome.placeholder = section.querySelector(".perfil").textContent;
        etitulo.placeholder = section.querySelector("h4").textContent;
        ecategoria.placeholder = section.querySelector(".desc").dataset.categoria || "Categoria";
        eurl.placeholder = section.querySelector("img").src;
        emensagem.placeholder = section.querySelector(".desc").textContent;

        emodalOverlay.classList.add("active");
    }
});

// Salvar alterações do post editado
eform.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = currentPost.dataset.id;

    const postAtualizado = {
        autor: enome.value || enome.placeholder,
        titulo: etitulo.value || etitulo.placeholder,
        categoria: ecategoria.value || ecategoria.placeholder,
        url: eurl.value || eurl.placeholder,
        mensagem: emensagem.value || emensagem.placeholder,
        data: currentPost.querySelector(".date").textContent,
        editadoEm: Date.now()
    };

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postAtualizado)
    });

    emodalOverlay.classList.remove("active");
    currentPost = null;
    CarregarPosts();
});


// Botão excluir funcionar
const exmodal = document.getElementById("exmodal-overlay");
const confirmarExcluir = document.getElementById("butex");
const cancelarExcluir = document.getElementById("bucan");

let postIdExcluir = null;

document.addEventListener("click", (e) => {
    const botaoDelete = e.target.closest(".delete");

    const section = botaoDelete.closest("section");
    postIdExcluir = section.dataset.id;

    exmodal.classList.add("active");
});

// Botão de confirmar excluir do modal funcionar
confirmarExcluir.addEventListener("click", async () => {
    await fetch(`${API_URL}/${postIdExcluir}`, {
        method: "DELETE"
    });

    exmodal.classList.remove("active");
    postIdExcluir = null;

    CarregarPosts();
});

// Botão de cancelar excluir funcionar
cancelarExcluir.addEventListener("click", () => {
    exmodal.classList.remove("active");
    postIdExcluir = null;
});

// Botão de carregar mais funcionar
const btnCarregar = document.getElementById("carregarMais");
let limite = 3;

function controlarPosts() {
    const posts = document.querySelectorAll(".publicacoes section");

    posts.forEach((post, index) => {
        if (index >= limite) {
        post.style.display = "none";
        } else {
        post.style.display = "block";
        }
    });

    if (posts.length > limite) {
        btnCarregar.style.display = "block";
    } else {
        btnCarregar.style.display = "none";
    }
}

btnCarregar.addEventListener("click", () => {
    limite += 3; 
    controlarPosts();
});

// Aparecer os posts funcionar
async function CarregarPosts() {
    const resposta = await fetch(API_URL);
    const posts = await resposta.json();
    publicacoes.innerHTML = "";

    posts.forEach(post => {
        const section = document.createElement("section");
        section.dataset.id = post.id;

        section.innerHTML = `
            <div class="imgPost">
                <img src="${post.url}">
            </div>
            <h4>${post.titulo}</h4>
            <div class="infor">
                <p class="desc" data-categoria="${post.categoria}">${post.mensagem}</p>
                <div class="date_and_user">
                    <p class="date"><i class="fa-regular fa-calendar"></i> ${post.data}</p>
                    <p>.</p>
                    <p class="perfil"><i class="fa-regular fa-user"></i> ${post.autor}</p>
                </div>
                <div class="botoes">
                    <button class="edit">Editar</button>
                    <button class="delete">Excluir</button>
                </div>
            </div>
        `;

        publicacoes.appendChild(section);
    });
    controlarPosts();
}

CarregarPosts();
