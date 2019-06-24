export default {
    data(){
        return {
            parent:null
        }
    },
    methods:{
        // 根据名称寻找祖先组件,返回是否找到
        findParent(name){
            let parent = this.$parent;
            while(parent){
                if(parent.$options._componentTag===name){
                    this.parent = parent;
                    return true;
                }
                parent = parent.$parent;
            }
            return false;
        }
    }
}