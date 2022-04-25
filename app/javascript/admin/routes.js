import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/admin/views/dashboard/index.vue';
// import UserIndex from './components/users/index.vue';
// import UserEdit from './components/users/edit.vue';
// import UserNew from './components/users/new.vue';
// import MusicianIndex from './components/musicians/index.vue';
// import MusicianEdit from './components/musicians/edit.vue';
// import MusicianNew from './components/musicians/new.vue';
// import Error500 from '../components/errors/500.vue';
// import Error404 from '../components/errors/404.vue';

const router = createRouter({
  history: createWebHistory(`/${I18n.prefix}admin`),
  routes: [
    { path: '/', component: Dashboard, name: 'root_path' },
    // { path: '/about', component: PageAbout, name: 'about_path' },
    // { path: '/musicians', component: MusicianIndex, name: 'musicians_path' },
    // { path: '/musicians/:id', component: MusicianShow, name: 'musician_path' },
    // { path: '/500', component: Error500 },
    // { path: '/404', component: Error404 },
    // { path: '/:catchAll(.*)', redirect: '/404' }
  ]
});

export default router;