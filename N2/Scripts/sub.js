// const API_URL = "http://localhost:3000/posts";

// const categoriaAtual = document.querySelector(".buttag")?.innerText.toLowerCase();
// const postAtualID = Number(document.body.dataset.postId); // converter para número
// const cards = document.querySelectorAll(".divcardseme");

// async function carregarSemelhantes() {
//     if (!categoriaAtual || !cards.length) return;

//     const resposta = await fetch(API_URL);
//     const posts = await resposta.json();

//     const relacionados = posts.filter(post =>
//         post.categoria.trim().toLowerCase() === categoriaAtual?.trim() &&
//         post.id !== postAtualID
//     );

//     preencherCards(relacionados.slice(0, 3));
// }

// function gerarLink(titulo) {
//     titulo = titulo.toLowerCase();

//     if (titulo.includes("ariana")) return "Ariana.html";
//     if (titulo.includes("taylor")) return "Taylor.html";
//     if (titulo.includes("billie")) return "Billie.html";
//     if (titulo.includes("dua")) return "Dua.html";
//     if (titulo.includes("britney")) return "Britney.html"; // corrigido
//     if (titulo.includes("laufey")) return "Laufey.html";
//     if (titulo.includes("sabrina")) return "Sabrina.html";
//     if (titulo.includes("rita")) return "Rita.html";
//     if (titulo.includes("olivia")) return "Olivia.html";
//     if (titulo.includes("lady")) return "Lady.html";
//     if (titulo.includes("marina")) return "Marina.html";
//     if (titulo.includes("chappell")) return "Chappell.html";
//     if (titulo.includes("lana")) return "Lana.html";

//     return "#";
// }

// function preencherCards(lista) {
//     cards.forEach((card, index) => {
//         const post = lista[index];
//         if (!post) {
//             card.style.display = "none";
//             return;
//         }

//         const img = card.querySelector(".imgseme");
//         const tag = card.querySelector(".tagseme");
//         const titulo = card.querySelector(".h4seme");
//         const data = card.querySelector(".dataseme");
//         const editado = card.querySelector(".editadoseme");

//         img.src = post.url;
//         tag.innerText = post.categoria;
//         titulo.innerText = post.titulo;
//         data.innerText = post.data;
//         editado.innerText = tempoDesde(post.editadoEm);

//         card.onclick = () => {
//             window.location.href = gerarLink(post.titulo);
//         };
//     });
// }

// function tempoDesde(timestamp) {
//     const agora = Date.now();
//     const diff = agora - Number(timestamp);

//     const min = Math.floor(diff / 60000);
//     if (min < 1) return "Agora";
//     if (min < 60) return `Editado há ${min} minutos`;

//     const h = Math.floor(min / 60);
//     if (h < 24) return `Editado há ${h} horas`;

//     const d = Math.floor(h / 24);
//     return `Editado há ${d} dias`;
// }

// // carregar depois que a página estiver pronta
// document.addEventListener("DOMContentLoaded", carregarSemelhantes);

// // ----------------------------------------------------------------------------------------

