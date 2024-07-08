import { ref,reactive } from "vue";
import { defineStore } from "pinia";

export const stores_nav = defineStore('counter',() => {
    const old_id = ref(0)
    const new_id = ref(0)
    let set_old_id = reactive({fun:() => {}})
    const map_id = reactive(new Map())
    function set_selected(id){
        old_id.value = new_id.value
        new_id.value = id
        console.log(old_id.value,id)
        map_id.set(old_id.value,false)
        map_id.set(id,true)
    }

    return { old_id,new_id,set_selected,map_id,set_old_id }
})