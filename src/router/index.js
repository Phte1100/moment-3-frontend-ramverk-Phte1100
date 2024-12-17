import { createRouter, createWebHistory } from 'vue-router';
import SnapScroll from "@/components/SnapScroll.vue";

// Importera vyer
import StartView from '@/views/StartView.vue';
import DiscsView from '@/views/DiscsView.vue';
import VueView from '@/views/VueView.vue';

// Importera CRUD-komponenter
import List from '@/components/List.vue';
import Add from '@/components/Add.vue';
import Edit from '@/components/Edit.vue';
import Delete from '@/components/Delete.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: SnapScroll,
  },
];

// Skapa routern
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Standardvyer
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/discs',
      name: 'discar',
      component: DiscsView,
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueView,
    },
    // CRUD-rutter
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: true, // Gör ID:t tillgängligt som en prop
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: Delete,
      props: true, // Gör ID:t tillgängligt som en prop
    },
  ],
});

export default router;
