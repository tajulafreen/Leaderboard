import getdata from './get.js';

const scorebox = async () => {
  const dataget = await getdata();
  const boardlist = document.querySelector('.board-listt');
  const board = document.createElement('ul');
  board.classList.add('score-box');
  boardlist.innerHTML = '';
  for (let i = 0; i < dataget.length; i += 1) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const score = document.createElement('p');
    li.classList.add('list');
    name.classList.add('name');
    score.classList.add('score');
    name.textContent = JSON.stringify(dataget[i].user);
    score.textContent = JSON.stringify(dataget[i].score);
    li.appendChild(name);
    li.appendChild(score);
    board.appendChild(li);
    boardlist.appendChild(board);
  }
};
export default scorebox;