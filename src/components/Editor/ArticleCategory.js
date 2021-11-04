import { useForm } from "react-hook-form";

const ArticleCategory = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = () => {
        return null
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" {...register("title", {required: true})} placeholder="Title"/>
                {errors.title && <p>Title Required</p>}
                <input type="text" name="description" {...register("description", {required: true})} placeholder="Description"/>
                {errors.description && <p>Description Required</p>}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ArticleCategory;