<nt-select :options="options" v-model="sVal"></nt-select>
<nt-select :options="options" v-model="sList" multiple></nt-select>
<script>
export default{
    data(){
        return {
          sVal:3,
          sList:[],
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    }
}
</script>