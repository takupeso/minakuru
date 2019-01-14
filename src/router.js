import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/pages/TopPage'
import Mypage from '@/components/pages/Mypage'
import IdeaListPage from '@/components/pages/IdeaListPage'
import IdeaDetailPage from '@/components/pages/IdeaDetailPage'
import IdeaInputPage from '@/components/pages/IdeaInputPage'
import IdeaUpdatePage from '@/components/pages/IdeaUpdatePage'
import LoginPage from '@/components/pages/LoginPage'
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
      path: '/inputIdea',
      name: 'IdeaInputPage',
      component: IdeaInputPage
    },
    {
      path: '/updateIdea/:ideaId',
      name: 'IdeaUpdatePage',
      component: IdeaUpdatePage
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
