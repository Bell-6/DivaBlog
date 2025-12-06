const API_URL = "http://localhost:3000/posts";

// ID das páginas para ao clicar nos artigos semelhantes funcionar
const PAGINAS = {
    "4b4a": 'Ana.html',
    "109a":  'Ariana.html',
    "de9a":  'Billie.html',
    "f2f1":   'Britney.html',
    "6115":   'Camilla.html',
    "9861":  'Chappell.html',
    "5f83":  'Dua.html',
    "d8a3":  'Lady.html',
    "8f79":  'Lana.html',
    "c98b": 'Lauren.html',
    "1be9":  'Laufey.html',
    "1bfb":  'Marina.html',
    "389f":  'Melaine.html',
    "21c9":  'Rita.html',
    "3dab":  'Sabrina.html',
    "df50":  'Taylor.html'
};

const categoriaAtual = document.querySelector(".buttag")?.innerText.toLowerCase();
const postAtualID = document.body.dataset.id;
const cards = document.querySelectorAll(".divcardseme");

// Editado há x minutos funcionar
function tempoDesde(timestamp) {
  if (!timestamp) return "Editado recentemente";
  const agora = Date.now();
  const segundos = Math.floor((agora - timestamp) / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 0) return `Editado há ${dias} dia(s)`;
  if (horas > 0) return `Editado há ${horas} hora(s)`;
  if (minutos > 0) return `Editado há ${minutos} minuto(s)`;
  return "Editado agora";
}

async function carregarSemelhantes() {
  const res = await fetch(API_URL);
  const posts = await res.json();

  // Para aparecer só os posts de mesma categoria funcionar
  const relacionados = posts.filter(post =>
    post.categoria.toLowerCase() === categoriaAtual && post.id !== postAtualID
  );

  // Os artigos aparacem de forma aleatória
  relacionados.sort(() => 0.5 - Math.random());

  cards.forEach((card, index) => {
    const post = relacionados[index];

    card.querySelector(".imgseme").src = post.url;
    card.querySelector(".tagseme").innerText = post.categoria;
    card.querySelector(".h4seme").innerText = post.titulo;
    card.querySelectorAll(".autortempo p")[0].innerText = post.data;
    card.querySelectorAll(".autortempo p")[2].innerText = tempoDesde(post.editadoEm);

    // Para o card ficar clicável funcionar
    const link = PAGINAS[post.id];
    if (link) {
      card.onclick = () => window.location.href = link;
      card.style.cursor = "pointer";
    }
  });
}

carregarSemelhantes();
