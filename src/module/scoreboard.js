const scorebox = () => {
  const boardlist = document.querySelector('.board-listt');
  const board = document.createElement('ul');
  board.classList.add('score-box');
  board.innerHTML = `
  <li class="list" id="1"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="2"><p class="name">Farheen: </p><p> 99</p></li>
  <li class="list" id="3"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="4"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="5"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="6"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="7"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="8"><p class="name">Afreen: </p><p>100</p></li>
  <li class="list" id="9"><p class="name">Afreen: </p><p>100</p></li>
`;
  boardlist.appendChild(board);
};
module.exports = scorebox;