import Home from './components/Home.vue';
import Peli from './components/Peli.vue';
import Favoritas from './components/Favoritas.vue';
import App from './App.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/peli/:id', component: Peli},
    {path: '/favoritas', component:  Favoritas}
];