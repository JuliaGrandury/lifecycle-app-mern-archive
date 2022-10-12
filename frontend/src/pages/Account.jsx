import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Account() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    return (
        <>
            <section className="heading"><h1>{user && user.name}'s Account Settings</h1></section>
            <ul>
                <li>Username: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Password: {user.password}</li>
                <li>Users with access to My Closet</li>
                <li>Closets I have access to</li>
            </ul>
        </>
    )
}

export default Account