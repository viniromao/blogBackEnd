import './Post.css'

const Post = ({ data }) => {
    return (
        <div className='post_div'>
            {data.map((value, index) => (
                <div className='post' key={index}>
                    <div className='title'>
                        <h2>{value.title}</h2>
                    </div>
                    <div className='content'>
                        {value.content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post