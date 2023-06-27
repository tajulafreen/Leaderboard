import url from './api.js';

const creategame = async (username, userscore) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
      score: userscore,

    }),
  });
  const data = await response.json();
  return data;
};

export default creategame;