import { Link } from 'react-router-dom'
import Author from './Author'
import './Editor.css'

const Editor = () => {
    return (
        <div className={'edit-form'}>
            <div className={'side-menu'}>
                <h1>Menu</h1>
                <ul>
                    <li><Link to="/post-article">Author</Link></li>
                    <li><Link to="/post-article/category">Category</Link></li>
                    <li><Link to="/post-article/article">Article</Link></li>
                </ul>
            </div>
            <Author/>
        </div>
    )
}

export default Editor