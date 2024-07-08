<script setup>
    import drawer from './drawer.vue'
    // const { selected_map_id } = nav()
    const { data } = defineProps({
        data: Object,
    });
    // data.children.forEach(item => {
    //     naviganavtion(item)
    //     // item.off = true
    //     // item.selected = false
    //     // item.father = function(){
    //     //     return data;
    //     // }
    //     // item.set_finish = function(val){
    //     //     this.selected = val
    //     //     if(this.father().id){
    //     //         this.father().set_finish(val)
    //     //     }
    //     // }
    //     // item.set = function(val){
    //     //     this.off = val
    //     //     if(!val && this.father().id && this.father().off){//打开的时候打开所有的父元素
    //     //         this.father().set(val)
    //     //     }else if(val){//关闭的时候关闭所有子元素
    //     //         this.children.forEach(function(item){
    //     //             if(!item.off){
    //     //                 item.set(val)
    //     //             }
    //     //         })
    //     //     }
    //     // }
    // });
</script>

<template>
    <div class="drawer_children">
        <div 
            class="drawer_box" 
            v-for="(item,index) in data.children" :key="item.id"
        >
            <drawer :data="item" />
        </div>
    </div>
</template>

<style scoped>
    .drawer_children{
        min-height: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .drawer_box{
        width: calc(100% - 15px);
        margin-top: 5px;
        display: flex;
        flex-direction: column;
    }
</style>
