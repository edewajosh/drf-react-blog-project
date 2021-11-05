import { useForm } from "react-hook-form"

const Author = () => {
    const { register, handleSubmit, formState: {errors }} = useForm()

    const onSubmit = (author) => {
        console.log(author)
        addAuthor(author)
    }

    // Add Author
    const addAuthor = async(author) => {
        await fetch('http://localhost:8000/api/articles/author',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(author)
        })
    }

    return (
        <div className={'content'}>
            <h3>Create an author</h3>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <label className={"input-label"}>Author: </label>
                <input type="text" className={"control-form"} name="username" {...register("name",{ required: true})}/>
                {errors.username && <p>Username required</p>}
                <label className={"input-label"}>Email: </label>
                <input type="email" className={"control-form"} name="email" {...register("email",{ required: true})}/>
                {errors.email && <p>Password required</p>}
                <input type="submit" className={"author-submit"}/>
            </form>
        </div>
    )
}

export default Author