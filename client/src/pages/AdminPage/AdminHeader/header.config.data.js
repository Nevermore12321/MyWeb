export default [
    //  标题1 : 博客系统
    //  子标题: Linux,Algorithm,Cloud Computing
    {
        title: '博客系统',
        children: [
            {
                title: 'Linux',
                desc: 'Linux 技巧',
                img: './',
                link: '/article/linux',
            },
            {
                title: 'Algorithm',
                desc: '算法记录',
                img: './',
                link: '/article/algorithm',
            },
            {
                title: 'Cloud Computing',
                desc: '云计算之路',
                img: './',
                link: '/article/cloud',
            },
        ],
    },

    //  标题2 : 管理系统
    //  子标题: mysql管理, linux系统管理
    {
        title: '管理系统',
        children: [
            {
                title: 'mysql管理',
                desc: '服务器的使用管理',
                img: './',
                link: '/management/mysql',
            },
            {
                title: 'linux系统管理',
                desc: '管理mysql中的数据',
                img: './',
                link: '/management/mysql',
            },
        ],
    },

    //  标题3 : 计划系统
    //  子标题 : 打卡,计划
    {
        title: '计划系统',
        children: [
            {
                title: '打卡',
                desc: '每日打卡',
                img: './',
                link: '/plan/daily',
            },
            {
                title: '计划',
                desc: '周,月计划',
                img: './',
                link: '/plan/schedules',
            },
        ],
    },

    //  关于作者
    {
        title: '关于我',
        children: [
            {
                title: '关于作者',
                desc: '小小码农',
                img: './',
                link: '/about/me',
            },
            {
                title: '关于网站',
                desc: '简单架构',
                img: './',
                link: '/about/web',
            },
        ],
    },
];
