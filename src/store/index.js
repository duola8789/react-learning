/**
 * Created by zh on 2019/3/6.
 */
import configureStore from '@/store/configureStore';
import rootSaga from '@/sagas';

// 对 Store 进行配置
const store = configureStore();

// 初始化 redux-saga 中间件，注入我们的 mySaga 文件
// 需要在创建 store 后才能运行
store.runSaga(rootSaga);

export default store;
