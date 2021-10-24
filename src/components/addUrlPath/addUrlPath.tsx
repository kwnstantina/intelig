import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import './addUrlPath.scss';
import {postUrlData} from "../../services/services";
import { ErrorMessage } from '@hookform/error-message';
import Loader from '../../general/animations/loader';

type Inputs = {
    title: string,
    source: string,
    description: string,
    mnemonicWord: string,
    other:string,
};

const AddUrlPath = () => {
    const {register, handleSubmit,watch, formState: {errors,isSubmitting}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data:Inputs)=>postUrlData(data);
    const selectedOptions = ["music", "technology", "movies", "other"];
    const watchAll = watch();
    return (
        <>
            <h2 className="path__heading">Input storage</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input  type="text" {...register("title")} />
                <label>Data Source</label>
                <input {...register("source", {required: true})} placeholder="ex https://intelig.gr" />
                <ErrorMessage
                    errors={errors}
                    name="source"
                    render={({ message=" ⚠ This field is required" }) =>  <span style={{marginLeft: '20px', color: "#db4242"}}> {message}</span>}
                />
                <label>Mnemonic word</label>
                <input {...register("mnemonicWord", {required: true})}/>
                {errors.mnemonicWord &&
                <span style={{marginLeft: '20px', color: "#db4242"}}> ⚠ This field is required</span>}
                <label> Description</label>
                <select {...register("description")}>
                    {selectedOptions.map(value =>
                        <option value={value}>{value}</option>
                    )}
                </select>
                {watchAll.description==="other" &&  <div><label> Type description field</label>   <input {...register("other", {required: true})}/></div>}

                 <input type="submit" value="Store" className="submit" disabled={isSubmitting}/>
                   {isSubmitting &&   <div style={{margin:'30px'}}><Loader/> </div>}
            </form>
        </>
    );

}


export default AddUrlPath;
