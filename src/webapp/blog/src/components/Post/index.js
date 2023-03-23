import './Post.css'
import axios from 'axios'

const config = {
    headers:{
      Authorization: localStorage.getItem('LoginToken')
    }
  }

function getAllPosts() {
    console.log(config.headers.Authorization)

   return axios.get('localhost:8080/internal/post', config)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

getAllPosts()

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