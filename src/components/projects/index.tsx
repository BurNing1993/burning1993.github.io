import React from 'react'
import Timeline from './Timeline'
import { ProjectItem } from '@/types'

const projectList: ProjectItem[] = [
  {
    year: '2021',
    projects: [
      {
        imgUrl: '/images/whiteboard.jpeg',
        name: 'WebWhiteboard',
        tags: ['Vue3.0', 'WebWhiteboard'],
        desc: '白板',
        demoUrl: 'https://whiteboard365.netlify.app',
        sourceCodeUrl: 'https://github.com/joey2217/whiteboard',
      },
      {
        imgUrl: '/images/react-antd-admin.jpeg',
        name: 'ReactAntdAdmin',
        tags: ['React', 'Antd'],
        desc: 'React + Antd 后台管理系统',
        demoUrl: 'https://react-antd-admin-green.now.sh/',
        sourceCodeUrl: 'https://github.com/joey2217/react-antd-admin',
      },
    ],
  },
  {
    year: '2020',
    projects: [
      {
        imgUrl: '/images/bing-wallpaper.jpeg',
        name: 'BingWallpaper',
        tags: ['Next.js', 'Wallpaper'],
        desc: 'Bing 壁纸',
        demoUrl: 'https://bingwallpaper.netlify.app/',
        sourceCodeUrl: 'https://github.com/joey2217/bing-wallpaper',
      },
      {
        imgUrl: '/images/vue-element-admin-plus.jpeg',
        name: 'VueElementAdminPlus',
        tags: ['Vue3.0', 'ElementPlus'],
        desc: 'Vue3 + Element+ 管理系统',
        demoUrl: 'https://vue-element-admin-plus.vercel.app/',
        sourceCodeUrl: 'https://github.com/joey2217/vue-element-admin-plus',
      },
      {
        imgUrl: '/images/vant-components.jpeg',
        name: 'VantComponents',
        tags: ['Vue.js', 'Vant'],
        desc: 'Vant 的扩展和封装,方便使用',
        demoUrl: 'https://www.npmjs.com/package/vant-components',
        sourceCodeUrl: 'https://github.com/joey2217/vant-components',
      },
      {
        imgUrl: '/images/weapp.jpg',
        name: 'J4FUN',
        tags: ['微信小程序'],
        desc: '微信小程序- 1.robot,2.贪吃蛇',
        sourceCodeUrl: 'https://github.com/joey2217/fun-miniprogram',
        qrcodeUrl: '/images/oJT3s0CgEME8QVMhc2Nmn6N2f8-Q.jpg',
      },
    ],
  },
  {
    year: '2019',
    projects: [
      {
        imgUrl: '/images/vue-print-plugin.jpeg',
        name: 'VuePrintPlugin',
        tags: ['Vue.js', 'Plugin'],
        desc: 'Vue.js打印插件,支持打印特定区域.',
        demoUrl: 'https://joey2217.github.io/vue-print-plugin',
        sourceCodeUrl: 'https://github.com/joey2217/vue-print-plugin',
      },
    ],
  },
]

const Projects: React.FC = () => {
  return <Timeline items={projectList} />
}

export default Projects