// // const posts = [
// //     {
// //       "autor": "Werych",
// //       "titulo": "Taylor lota Blidboard pela 3° Vez",
// //       "categoria": "Recordes",
// //       "url": "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/D5BMZ6FDQRPFDFEJPW73U5O7F4.jpg?auth=3804fb696b99b363d68f1347a7bec38e34249c07309bbb7bb1c271e7f8a3313c&width=771&height=419",
// //       "mensagem": "Taylor lota o ho1 100 da Blidboard pelo seu 3° lançamento de album seguido",
// //       "data": "  28 nov",
// //       "editadoEm": 1764473567502,
// //       "id": "df50"
// //     },
// //     {
// //       "autor": "Werych",
// //       "titulo": "Ariana Grande encerra sua carreira musical?",
// //       "categoria": "Sobre",
// //       "url": "https://jpimg.com.br/uploads/2019/01/ariana-grande-1.jpg",
// //       "mensagem": "Ariana Fala em entrevista sobre querer encerrar sua carreira musical.",
// //       "data": "  28 nov",
// //       "editadoEm": 1764473503297,
// //       "id": "109a"
// //     },
// //     {
// //       "autor": "Livia",
// //       "titulo": "Melaine é Compositora da Geração?",
// //       "categoria": "Letras",
// //       "url": "https://pt.quizur.com/_image?href=https://dev-beta.quizur.com/storage/v1/object/public//imagens//20432628/20a6f944-f8f4-4bb1-aa47-8ad8f4eb87db.png&w=600&h=600&f=webp",
// //       "mensagem": "Melaine e suas letras profundas",
// //       "data": "  30 nov",
// //       "editadoEm": 1764475179110,
// //       "id": "389f"
// //     },
// //     {
// //       "autor": "Bella",
// //       "titulo": "Billie foi racista com fãs brasileiros?",
// //       "categoria": "Sobre",
// //       "url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Billie_Eilish_at_Pukkelpop_Festival_-_18_AUGUST_2019_%2801%29_%28cropped%29.jpg",
// //       "mensagem": "Billie foi racista com fãs brasileiros dutante o show na irlanda",
// //       "data": " 30 nov",
// //       "editadoEm": 1764518403165,
// //       "id": "de9a"
// //     },
// //     {
// //       "autor": "Werych",
// //       "titulo": "Dua lipa passará sua turnê na America Latina",
// //       "categoria": "Sobre",
// //       "url": "https://caras.com.br/wp-content/uploads/2023-agosto/dua-lipa.jpg",
// //       "mensagem": "Dua lipa não mede esforços para trazer sua estrutura aqui para américa Latina",
// //       "data": " 30 nov",
// //       "editadoEm": 1764520020703,
// //       "id": "5f83"
// //     },
// //     {
// //       "autor": "Livia",
// //       "titulo": "Birtney Spears, A princesa do POP",
// //       "categoria": "Recordes",
// //       "url": "https://i.scdn.co/image/ab6761610000e5eb26e59b825251b7df20a7b65e",
// //       "mensagem": "Birteney Spears sempre será a princesa do Pop",
// //       "data": " 30 nov",
// //       "editadoEm": 1764525024393,
// //       "id": "f2f1"
// //     },
// //     {
// //       "id": "1be9",
// //       "autor": "Bella",
// //       "titulo": "Laufey e suas músicas",
// //       "categoria": "Letras",
// //       "url": "https://www.billboard.com/wp-content/uploads/2023/11/chartbreaker-laufey-billboard-2023-bb15-tony-luong-2-1260.jpg?crop=135px%2C0px%2C1125px%2C779px&resize=1292%2C861",
// //       "mensagem": "As músicas de Laufey são extremamente nostálgicas.",
// //       "data": "30 nov",
// //       "editadoEm": 1764526437389
// //     },
// //     {
// //       "id": "3dab",
// //       "autor": "Werych",
// //       "titulo": "Sabrina só lança música vergonhosa?",
// //       "categoria": "Letras",
// //       "url": "https://f.i.uol.com.br/fotografia/2025/10/19/176090650768f54d0bca1b0_1760906507_3x2_md.jpg",
// //       "mensagem": "Pessoas afirmar que a artista lança apenas músicas constragedoras e criticam a capa de seu novo álbum",
// //       "data": "30 nov",
// //       "editadoEm": 1764527384090
// //     },
// //     {
// //       "id": "21c9",
// //       "autor": "Livia",
// //       "titulo": "Nunca existirá uma cantora como Rita Lee",
// //       "categoria": "Sobre",
// //       "url": "https://conteudo.imguol.com.br/c/parceiros/70/2020/08/16/a-cantora-paulistana-rita-lee-foto-reproducao-1597621576993_v2_3x4.png",
// //       "mensagem": "Rita lee foi mais do que uma simples cantora",
// //       "data": "30 nov",
// //       "editadoEm": 1764528187039
// //     },
// //     {
// //       "id": "9861",
// //       "autor": "Bella",
// //       "titulo": "Chappell diz que seu p´róximo álbum nem existe",
// //       "categoria": "Sobre",
// //       "url": "https://midias.correiobraziliense.com.br/_midias/jpg/2024/12/21/1000x1000/1_chappell_roan_divulgacao_2-43355025.jpg?20241221070344?20241221070344",
// //       "mensagem": "Chappell diz que seu próximo album de studio esstá longe de ser lançado",
// //       "data": "30 nov",
// //       "editadoEm": 1764529436526
// //     },
// //     {
// //       "id": "d8a3",
// //       "autor": "Werych",
// //       "titulo": "Lady gaga faz história em copacabana",
// //       "categoria": "Letras",
// //       "url": "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/5f52/live/27ae3b90-fad6-11ef-a76c-f7e6d97500f1.jpg.webp",
// //       "mensagem": "A rainha do POP faz história em copacabana com uma experiÊncia incrivel",
// //       "data": "30 nov",
// //       "editadoEm": 1764530145258
// //     },
// //     {
// //       "id": "1bfb",
// //       "autor": "Livia",
// //       "titulo": "Marina Sena detém uma das músicas mais escutados em um ano",
// //       "categoria": "Recordes",
// //       "url": "https://akamai.sscdn.co/uploadfile/letras/fotos/f/3/f/e/f3fef4e3d75ded9cb10bc54b6a6f34c8.jpg",
// //       "mensagem": "Por supuesto de Marina Sena bate recorde de uma das músicas mais escutadas em um único ano",
// //       "data": "30 nov",
// //       "editadoEm": 1764531156574
// //     },
// //     {
// //       "id": "8f79",
// //       "autor": "Bella",
// //       "titulo": "Lana, del rey, cantora mais amada?",
// //       "categoria": "Sobre",
// //       "url": "https://moodgate.com.br/wp-content/uploads/2025/06/lana-del-rey-1.jpg",
// //       "mensagem": "Lana del ray, a cantora com 0 hates, impressionando a todos com suas belas composições",
// //       "data": "30 nov",
// //       "editadoEm": 1764531925653
// //     }
// // ];

