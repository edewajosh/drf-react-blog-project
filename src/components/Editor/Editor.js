import { useState } from 'react'
import Article from './Article'
import ArticleCategory from './ArticleCategory'
import Author from './Author'
import './Editor.css'

const Editor = () => {

    const [number, setNumber] = useState(0)

    return (
        <div className={'edit-form'}>
            <div className={'top-menu'}>
                <ul className={"group-list"}>
                    <li onClick={() =>setNumber(0)}>Author</li>
                    <li onClick={() =>setNumber(1)}>Category</li>
                    <li onClick={() =>setNumber(2)}>Article</li>
                </ul>
            </div>
            {/* Switch between different forms */}
            {(number === 0 && <Author/>) 
            || ( number === 1 && <ArticleCategory/>) 
            || (number === 2 && <Article/>)}
        </div>
    )
}

export default Editor