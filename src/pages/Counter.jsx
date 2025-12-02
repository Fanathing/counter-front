import { useEffect, useState } from "react";
import axios from "axios";

const Counter = () => {

    const [count, setCount] = useState(1);
    
    useEffect(() => {
        const getCount = async() => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACK_API}/`);
            setCount(data.count);
        }
        getCount();
    }, [])

    const fetchIncrement = async() => {
        const { data } = await axios.post(`${process.env.REACT_APP_BACK_API}/increment`);
        setCount(data.count);
    }

    return (
        <>
            <div>이곳은 카운터 페이지 입니다!</div>
            {count}
            <button onClick={fetchIncrement}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter;