/**
 * Created By zh on 2019-03-19
 */
import React, { useState, useEffect, useCallback } from 'react';

// 不使用useCallback
// export default function () {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(100);
//
//   function fetch() {
//     console.log('fetch');
//     return count1 + 1000;
//   }
//
//   useEffect(() => {
//     console.log(fetch());
//   });
//
//   return (
//     <div>
//       <button onClick={() => setCount1(count1 + 1)}>Add Count1</button>
//       <button onClick={() => setCount2(count2 + 1)}>Add Count2</button>
//     </div>
//   );
// }

// 使用useCallback
export default function () {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  const fetch = useCallback(() => {
    console.log('fetch');
    return count1 + 1000;
  }, [count1]);

  useEffect(() => {
    console.log(fetch());
  }, [fetch, count1, count2]);

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>Add Count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Add Count2</button>
    </div>
  );
}

