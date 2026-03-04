import Router from './router';
import { HomePage, game1, game2, game3, game4 } from './pages';

const router = new Router('app');

router.addRoute('/', HomePage);
router.addRoute('/game1', game1);
router.addRoute('/game2', game2);
router.addRoute('/game3', game3);
router.addRoute('/game4', game4);

router.start();
