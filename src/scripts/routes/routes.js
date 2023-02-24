import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import home from '../views/pages/home';

const routes = {
    '/': home,
    '/favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;
