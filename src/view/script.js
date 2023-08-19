const cardProjetos = document.getElementById("div-projetos");
const input_url_imagem = document.getElementById("url-imagem");
const input_descricao = document.getElementById("descricao");
const input_data = document.getElementById("data");

async function fetchProjetos() {
  // const response = await fetch("http://localhost:2727/projetos");
  const response = await fetch("src/models/projeto.json");
  const projeto = await response.json();
  return projeto;
}

function renderProjeto(projeto) {
  cardProjetos.innerHTML = "";

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  projeto.forEach((imagem) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "col-sm-6", "col-md-4", "mt-3");

    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imgElement = document.createElement("img");
    imgElement.src = imagem.imagem;
    imgElement.alt = imagem.descricao;
    imgElement.classList.add("card-img-top");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const descricaoDiv = document.createElement("div");
    descricaoDiv.classList.add("descricao");
    descricaoDiv.textContent = imagem.descricao;

    // const dataDiv = document.createElement("div");
    // dataDiv.classList.add("date");
    // dataDiv.textContent = imagem.data;

    overlay.appendChild(descricaoDiv);
    // overlay.appendChild(dataDiv);

    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(overlay);

    card.appendChild(imageContainer);

    colDiv.appendChild(card);

    rowDiv.appendChild(colDiv);
  });

  cardProjetos.appendChild(rowDiv);
}

async function init() {
  try {
    const projeto = await fetchProjetos();
    renderProjeto(projeto);
  } catch (error) {
    console.error("Erro ao carregar imagens:", error);
  }
}

init();
