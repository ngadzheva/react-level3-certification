import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/menu.css';

export default function Menu() {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/exercise-1')}>Exercise 1</button>
            <button onClick={() => navigate('/exercise-2')}>Exercise 2</button>
            <button onClick={() => navigate('/exercise-3')}>Exercise 3</button>
        </nav>
    );
}