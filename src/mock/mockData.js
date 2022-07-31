export const menuList = [
    {
        id: '1',
        name: '导航一',
        children: [
            {
                id: "1-1",
                name: '用户列表',
                path: '/users'

            },
            {
                id: '1-2',
                name: '二级导航二',
                path: '/users/1'
            },
            {
                id: '1-3',
                name: '二级导航三',
                path: '/users/2'
            }
        ]
    },
    {
        id: '2',
        name: '导航二',
        children: [
            {
                id: "2-1",
                name: '二级导航五',
                path: '/users/3'
            },
            {
                id: '2-2',
                name: '二级导航六',
                path: '/users/3'
            },
        ]
    },
    {
        id: '3',
        name: '导航三',
        children: [
            {
                id: "3-1",
                name: '二级导航八',
                path: '/users/3'
            }
        ]
    },
    {
        id: '5',
        name: '导航五',
    },


]

export const iconObj = {
    '1': 'iconfont icon-yonghu',
    '2': 'iconfont icon-quanxian',
    '3': 'iconfont  icon-shangpin',
    '5': 'iconfont  icon-dingdan',
    '1-1': 'iconfont  icon-pingtaiiconhuizong_huaban1fuben4',
}