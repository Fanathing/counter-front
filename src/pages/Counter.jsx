import { useState } from "react";

const Main = () => {

    const [count, setCount] = useState(1);
    
    return (
        <>
            <div>이곳은 카운터 페이지 입니다!</div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Main;