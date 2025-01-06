import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
    const storedCount = localStorage.getItem('count');
    const [count, setCount] = useState(storedCount ? parseInt(storedCount) : initialValue);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const inc = () => setCount(count + 5);
    const dec = () => setCount(count - 5);

    return [count, inc, dec];
}

export default useCounter;
