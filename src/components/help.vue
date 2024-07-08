<script setup>
    import { reactive } from 'vue';
    import navigation from './navigation.vue'
    import class_nav from '../hooks/navigation.js'
    
    let data = {
        id:0,
        title:'test',
        children:[
            {
                id:1,
                title:'test',
                children:[
                    {
                        id:2,
                        title:'test',
                        children:[]
                    },
                    {
                        id:3,
                        title:'test',
                        children:[]
                    },
                    {
                        id:4,
                        title:'test',
                        children:[]
                    },
                ]
            },
            {
                id:5,
                title:'test',
                children:[
                    {
                        id:6,
                        title:'test',
                        children:[
                            {
                                id:7,
                                title:'test',
                                children:[]
                            },
                            {
                                id:8,
                                title:'test',
                                children:[]
                            },
                            {
                                id:9,
                                title:'test',
                                children:[]
                            },
                        ]
                    },
                    {
                        id:10,
                        title:'test',
                        children:[]
                    },
                    {
                        id:11,
                        title:'test',
                        children:[]
                    },
                ]
            },
        ]
    }
    const drawer = reactive(new class_nav(data))
</script>

<template>
    <div class="shell">
        <div class="nav_box">
            <div class="much"></div>
            <div class="nav">
                <navigation :data="drawer" />
            </div>
        </div>
        <div class="container"></div>
    </div>
</template>

<style scoped>
    .shell{
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        display: flex;
    }
    .nav_box{
        width: 300px;
        height: 100%;
        border-right: 1px solid #000;
        display: flex;
        flex-direction: column;
    }
    .much{
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #000;
    }
    .nav{
        width: 100%;
        flex: 1;
        overflow-x: hidden;
    }
    .container{
        flex:1
    }
</style>
