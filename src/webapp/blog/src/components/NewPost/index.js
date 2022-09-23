import './NewPost.css'

const NewPost = () => {
    return (
        <div className='NewPost'>
            <form className='Newpost'>
                <div className='title_input'>
                    <label className='form-label_title'>Title</label>
                    <input
                        className='form-input_title'
                        type='text'
                        name='title'
                        placeholder='Title'
                    />
                </div>
                <div className='text_input'>
                    <label className='form-label_text'>Text</label>
                    <input
                        className='form-input_text'
                        type='text'
                        name='text'
                        placeholder='Write your Post'
                    />
                </div>
                <button className='form-input-btn_login' type='submit'>
                    Publish
                </button>
            </form>
        </div>
    )
}

export default NewPost