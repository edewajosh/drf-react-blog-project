import { useForm } from "react-hook-form";

const ArticleCategory = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className={'content'}>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
               <div className="{ form-group }">
                   <label for="title">Name: </label>
                   <input className={"control-form"} type="text" name="title" {...register("title", {required: true})} placeholder="Title"/>
                    {errors.title && <p>Title Required</p>}
               </div>
                <div>
                    <label>Description: </label>
                    <input className={"control-form"} type="text" name="description" {...register("description", {required: true})} placeholder="Description"/>
                    {errors.description && <p>Description Required</p>}
                </div>
                <div className="{form-group}">
                    <input type="submit" value="Submit" className={"author-submit"}/>
                </div>
            </form>
        </div>
    )
}

export default ArticleCategory;