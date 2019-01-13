import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/pages/TopPage'
import Mypage from '@/components/pages/Mypage'
import IdeaListPage from '@/components/pages/IdeaListPage'
import IdeaDetailPage from '@/components/pages/IdeaDetailPage'
import LoginPage from '@/components/pages/LoginPage'
import IdeaInputPage from '@/components/pages/IdeaInputPage'
import UserInputPage from '@/components/pages/UserInputPage'
import UserUpdatePage from '@/components/pages/UserUpdatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/ideaList',
      name: 'IdeaListPage',
      component: IdeaListPage
    },
    {
      path: '/ideaDetail/:ideaId',
      name: 'IdeaDetailPage',
      component: IdeaDetailPage
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/inputIdea',
      name: 'IdeaInputPage',
      component: IdeaInputPage
    },
    {
      path: '/inputUser',
      name: 'UserInputPage',
      component: UserInputPage
    },
    {
      path: '/userUpdate/:userId',
      name: 'UserUpdatePage',
      component: UserUpdatePage
    }
  ]
})
