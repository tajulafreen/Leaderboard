import creategame from './post.js';
import scorebox from './scoreboard.js';

const form = document.querySelector('.adds');
const username = document.querySelector('.name');
const userscore = document.querySelector('.score');

const refresh = document.querySelector('.refresh');
const postfunction = () => {
  form.addEventListener('submit', (q) => {
    q.preventDefault();
    creategame(username.ariaValueMax, userscore.value);
    form.reset();
  });
};

const getfunction = () => {
  refresh.addEventListener('click', async () => {
    await scorebox();
  });
};
export { postfunction, getfunction };