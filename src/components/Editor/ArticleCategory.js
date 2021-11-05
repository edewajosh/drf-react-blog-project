import { useForm } from "react-hook-form";

const ArticleCategory = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className={'content'}>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input className={"control-form"} type="text" name="title" {...register("title", {required: true})} placeholder="Title"/>
                {errors.title && <p>Title Required</p>}
                <input className={"control-form"} type="text" name="description" {...register("description", {required: true})} placeholder="Description"/>
                {errors.description && <p>Description Required</p>}
                <input type="submit" value="Submit" className={"author-submit"}/>
            </form>
        </div>
    )
}

export default ArticleCategory;