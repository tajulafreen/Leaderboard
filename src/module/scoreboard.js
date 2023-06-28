import getdata from './get.js';

const scorebox = async () => {
  const dataget = await getdata();
  const boardlist = document.querySelector('.board-listt');
  const board = document.createElement('ul');
  board.classList.add('score-box');
  boardlist.innerHTML = '';
  for (let i = 0; i < dataget.length; i += 1) {
    const pattern = /[^0-9]/g;
    const num = `${dataget[i].score}`;
    const text = `${dataget[i].user}`;

    if (!num.match(pattern) && num.length < 5) {
      if (((text.length < 9) && (text.length > 1))) {
        const li = document.createElement('li');
        const name = document.createElement('p');
        const score = document.createElement('p');
        li.classList.add('list');
        name.classList.add('name');
        score.classList.add('score');
        name.textContent = `${dataget[i].user} :`;
        score.textContent = `${dataget[i].score}`;

        li.appendChild(name);
        li.appendChild(score);
        board.appendChild(li);
        boardlist.appendChild(board);
      }
    }
  }
};
export default scorebox;