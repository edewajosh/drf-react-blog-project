import { useState } from "react"
import { useForm } from "react-hook-form"

const Article = ({categories, authors}) => {
    console.log(categories)
    console.log(authors)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        addArticle(data)
    }

    const addArticle = async (data) => {
        await fetch('http://localhost:8000/api/articles/article', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return(
        <div>
            <h3>Add your article</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" {...register("title", {required: true})} placeholder="Title of the article"/>
                { errors.title && <p>Title is required</p>}
                <input type="textarea" name="body" {...register("body", {required: true})}  placeholder="Add article body"/>
                { errors.body && <p>Body is required</p>}
                <select {...register('category', {required: true})}>
                    { categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                    ))}
                </select>
                <select multiple={true} {...register('authors', {required: true})}>
                    { authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Article