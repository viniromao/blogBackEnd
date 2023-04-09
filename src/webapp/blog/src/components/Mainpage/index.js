import './Mainpage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar'
import Leftpanel from '../Leftpanel'
import Post from '../Post'
import data from '../Post/data.json'

const Mainpage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8080/internal/post');
            setPosts(response.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <NavBar/>
            <div className='leftpanel_post'>
                <Leftpanel/>
                <Post className='post_mainpage' data={posts}/>
            </div>
        </>
    )
}

export default Mainpage