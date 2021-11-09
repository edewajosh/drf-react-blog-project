import { useEffect, useState } from 'react'
import Article from './Article'
import ArticleCategory from './ArticleCategory'
import Author from './Author'
import './Editor.css'

const Editor = () => {

    const [number, setNumber] = useState(0)

    const [categories, setCategories ] = useState([])
    const [ authors, setAuthors ] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const categoriesFromServer = await fetchCategory()
            setCategories(categoriesFromServer)
        }

        const getAuthors = async () => {
            const authorsFromServer = await fetchAuthors()
            setAuthors(authorsFromServer)
        }
        getCategories()
        getAuthors()
    }, [])

    const fetchAuthors = async () => {
        const res = await fetch('http://localhost:8000/api/articles/author')
        const data = await res.json()
        return data
    }

    const fetchCategory = async () => {
        const res = await fetch('http://localhost:8000/api/articles/category')
        const data = await res.json()
        return data
    }

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
            {(number === 0 && <Author />) 
            || ( number === 1 && <ArticleCategory/>) 
            || (number === 2 && <Article categories={categories} authors={authors}/>)}
        </div>
    )
}

export default Editor