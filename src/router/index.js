import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    /*  mode:'history', */
    routes: [

        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login')
        },
        {
            path: '/maintanance',
            name: 'maintanance',
            component: () =>
                import ('@/views/Maintanance')
        },

        {
            path: '/x',
            redirect: '/screen',
        },
        {
            path: '/signup',
            name: 'signup',
            component: () =>
                import ('@/views/signup')
        },
        {
            path: '/supactvton',
            name: 'supactvton',
            component: () =>
                import ('@/views/supactvton')
        },
        {
            path: '/forgetpass',
            name: 'forget',
            component: () =>
                import ('@/views/forgetpass')
        },
        {
            path: '*',
            redirect: '/game/home/gtns',
        },
        {
            path: '/game',
            redirect: '/game/home/gtns',
        },
        {
            path: 'game/organization',
            redirect: '/game/organization/gossipe',
        },
        {
            name: 'game',
            path: '/game',
            component: () =>
                import ('@/views/home'),
            children: [{
                    path: 'home',
                    component: () =>
                        import ('@/views/game/home'),
                    children: [{
                            path: 'gtns',
                            component: () =>
                                import ('@/components/home/gmnews')
                        },
                        {
                            path: 'blab',
                            name: 'blab',
                            component: () =>
                                import ('@/components/home/blab')
                        },
                        {
                            path: 'lmtdofr',
                            component: () =>
                                import ('@/components/home/lmtdofr')
                        },
                        {
                            path: 'update',
                            component: () =>
                                import ('@/components/home/update')
                        },

                        {
                            path: 'dailytask',
                            component: () =>
                                import ('@/components/home/dailytask')
                        },
                        {
                            path: 'bonus',
                            component: () =>
                                import ('@/components/home/bonus')
                        },
                        {
                            path: 'limited',
                            name: 'limited',

                            component: () =>
                                import ('@/components/home/limited'),

                            children: [{
                                    path: 'abilities',
                                    name: 'abilities',
                                    component: () =>
                                        import ('@/components/limited/abilities')
                                },
                                {
                                    path: 'fimiliers',
                                    name: 'fimiliers',
                                    component: () =>
                                        import ('@/components/limited/fimiliers')
                                },
                                {
                                    path: 'avater',
                                    name: 'avater',
                                    component: () =>
                                        import ('@/components/limited/avater')
                                },
                                {
                                    path: 'avaterbg',
                                    name: 'avaterbg',
                                    component: () =>
                                        import ('@/components/limited/avaterbg')
                                },


                            ],
                        },

                        {
                            path: 'bank',
                            name: 'bank',
                            component: () =>
                                import ('@/components/home/bank')
                        },


                    ]
                },

                {
                    name: 'profile',
                    path: 'profile',
                    component: () =>
                        import ('@/views/game/profile'),
                    children: [{
                            path: 'abilities',
                            component: () =>
                                import ('@/components/profile/abilities')
                        },
                        {
                            path: 'items',
                            name: 'myitem',
                            component: () =>
                                import ('@/components/profile/items')
                        },
                        {
                            path: 'property',
                            component: () =>
                                import ('@/components/profile/property')
                        },
                        {
                            path: 'trophies',
                            component: () =>
                                import ('@/components/profile/trophies')
                        },
                        {
                            path: 'wall',
                            component: () =>
                                import ('@/components/profile/wall')
                        },
                        {
                            path: 'badge',
                            component: () =>
                                import ('@/components/profile/badge')
                        },
                        {
                            path: 'closet',
                            component: () =>
                                import ('@/components/profile/closet')
                        },
                        {
                            path: 'rbook',
                            component: () =>
                                import ('@/components/profile/vtclmnu/rbook')
                        },
                        {
                            path: 'eprofile',
                            component: () =>
                                import ('@/components/profile/vtclmnu/eprofile')
                        },

                        {
                            path: 'about',
                            component: () =>
                                import ('@/components/profile/vtclmnu/about')
                        },
                        {
                            path: 'recordbook',
                            component: () =>
                                import ('@/components/profile/vtclmnu/recordbook')
                        },

                        {
                            path: 'base',
                            component: () =>
                                import ('@/components/profile/vtclmnu/base')
                        },
                        {
                            path: 'dfncwpn',
                            component: () =>
                                import ('@/components/profile/vtclmnu/dfncwpn')
                        }


                    ],
                },


                {
                    path: '/game/profile/eavatar',
                    component: () =>
                        import ('@/components/profile/vtclmnu/eavatar')
                },
                {
                    path: 'otrprofile/:uid',
                    name: 'otrprofile',
                    component: () =>
                        import ('@/views/game/otrprofile'),

                    children: [{
                            path: '/cablities',

                            component: () =>
                                import ('@/components/otrprofile/cablities')
                        },
                        {
                            path: '/wall',
                            component: () =>
                                import ('@/components/otrprofile/wall')
                        },
                        {
                            path: '/badge',
                            component: () =>
                                import ('@/components/otrprofile/badge')
                        },
                        {
                            path: '/chealth',
                            component: () =>
                                import ('@/components/otrprofile/chealth')
                        },
                        {
                            path: '/ctrophy',
                            component: () =>
                                import ('@/components/otrprofile/ctrophy')
                        },
                        {
                            path: '/cminions',
                            component: () =>
                                import ('@/components/otrprofile/cminions')
                        },
                        {
                            path: '/cproperty',
                            component: () =>
                                import ('@/components/otrprofile/cproperty')
                        },
                        {
                            path: '/cabout',
                            component: () =>
                                import ('@/components/otrprofile/cabout')
                        },

                    ]
                },

                {
                    name: 'friends',
                    path: 'friends',
                    component: () =>
                        import ('@/views/game/friends'),
                    children: [{
                            path: 'mafias',
                            component: () =>
                                import ('@/components/friends/mafias')
                        },
                        {
                            path: 'invitemafia',
                            component: () =>
                                import ('@/components/friends/invitemafia')
                        },
                        {
                            path: 'invitefriends',
                            component: () =>
                                import ('@/components/friends/invitefriends')
                        },
                        {
                            path: 'pending',
                            component: () =>
                                import ('@/components/friends/pending')
                        }

                    ],

                },
                {
                    name: 'organization',
                    path: 'organization',
                    component: () =>
                        import ('@/views/game/organization/home'),
                    children: [{
                            path: 'gossipe',
                            component: () =>
                                import ('@/components/organization/gossipe')
                        },
                        {
                            path: 'member',
                            component: () =>
                                import ('@/components/organization/member')
                        },
                        {
                            path: 'blockmember',
                            component: () =>
                                import ('@/components/organization/blockmember')
                        },
                        {
                            path: 'family',
                            component: () =>
                                import ('@/components/organization/family')
                        },
                    ],
                },

                /* {
                    path: 'orgmbrpg',
                    component: () =>
                        import ('@/components/organization/orgmbrpg')
                }, */
                {
                    path: 'searchorg',
                    component: () =>
                        import ('@/views/game/organization/searchorg')
                },
                {
                    path: 'createorg',
                    component: () =>
                        import ('@/views/game/organization/createorg')
                },
                {
                    path: '/game/customorg',
                    component: () =>
                        import ('@/views/game/organization/customorg')
                },
                {
                    name: 'notification',
                    path: 'notification',
                    component: () =>
                        import ('@/views/game/notification'),
                    children: [{
                            path: 'news',
                            component: () =>
                                import ('@/components/notification/news')
                        },
                        {
                            path: 'request',
                            component: () =>
                                import ('@/components/notification/request')
                        },
                        {
                            path: 'activity',

                            component: () =>
                                import ('@/components/notification/activity')
                        },
                        {
                            path: 'pchat',
                            component: () =>
                                import ('@/components/notification/pchat')
                        },
                    ],
                },

                {
                    path: 'editprofile',
                    component: () =>
                        import ('@/components/settings/editprofile')
                },
                {
                    path: 'stngs',
                    component: () =>
                        import ('@/components/settings/stngs')

                },
                {
                    path: 'alerts',
                    name: "alerts",
                    component: () =>
                        import ('@/components/settings/alerts')
                },

                {
                    path: 'forumlist',
                    name: "forumlist",
                    component: () =>
                        import ('@/components/settings/forumlist')
                },





                {
                    path: 'topic1',
                    name: 'topic1',
                    component: () =>
                        import ('@/components/settings/frmlist/topic1')
                },
                {
                    path: 'topic2',
                    name: 'topic2',
                    component: () =>
                        import ('@/components/settings/frmlist/topic2')
                },
                {
                    path: 'topic3',
                    name: 'topic3',
                    component: () =>
                        import ('@/components/settings/frmlist/topic3')
                },
                {
                    path: 'topic4',
                    name: 'topic4',
                    component: () =>
                        import ('@/components/settings/frmlist/topic4')
                },
                {
                    path: 'topic5',
                    name: 'topic5',
                    component: () =>
                        import ('@/components/settings/frmlist/topic5')
                },
                {
                    path: 'topic6',
                    name: 'topic6',
                    component: () =>
                        import ('@/components/settings/frmlist/topic6')
                },
                {
                    path: 'topic7',
                    name: 'topic7',
                    component: () =>
                        import ('@/components/settings/frmlist/topic7')
                },




                {
                    name: 'shop',
                    path: 'shop',
                    component: () =>
                        import ('@/views/game/shop'),
                    children: [{
                            path: 'weapon',
                            component: () =>
                                import ('@/components/shop/weapon')
                        },
                        {
                            path: 'Vehicls',
                            component: () =>
                                import ('@/components/shop/Vehicls')
                        },
                        {
                            path: 'Item',
                            component: () =>
                                import ('@/components/shop/Item')
                        },
                        {
                            path: 'Avater',
                            component: () =>
                                import ('@/components/shop/Avater')
                        },

                        {
                            path: 'intellegence',
                            component: () =>
                                import ('@/components/shop/intellegence')
                        },




                    ],
                },
                {
                    path: 'chat/:id',
                    component: () =>
                        import ('@/components/notification/chat'),
                    props: true
                },
                {
                    path: 'lndactvty',
                    name: 'lndactvty',
                    component: () =>
                        import ('@/views/game/lndactvty'),
                },

                {
                    path: 'blackmarket',
                    component: () =>
                        import ('@/views/game/blackmarket'),

                    children: [{
                            path: 'buys',
                            component: () =>
                                import ('@/components/blackmarket/buy')
                        },
                        {
                            path: 'sels',
                            component: () =>
                                import ('@/components/blackmarket/sell')
                        },
                    ],
                },

                {
                    name: 'discussion',
                    path: 'discussion',
                    component: () =>
                        import ('@/views/game/discussion'),
                },


                {
                    path: '/character1',
                    name: 'character1',
                    component: () =>
                        import ('@/views/game/character1')
                },

                {
                    path: '/character2',
                    name: 'character2',
                    component: () =>
                        import ('@/views/game/character2')
                },
                {
                    path: '/Customeprofile',
                    name: 'Customeprofile',
                    component: () =>
                        import ('@/views/game/Customeprofile')
                },

                {
                    path: '/Family',
                    name: 'Family',
                    component: () =>
                        import ('@/views/game/Family')
                },



                {
                    path: 'leaderboard',
                    name: 'leaderboard',
                    component: () =>
                        import ('@/views/game/leaderboard'),
                    children: [{
                            path: 'friend',
                            component: () =>
                                import ('@/components/leaderboard/friends')
                        },
                        {
                            path: 'syndicates',
                            component: () =>
                                import ('@/components/leaderboard/syndicates')
                        },
                        {
                            path: 'world',
                            component: () =>
                                import ('@/components/leaderboard/world')
                        },
                    ]
                },
                {
                    path: 'mn',
                    name: 'mn',
                    component: () =>
                        import ('@/views/game/mn'),

                },
                {
                    path: 'faq',
                    name: 'faq',
                    component: () =>
                        import ('@/views/game/faq'),
                    children: [{
                            path: 'general',
                            component: () =>
                                import ('@/components/faqs/general')
                        },
                        {
                            path: 'purchasing',
                            component: () =>
                                import ('@/components/faqs/purchasing')
                        },
                        {
                            path: 'gameplay',
                            component: () =>
                                import ('@/components/faqs/gameplay')
                        },

                    ]
                },



                {
                    path: 'loot',
                    name: 'loot',
                    component: () =>
                        import ('@/views/game/loot')
                },



                {
                    path: 'propertynew',
                    name: 'propertynew',
                    component: () =>
                        import ('@/views/game/propertynew')
                },
                {
                    path: 'propertynewin',
                    name: 'propertynewin',
                    component: () =>
                        import ('@/views/game/propertynewin')
                },


                {
                    path: 'spy',
                    name: 'spy',
                    component: () =>
                        import ('@/views/game/spy')
                },


                {
                    path: 'spy/type1',
                    name: 'type1',
                    component: () =>
                        import ('@/components/spy/type1')
                },
                {
                    path: 'Threat',
                    name: 'Threat',
                    component: () =>
                        import ('@/views/game/Threat')
                },



             

                {

                    path: 'attack/:who',
                    component: () =>
                        import ('@/views/game/attack'),
                        props: true
                },

               

                {
                    path: 'combat',
                    name: 'combat',
                    component: () =>
                        import ('@/views/game/combat')
                },

                {
                    path: 'fightlist',
                    name: 'fightlist',
                    component: () =>
                        import ('@/components/combat/fightlist')
                },

                {
                    path: 'arenalist',
                    name: 'arenalist',
                    component: () =>
                        import ('@/components/combat/arenalist')
                },
                {
                    path: 'hitlist',
                    name: 'hitlist',
                    component: () =>
                        import ('@/components/combat/hitlist')
                },








                {

                    path: 'gift',
                    name: 'gift',
                    component: () =>
                        import ('@/views/game/gift')
                },

                {
                    path: 'Godfathers',
                    name: 'Godfathers',
                    component: () =>
                        import ('@/views/game/godfather'),
                },

                {
                    path: 'typ1',
                    component: () =>
                        import ('@/components/godfather/typ1')
                },
                {
                    path: 'typ2',
                    component: () =>
                        import ('@/components/godfather/typ2')
                },
                {
                    path: 'typ3',
                    component: () =>
                        import ('@/components/godfather/typ3')
                },

                {
                    path: 'typ4',
                    component: () =>
                        import ('@/components/godfather/typ4')
                },
                {
                    path: 'typ5',
                    component: () =>
                        import ('@/components/godfather/typ5')
                },
                {
                    path: 'typ6',
                    component: () =>
                        import ('@/components/godfather/typ6')
                },

                {
                    path: 'typ7',
                    component: () =>
                        import ('@/components/godfather/typ7')

                },

                {
                    path: 'typ8',
                    component: () =>
                        import ('@/components/godfather/typ8'),
                },
                {
                    path: 'gfight',
                    component: () =>
                        import ('@/components/godfather/fight/gfight')
                },

                {
                    path: 'gatkintro',
                    component: () =>
                        import ('@/components/godfather/fight/gatkintro')
                },

                {
                    path: 'gattack',
                    component: () =>
                        import ('@/components/godfather/fight/gattack')
                },
                {
                    path: 'typ9',
                    component: () =>
                        import ('@/components/godfather/typ9'),
                    children: [
                        /* portal sections start */
                        {
                            path: 'p1',
                            name: "p1",
                            component: () =>
                                import ('@/components/portal/p1')
                        },
                        {
                            path: 'p2',
                            name: "p2",
                            component: () =>
                                import ('@/components/portal/p2')
                        },
                        {
                            path: 'p3',
                            name: "p3",
                            component: () =>
                                import ('@/components/portal/p3')
                        },
                        {
                            path: 'p4',
                            name: "p4",
                            component: () =>
                                import ('@/components/portal/p4')
                        },
                        {
                            path: 'p5',
                            name: "p5",
                            component: () =>
                                import ('@/components/portal/p5')
                        },
                        {
                            path: 'p6',
                            name: "p6",
                            component: () =>
                                import ('@/components/portal/p6')
                        },

                        /* portal sections End */
                    ]
                },

                {
                    path: '/adminnews',
                    name: 'adminnews',
                    component: () =>
                        import ('@/views/game/adminnews')
                },


                {

                    path: 'safehouse',
                    name: 'safehouse',
                    component: () =>
                        import ('@/views/game/safehouse')
                },
                {

                    path: 'friendsfeed',
                    name: 'friendsfeed',
                    component: () =>
                        import ('@/views/game/friendsfeed')
                },


                {
                    path: 'alllndmission',
                    name: 'alllndmission',
                    component: () =>
                        import ('@/views/game/alllndmission')
                },
                

                {
                    path: 'missionlist',
                    name: 'missionlist',
                    component: () =>
                        import ('@/components/mission/missionlist')
                },
                {
                    path: 'missionintro',
                    name: 'missionintro',
                    component: () =>
                        import ('@/components/mission/missionintro')
                },

                {
                    path: 'mission',
                    name: 'mission',
                    component: () =>
                        import ('@/components/mission/mission')
                },
                {
                    path: 'land/:lndid',
                    name: 'land',
                    component: () =>
                        import ('@/views/game/land')
                },
                {
                    path: 'alllands',
                    name: 'allland',
                    component: () =>
                        import ('@/views/game/alllands')
                },
               
                {
                    path: '/model',
                    name: 'model',
                    component: () =>
                        import ('@/views/game/model')
                },

                {
                    name: 'model',
                    path: '/model/',
                    component: () =>
                        import ('@/views/game/model'),
                    children: [{
                            path: 't1',
                            component: () =>
                                import ('@/components/model/t1')
                        },
                        {
                            path: 't2',
                            component: () =>
                                import ('@/components/model/t2')
                        },
                        {
                            path: 't3',
                            component: () =>
                                import ('@/components/model/t3')
                        },
                        {
                            path: 't4',
                            component: () =>
                                import ('@/components/model/t4')
                        },



                    ],

                },


                /* { path: 'gtns',  component:  () => import('@/components/home/gmnews')},
                { path: 'blab',  component:  () => import('@/components/home/blab')},
                { path: 'lmtdofr',  component:  () => import('@/components/home/lmtdofr')},
                { path: 'update',  component:  () => import('@/components/home/update')},
                { path: 'bonus',  component:  () => import('@/components/home/bonus')},
                { path: 'limited',  component:  () => import('@/components/home/limited')}, */
            ],

        },
        {

            path: '/addtask',
            name: 'addtask',
            component: () =>
                import ('@/views/addtask')
        },



        {
            path: '/battle',
            name: 'battle',
            component: () =>
                import ('@/views/battle')
        },
        {
            path: '/changemail',
            name: 'changemail',
            component: () =>
                import ('@/views/changemail')
        },
        {
            path: '/Changepassword',
            name: 'Changepassword',
            component: () =>
                import ('@/views/Changepassword')
        },
        {
            path: '/colors',
            name: 'colors',
            component: () =>
                import ('@/views/colors')
        },
        {
            path: '/gameintro',
            name: 'gameintro',
            component: () =>
                import ('@/views/gameintro')
        },

        {
            path: '/Screen',
            name: 'Screen',
            component: () =>
                import ('@/views/Screen')
        },
        {
            path: '/levelup',
            name: 'levelup',
            component: () =>
                import ('@/views/levelup')
        },
        {
            path: '/Tutorial',
            name: 'Tutorial',
            component: () =>
                import ('@/views/Tutorial')
        },

        /* external link start */
        {
            path: '/gmail',
            beforeEnter() { location.href = 'mailto:support@mafiasrival.com?subject=New mail' }
        },
        {
            path: '/messenger',
            beforeEnter() { location.href = 'https://m.me/mafiasrivalgame'}
        }
        /* external link End */



        /*  {
           path:'/',
           redirect:'/home/gtns',          
         },
         {
           path:'/home/', component:  () => import('@/views/home'),
           children:[
             { path: 'gtns',  component:  () => import('@/components/home/gmnews')},
             { path: 'blab',  component:  () => import('@/components/home/blab')},
             { path: 'lmtdofr',  component:  () => import('@/components/home/lmtdofr')},
             { path: 'update',  component:  () => import('@/components/home/update')},
             { path: 'bonus',  component:  () => import('@/components/home/bonus')},
             { path: 'limited',  component:  () => import('@/components/home/limited')},
           ]
         }, */
        /* {
          path:'/',component:  () => import('@/views/home'),
          children:[
            { path: '/home/',  component:  () => import('@/components/home/gmnews')},
            { path: '/home/lmtdofr',  component:  () => import('@/components/home/lmtdofr')},
            { path: '/home/update',  component:  () => import('@/components/home/update')},
            { path: '/home/blab',  component:  () => import('@/components/home/blab')},
            { path: '/home/bonus',  component:  () => import('@/components/home/bonus')},
            { path: '/home/limited',  component:  () => import('@/components/home/limited')},
           
          ],
        }, */


    ]
})