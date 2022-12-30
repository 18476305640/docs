const moment = require('moment');
module.exports = {
  title: "肥小猪",
  description: "肥小猪的笔记",
  base: "/docs/",
  themeConfig: {
	lastUpdated: "更新时间",
    logo: '/imgs/logo.png',
	nav: [
      { text: 'Js', link: '/note/Js.html' },
      { text: 'Guide', link: '/note/' },
      { text: 'External', link: 'https://google.com' },
    ],
	displayAllHeaders: true,
	sidebar: 'auto'
	
	
  },
  head: [
	['link', { rel: 'icon', href: '/favicon.ico' }],
	['meta', { name: 'author', content: 'zhuangjie' }],
	['meta', { name: 'keywords', content: '小庄的博客 小庄的笔记 zhuangjie 庄杰' }]
	
  ],
  plugins: [
	[
	  '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
	]
  ]
  
}