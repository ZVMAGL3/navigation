export default class class_nav
{
    constructor(data)
    {
        this.id = data.id;
        this.title = data.title
        this.off = true;
        this.selected = false;
        this.father = null
        this.children = []
        if(data.children.length){
            data.children.forEach((item) => {
                var drawer = new class_nav(item)
                drawer.father = this
                this.children.push(drawer)
            })
        }
    }
  
    set_finish(val){
        this.selected = val
        console.log(this)
        if(this.father){
            this.father.set_finish(val)
        }
    }

    set(val){
        this.off = val
        if(!val && this.father && this.father.id && this.father.off){//打开的时候打开所有的父元素
            this.father.set(val)
        }else if(val){//关闭的时候关闭所有子元素
            this.children.forEach(function(item){
                if(!item.off){
                    item.set(val)
                }
            })
        }
    }
}