import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

enum Routes {
  HOME = '/',
  ABOUT = '/about',
  COURSE = '/course/:idCourse',
  END = '/end',
  REVIEW = '/review',
  EXERCISE = '/exercise',
  EXERCISE_BY_ID = '/exercise/:idCourse',
  GLOSSARY = '/glossary',
  QUIZZ = '/quizz',
  QUIZZ_GLYPH = '/quizz/glyphs',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.HOME,
      name: 'home',
      component: HomeView,
    },
    {
      path: Routes.ABOUT,
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: Routes.COURSE,
      name: 'course',
      component: () => import('../views/CourseView.vue'),
      props: true,
    },
    {
      path: Routes.END,
      name: 'end',
      component: () => import('../views/EndView.vue'),
    },
    {
      path: Routes.REVIEW,
      name: 'review',
      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: Routes.EXERCISE,
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue'),
    },
    {
      path: Routes.EXERCISE_BY_ID,
      name: 'exerciseById',
      component: () => import('../views/ExerciseView.vue'),
      props: true,
    },
    {
      path: Routes.GLOSSARY,
      name: 'glossary',
      component: () => import('../views/GlossaryView.vue'),
    },
    {
      path: Routes.QUIZZ,
      name: 'quizz',
      component: () => import('../views/QuizzView.vue'),
    },
    {
      path: Routes.QUIZZ_GLYPH,
      name: 'quizzGlyphs',
      component: () => import('../views/QuizzView.vue'),
      props: { glyphs: true }
    },
  ],
  scrollBehavior () {
    return { top: 0 }
  },
})

export default router
