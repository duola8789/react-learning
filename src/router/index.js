/**
 * Created by zh on 2019/11/20.
 */
import Index from '@/views/common/Index';
import NotFound from '@/views/common/404';
import Demo1_1 from '@/views/demo1/1';
import Demo1_2 from '@/views/demo1/2';
import Demo1_3 from '@/views/demo1/3';
import Demo1_4 from '@/views/demo1/4';
import Demo2_1 from '@/views/demo2/1';
import Demo2_2 from '@/views/demo2/2';
import Demo2_3 from '@/views/demo2/3';
import Demo3_1 from '@/views/demo3/1';
import Demo3_2 from '@/views/demo3/2';
import Demo4_1 from '@/views/demo4/1';
import Demo4_2 from '@/views/demo4/2';
import Demo4_3 from '@/views/demo4/3';
import Demo4_4 from '@/views/demo4/4';
import Demo4_5 from '@/views/demo4/5';
import Demo4_6 from '@/views/demo4/6';
import Demo4_7 from '@/views/demo4/7';
import Demo4_8 from '@/views/demo4/8';
import Demo4_9 from '@/views/demo4/9';

// 路由列表，一级目录的 path 用作 key
const fullRoutes = [
  {
    name: '未分类',
    icon: 'github',
    path: '/demo1',
    children: [
      {
        name: 'React 16',
        path: '/demo1/1',
        icon: 'account-book',
        component: Demo1_1,
      }, {
        name: '组件间通信',
        path: '/demo1/2',
        icon: 'alert',
        component: Demo1_2,
      }, {
        name: 'Render Props',
        path: '/demo1/3',
        icon: 'api',
        component: Demo1_3,
      }, {
        name: 'Context API',
        path: '/demo1/4',
        icon: 'appstore',
        component: Demo1_4,
      },
    ]
  },
  {
    name: 'Redux',
    icon: 'android',
    path: '/demo2',
    children: [
      {
        name: '基本概念',
        path: '/demo2/1',
        icon: 'audio',
        component: Demo2_1,
      }, {
        name: '中间件和异步操作',
        path: '/demo2/2',
        icon: 'bank',
        component: Demo2_2,
      }, {
        name: 'React-Redux',
        path: '/demo2/3',
        component: Demo2_3,
      },
    ]
  },
  {
    name: 'HOC',
    icon: 'apple',
    path: '/demo3',
    children: [
      {
        name: '获取数据和刷新',
        path: '/demo3/1',
        icon: 'bell',
        component: Demo3_1,
      }, {
        name: '显示鼠标位置',
        path: '/demo3/2',
        icon: 'book',
        component: Demo3_2,
      },
    ]
  },
  {
    name: 'Hooks',
    icon: 'chrome',
    path: '/demo4',
    children: [
      {
        name: '计数器',
        path: '/demo4/1',
        icon: 'bug',
        component: Demo4_1,
      }, {
        name: '好友上线使用多个 Effect',
        path: '/demo4/2',
        icon: 'bulb',
        component: Demo4_2,
      }, {
        name: '好友上线使用自定义 Effect',
        path: '/demo4/3',
        icon: 'calculator',
        component: Demo4_3,
      }, {
        name: 'useEffect 的学习',
        path: '/demo4/4',
        icon: 'build',
        component: Demo4_4,
      }, {
        name: 'useEffect 的快照',
        path: '/demo4/5',
        icon: 'calendar',
        component: Demo4_5,
      }, {
        name: 'useRef',
        path: '/demo4/6',
        icon: 'camera',
        component: Demo4_6,
      }, {
        name: 'useReducer',
        path: '/demo4/7',
        icon: 'car',
        component: Demo4_7,
      }, {
        name: 'useCallback',
        path: '/demo4/8',
        icon: 'carry-out',
        component: Demo4_8,
      }, {
        name: 'useContext',
        path: '/demo4/9',
        icon: 'cloud',
        component: Demo4_9,
      },
    ]
  },
  {
    name: 'HOME',
    path: '/',
    component: Index,
    hiddenInSider: true,
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
    hiddenInSider: true,
  }
];

// 用于侧边栏
const menus = fullRoutes.filter(route => !route.hiddenInSider);

// 用于注册路由
const routes = fullRoutes.reduce((total, current) => {
  let route = [];
  if (current.children) {
    route = current.children.map(child => ({
      path: child.path,
      component: child.component,
    }));
  }
  if (current.path && current.component) {
    route.push({
      path: current.path,
      component: current.component,
    });
  }
  return total.concat(route);
}, []);

export {
  menus,
  routes
};
