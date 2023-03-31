
function renderCardsFront(array){
    const main = document.querySelector("main");
    const container = document.querySelector(".container");

    main.appendChild(container);
  for(let i = 0; i < array.length; i++){
    //criar
    const cards = document.createElement("div");
    const header__card = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const titulo = document.createElement("section");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const strong = document.createElement("strong");

    const container__conteudo = document.createElement("div");
    const p = document.createElement("p");
    const strong2 = document.createElement("strong");
    const tipo = document.createElement("div");
    const span2 = document.createElement("span");
    const strong3 = document.createElement("strong");
    const span3 = document.createElement("span");
    const strong4 = document.createElement("strong"); 

    //receber
    cards.classList = "cards";
    header__card.classList = "header__card";

    container__conteudo.classList = "container__conteudo";
    strong2.innerText = array[i].descrription;
    p.appendChild(strong2);
    tipo.classList = "tipo";
    strong3.innerText = array[i].modality[0];
    strong4.innerText = array[i].modality[1];

    span2.appendChild(strong3);
    span3.appendChild(strong4);

    img.src = "./src/img/G.png";
    img.alt = "imagem G";
    figure.appendChild(img);

    titulo.classList = "titulo";
    h3.innerText = array[i].title;

    strong.innerText = array[i].location;
    span.appendChild(strong);
    
    //adcionar no html
    tipo.append(span2,span3);
    titulo.append(h3,span);

    header__card.append(figure,titulo);
    container__conteudo.append(p,tipo);
    cards.append(header__card,container__conteudo);
   container.appendChild(cards);
    
  }
}

function renderCardsBack(array){
    const main = document.querySelector("main");
    const container = document.querySelector(".container");
    const titulo__secao = document.createElement("h1");

    titulo__secao.innerText = "Frontend Jobs";
    titulo__secao.className = "titulo__section2";

  for(let i = 0; i < array.length; i++){
    
    const cards = document.createElement("div");
    const header__card = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const titulo = document.createElement("section");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const strong = document.createElement("strong");

    const container__conteudo = document.createElement("div");
    const p = document.createElement("p");
    const strong2 = document.createElement("strong");
    const tipo = document.createElement("div");
    const span2 = document.createElement("span");
    const strong3 = document.createElement("strong");
    const span3 = document.createElement("span");
    const strong4 = document.createElement("strong"); 

    
    cards.classList = "cards";
    header__card.classList = "header__card";

    container__conteudo.classList = "container__conteudo";
    strong2.innerText = array[i].descrription;
    p.appendChild(strong2);
    tipo.classList = "tipo";
    strong3.innerText = array[i].modality[0];
    strong4.innerText = array[i].modality[1];

    span2.appendChild(strong3);
    span3.appendChild(strong4);

    img.src = "./src/img/G.png";
    img.alt = "imagem G";
    figure.appendChild(img);

    titulo.classList = "titulo";
    h3.innerText = array[i].title;

    strong.innerText = array[i].location;
    span.appendChild(strong);
    
    tipo.append(span2,span3);
    titulo.append(h3,span);

    header__card.append(figure,titulo);
    container__conteudo.append(p,tipo);
    cards.append(header__card,container__conteudo);
   container.appendChild(cards);
   container.insertAdjacentElement("afterend",titulo__secao);
}
}
renderCardsFront(frontEndJobs);
renderCardsBack(backEndJobs);
