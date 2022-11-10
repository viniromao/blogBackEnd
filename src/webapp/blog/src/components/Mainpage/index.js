import './Mainpage.css'
import NavBar from '../NavBar'
import NavBarAuthenticated from '../NavBarAuthenticated'
import Leftpanel from '../Leftpanel'
import Post from '../Post'
import data from '../Post/data.json'

const Mainpage = () => {
    return (
        <>
            <NavBar />
            <div className='leftpanel_post'>
                <Leftpanel />
                <Post className='post_mainpage' data={data} />
            </div>
        </>
    )
}

export default Mainpage