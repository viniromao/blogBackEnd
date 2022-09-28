import './Mainpage.css'
import NavBar from '../NavBar'
import Leftpanel from '../Leftpanel'
import Post from '../Post'
import data from '../Post/data.json'

const Mainpage = () => {
    return (
        <>
            <NavBar/>
            <Leftpanel/>
            <Post data={data}/>
        </>
    )
}

export default Mainpage