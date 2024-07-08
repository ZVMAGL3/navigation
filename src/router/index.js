import { createRouter,createWebHistory } from "vue-router";
import { stores_nav } from '../stores/nav.js'; // 导入 nav store


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            redirect:'help', 
        },
        {
            path:'/help/:index?',
            name:'help',
            component:() => import('../components/help.vue'),
            beforeEnter: (to, from, next) => {
                const { set_selected } = stores_nav(); // 使用 nav store 实例
                let index = parseInt(to.params.index)
                if (isNaN(index)) { // 如果无法转换为数值
                    index = 0; // 赋值为 0
                }
                set_selected(index)
                next()
            }
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     next()
// })

export default router