import { useEffect, useState } from "react"

const Tangazo = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const serverArticles = await fetchArticle()
            setArticles(serverArticles)
        }
        getArticles()
    }, [])
    console.log(articles)
    const fetchArticle = async () => {
        const res = await fetch('http://localhost:8000/api/articles/article')
        const data = await res.json()
        return data

    }
    return(
        <div>
            <h1>Tangazo Articles</h1>
            { articles.map((article) => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Tangazo