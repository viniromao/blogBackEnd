import './Post.css'

const Post = ({ data }) => {

    const getTitle = data.filter((value) => {
        return value.title.toLowerCase();
      });
        console.log(getTitle)
        return (
            <div className='post'>
                <div className='title'>

                </div>
                <div className='content'>

                </div>
                <div className=''>

                </div>
            </div>
        )
    }

export default Post