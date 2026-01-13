const games = [
  {nome:"Outer Wilds", img:"img/outerwilds.jpg"},
  {nome:"Red Dead Redemption 2", img:"img/rdr2.jpg"},
  {nome:"GTA V", img:"img/gta5.jpg"}
];

const reviews = [
  {
    username:"RGamer",
    nota:"5/5",
    texto:"Outer Wilds é absurdo. Uma das melhores experiências que já tive.",
    jogo:"Outer Wilds",
    ano:"2019",
    status:"Jogando",
    plataforma:"PC",
    capa:"imagens/Rectangle 15.svg"
  }
];

const gamesDiv = document.getElementById("games");
games.forEach(game=>{
  gamesDiv.innerHTML += `
    <div class="game-card">
      <img src="${game.img}">
      <button>Review</button>
    </div>
  `;
});

const reviewsDiv = document.getElementById("reviews");
reviews.forEach(r=>{
  reviewsDiv.innerHTML += `
    <div class="review-card">
      <div class="review-left">
        <div class="review-user">
          <div class="user-avatar">👤</div>
          ${r.username}
        </div>
        <div class="review-score">Nota ${r.nota}</div>
        <div class="review-text">${r.texto}</div>
        <div class="review-like">💜</div>
      </div>

      <div class="review-right">
        <img src="${r.capa}">
        <p>${r.jogo} (${r.ano})</p>
        <p>Status: ${r.status}</p>
        <p>Plataforma: ${r.plataforma}</p>
        <button class="btn-view">Ver Review</button>
      </div>
    </div>
  `;
});