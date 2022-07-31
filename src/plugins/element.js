// import Vue from 'vue'
import {
    Button,
    Input,
    Message,
    FormItem,
    Form,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Col,
    Row,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog
} from 'element-ui';


// 按需引入组件
const element = {
    install: function (Vue) {
        Vue.use(Input)
        Vue.use(FormItem)

        Vue.use(Button)
        Vue.use(Form)
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItemGroup)
        Vue.use(MenuItem)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Card)
        Vue.use(Col)
        Vue.use(Row)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Switch)
        Vue.use(Tooltip)
        Vue.use(Pagination)
        Vue.use(Dialog)




        Vue.prototype.$message = Message
    }
}
export default element
