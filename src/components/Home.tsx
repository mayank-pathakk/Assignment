import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();
    useEffect(() => {
        history('/monitoring/pending');
    }, [])
    return (
        <div>Home</div>
    )
}

export default Home