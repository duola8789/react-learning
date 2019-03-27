/**
 * Created By zh on 2019-03-19
 */
import React, { useState, useEffect } from 'react';

let users = [
  { id: 1, name: '周星驰', status: { isOnline: false }},
  { id: 2, name: '刘德华', status: { isOnline: false }},
  { id: 3, name: '赵本山', status: { isOnline: false }},
  { id: 4, name: '谢大脚', status: { isOnline: false }},
  { id: 5, name: '郭德纲', status: { isOnline: false }},
];

const ChatAPI = {
  // 上线通知
  subscribe(name, from) {
    console.log(`${name}上线了 -- from ${from}`);
  },
  // 下线通知
  unsubscribe(name, from) {
    console.log(`${name}下线了 -- from ${from}`);
  }
};

// 将上一个demo9_1的逻辑提取为自定义的Hook
function useFriendStatus(user) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(user.status.isOnline);
  });

  useEffect(() => {
    if (user.status.isOnline) {
      ChatAPI.subscribe(user.name, 'FriendStatus');
      return () => {
        ChatAPI.unsubscribe(user.name, 'FriendStatus');
      };
    }
  }, [user.name, user.status.isOnline]);

  return isOnline;
}

/**
 * 好友在线状态组件
 * 根据好友在线状态显示对应文本
 */
const FriendStatus = ({ user }) => {
  const isOnline = useFriendStatus(user);

  return (
    isOnline ? 'Online↑↑↑↑↑↑↑↑↑↑↑↑' : 'Offline'
  );
};

/**
 * 好友在线状态组件
 * 根据好友在线状态显示不同颜色用户名
 */
const FriendListItem = ({ user }) => {
  const isOnline = useFriendStatus(user);

  return (
    <span style={{ color: isOnline ? 'green' : 'white' }}>
      {user.name}
    </span>
  );
};

function initialize() {
  console.log('initialize');
  return 1;
}

function Test() {
  const [state, setState] = useState(() => ({ a: initialize(), b: 2 }));
  console.log(state);
  return (
    <div>
      <button onClick={() => setState(prevState => ({ ...prevState, a: 100 }))}>click</button>
    </div>
  );
}

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = 'ok';
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    users.forEach(user => {
      user.status.isOnline = (user.id === (count + 1));
    });
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>Click Me</button>
      <ul>
        {users.map(user => (
          <p key={user.id}>
            <FriendListItem user={user} />: <FriendStatus user={user} />
          </p>
        ))}
      </ul>
      <Test />
    </div>
  );
}
