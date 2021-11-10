import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import signin from '@/views/signin' 
import signup from '@/views/signup'
import forget from '@/views/forgetpass'
import home from '@/views/home'
import addtask from '@/views/addtask'
import bank from '@/views/bank'
import battle from '@/views/battle'
//import blackmarket from '@/views/blackmarket'
import blackmarket from '@/views/blackmarket'
import changemail from '@/views/changemail'
import Changepassword from '@/views/Changepassword'
import character1 from '@/views/character1'
import character2 from '@/views/character2'
import Customeprofile from '@/views/Customeprofile' 
import editprofile from '@/views/editprofile'
import Family from '@/views/Family'
import gameintro from '@/views/gameintro'
import leaderboard from '@/views/leaderboard'
import loot from '@/views/loot'
import Maintanance from '@/views/Maintanance'
import Notification from '@/views/Notification'
import Organization from '@/views/Organization'
import Profile from '@/views/Profile'
import Screen from '@/views/Screen'
import spy from '@/views/spy'
import Threat from '@/views/Threat'
import Tutorial from '@/views/Tutorial'
import minions from '@/views/minions'
import mission from '@/views/mission'
import shop from '@/views/shop'
import gang from '@/views/gang'
import gift from '@/views/gift'
import missionlist from '@/views/missionlist'
import property from '@/views/property'
import land from '@/views/land'
import gossipe from '@/components/gang/gossipe'
import family from '@/components/gang/family'
import member from '@/components/gang/member'
import leave from '@/components/gang/leave'
import abilities from '@/components/profile/abilities'
import items from '@/components/profile/items'
import minion from '@/components/profile/minion'
import trophies from '../components/profile/trophies'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ 
 
    {
      path: '/',
      name: 'login',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path:'/forgetpass',
      name:'forget',
      component:forget
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/addtask',
      name:'addtask',
      component:addtask
    },
    
    {
      path:'/bank',
      name:'bank',
      component:bank
    },
    {
      path:'/battle',
      name:'battle',
      component:battle
    },
     {
      path:'/blackmarket',
      name:'blackmarket',
      component:blackmarket
    },
     {
      path:'/changemail',
      name:'changemail',
      component:changemail
    },
    {
      path:'/Changepassword',
      name:'Changepassword',
      component:Changepassword
    },
    {
      path:'/character1',
      name:'character1',
      component:character1
    },
    {
      path:'/character2',
      name:'character2',
      component:character2
    },
    {
      path:'/Customeprofile',
      name:'Customeprofile',
      component:Customeprofile
    },
    {
      path:'/editprofile',
      name:'editprofile',
      component:editprofile
    },
    {
      path:'/Family',
      name:'Family',
      component:Family
    },
    {
      path:'/gameintro',
      name:'gameintro',
      component:gameintro
    },
    {
      path:'/leaderboard',
      name:'leaderboard',
      component:leaderboard
    },
    {
      path:'/loot',
      name:'loot',
      component:loot
    },
    {
      path:'/Maintanance',
      name:'Maintanance',
      component:Maintanance
    },
    {
      path:'/Notification',
      name:'Notification',
      component:Notification
    },
    {
      path:'/Organization',
      name:'Organization',
      component:Organization
    },
    {
    path:'/Profile/',component:Profile,
      children:[
        { path: '', name:'a', component: abilities},
        { path: 'items',name:'b', component: items },
        { path: 'minion', name:'c',component: minion },
        { path: 'trophies', name:'d',component: trophies }
       
      ],
    },
    {
      path:'/Screen',
      name:'Screen',
      component:Screen
    },
    {
      path:'/spy',
      name:'spy',
      component:spy
    },
    {
      path:'/Threat',
      name:'Threat',
      component:Threat
    },
    {
      path:'/Tutorial',
      name:'Tutorial',
      component:Tutorial
    },
    {
      path: '/minions',
      name: 'minions',
      component:minions
    },
    {
      path: '/mission',
      name: 'mission',
      component:mission
    },
    {
      path: '/shop',
      name: 'shop',
      component:shop
    },
     
    {
      path:'/gang/',component:gang,
      children:[
        { path: '', name:'e',component: gossipe},
        { path: 'member', name:'f',component: member },
        { path: 'family',name:'g',component: family },
        { path: 'leave', name:'h',component: leave }
       
      ],
      
    },
    {
      path: '/gift',
      name: 'gift',
      component:gift
    },

       {
      path: '/missionlist',
      name: 'missionlist',
      component:missionlist
    },
    {
      path: '/property',
      name: 'property',
      component:property
    },
    {
      path: '/land',
      name: 'land',
      component:land
    },
 

  ]
})