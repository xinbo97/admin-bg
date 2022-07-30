// import Vue from 'vue'
import {
    Button,
    Input,
    Message,
    FormItem,
    Form
} from 'element-ui';


// 按需引入组件
const element = {
    install: function (Vue) {
        Vue.use(Input)
        Vue.use(FormItem)

        Vue.use(Button)
        Vue.use(Form)
        Vue.prototype.$message = Message
    }
}
export default element
