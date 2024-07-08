<script setup>
    import navigation from './navigation.vue'
    import { useRoute, useRouter } from 'vue-router'
    import { stores_nav } from '../stores/nav.js'

    const router = useRouter()
    const { new_id,map_id,set_selected,set_old_id } = stores_nav()

    const { data } = defineProps({
        data: Object,
    });
    map_id.set(data.id,false)

    let son_len = data.children.length

    function drawer_click(val){
        if(son_len == 0){
            router.replace({ params: {index:data.id} })
            //在这里写打开页面的调用函数
        }
        set_old_id.fun(false)
        set_old_id.fun = data.set_finish.bind(data)
        data.set_finish(true)
        set_selected(data.id)
        data.set(val)
    }

    if((data.id == new_id || new_id == 0) && son_len == 0){
        drawer_click(false)
    }

</script>

<template>
    <div class="drawer" :class="{ 'drawer_bacc': map_id.get(data.id),'selected': data.selected }"  @click="drawer_click(!data.off)">
        <div class="drawer_title">{{ data.title }}</div>
        <img class="vane" :style="'transform: rotate(' + (data.off?1:0) * 90 + 'deg);'" v-if="son_len" src="/public/箭头.png" />
    </div>
    <div class="drawer_children_box" :style="'grid-template-rows: ' + (data.off?0:1) + 'fr;'" v-if="son_len">
        <navigation :data="data" />
    </div>
</template>

<style scoped>
    .drawer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        color: #333;
        padding: 0 5px;
        border-radius: 5px;
    }
    .drawer_bacc{
        background-color: rgba(51, 51, 51, 0.2) !important;
    }
    .selected{
        color: #00AEEC !important;
    }
    .drawer:hover{
        color: #fff;
        background-color: rgba(51, 51, 51, 0.1);
    }
    .drawer_title{
        height: 30px;
        line-height: 30px;
    }
    .vane{
        width:20px;
        transition: transform 0.5s ease-out;
    }
    .drawer_children_box{
        display: grid;
        min-height: 0;
        grid-template-rows: 1fr;
        transition: grid-template-rows 0.5s ease-out;
        overflow: hidden;
    }
</style>
