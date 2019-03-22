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
  findUser(id) {
    return users.find(v => v.id === id);
  },
  // 上线通知
  subscribe(id, callback) {
    let user = this.findUser(id);
    if (user.status.isOnline) {
      console.log(user.name);
    }
    user && callback(user.status.isOnline);
  },
  // 下线通知
  unsubscribe(id, callback) {
    let user = this.findUser(id);
    user && callback(user.status.isOnline);
  }
};


/**
 * 好友在线状态组件
 * 根据好友在线状态显示对应文本
 */
const FriendStatus = props => {
  const [isOnline, setIsOnline] = useState(false);

  const handleStatusChange = isOnline => {
    setIsOnline(isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribe(props.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribe(props.id, handleStatusChange);
    };
  });

  return (
    isOnline ? 'Online↑↑↑↑↑↑↑↑↑↑↑↑' : 'Offline'
  );
};

// const FriendListItem = props => {
//   const [isOnline, setIsOnline] = useState(false);
//
//   useEffect(() => {
//     setIsOnline(true);
//     return () => {
//       setIsOnline(false);
//     };
//   });
//
//   return (
//     <li style={{ color: isOnline ? 'green' : 'red' }}>{props.user.name}</li>
//   );
// };


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
            {user.name}: <FriendStatus id={user.id} />
          </p>
        ))}
      </ul>
    </div>
  );
}