// // // Pega a categoria e título do post atual
// // const categoriaAtual = document.querySelector(".tag-post").textContent;
// // const tituloAtual = document.querySelector(".titulo-post").textContent;

// // // Filtra posts da mesma categoria, exceto o post atual
// // let semelhantes = posts.filter(post => post.categoria === categoriaAtual && post.titulo !== tituloAtual);

// // // Embaralha e pega 3 aleatórios
// // semelhantes.sort(() => Math.random() - 0.5);
// // semelhantes.slice(0, 3).forEach(post => {
// //     const card = document.createElement("div");
// //     card.className = "divcardseme";
// //     card.innerHTML = `
// //         <img src="${post.img}" class="imgseme">
// //         <h4 class="tagseme">${post.categoria}</h4>
// //         <h4 class="h4seme">${post.titulo}</h4>
// //         <div class="autortempo">
// //             <p>16, fev</p>
// //             <p>.</p>
// //             <p>Editado há 12 minutos</p>
// //         </div>
// //     `;
// //     container.appendChild(card);
// // });

// ---------------------------------------------------------------------------------------------

// // document.addEventListener("DOMContentLoaded", () => {
// //     const categoriaAtual = document.querySelector(".tag-post")?.textContent;
// //     const idAtual = parseInt(document.querySelector(".post-id")?.textContent); // pega o ID do post atual como número

// //     if (!categoriaAtual || !idAtual) return; // se não existir, não faz nada

// //     const container = document.querySelector(".cardsseme");
// //     container.innerHTML = "";

// //     fetch("http://localhost:3000/posts") // seu endpoint da API
// //         .then(res => res.json())
// //         .then(posts => {
// //             // Filtra posts da mesma categoria, exceto o post atual
// //             let semelhantes = posts.filter(post => post.categoria === categoriaAtual && post.id !== idAtual);

// //             // Embaralha e pega 3 aleatórios
// //             semelhantes.sort(() => Math.random() - 0.5);
// //             semelhantes.slice(0, 3).forEach(post => {
// //                 const card = document.createElement("div");
// //                 card.className = "divcardseme";
// //                 card.innerHTML = `
// //                     <img src="${post.url}" class="imgseme">
// //                     <h4 class="tagseme">${post.categoria}</h4>
// //                     <h4 class="h4seme">${post.titulo}</h4>
// //                 `;
// //                 container.appendChild(card);
// //             });
// //         })
// //         .catch(err => console.error("Erro ao buscar posts:", err));
// // });

// // ------------------------------------------------------------------------------

const API_URL = "http://localhost:3000/posts";

const categoriaAtual = document.querySelector(".buttag")?.innerText.toLowerCase();
const postAtualID = document.body.dataset.id;
const cards = document.querySelectorAll(".divcardseme");

async function carregarSemelhantes() {
    if (!categoriaAtual || !cards.length) return;

    const res = await fetch(API_URL);
    const posts = await res.json();

    const relacionados = posts.filter(post => 
        post.categoria.toLowerCase() === categoriaAtual &&
        post.id != postAtualID
    );

    cards.forEach((card, index) => {
        const post = relacionados[index];
        if (!post) return;

        card.querySelector(".imgseme").src = post.url;
        card.querySelector(".tagseme").innerText = post.categoria;
        card.querySelector(".h4seme").innerText = post.titulo;
        card.querySelector(".autortempo p").innerText = post.data;

        card.onclick = () => {
            window.location.href = `sub.html?id=${post.id}`;
        };
    });
}

carregarSemelhantes();
