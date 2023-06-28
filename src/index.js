import './index.css';
import { getfunction, postfunction } from './module/form.js';
import scorebox from './module/scoreboard.js';

postfunction();
getfunction();
window.addEventListener('load', scorebox);