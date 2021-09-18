import React,{useState,useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import './addUrlPath.scss';
import {postUrlData} from "../../services/services";
import Loader from "../../general/animations/loader";

type Inputs = {
    title: string,
    source: string,
    description: string,
    mnemonicWord: string,
};

const AddUrlPath = () => {
    const {register, handleSubmit, watch,reset, formState: {errors}} = useForm<Inputs>();
    const [loading,setLoading]=useState<boolean>(false);
    const onSubmit: SubmitHandler<Inputs> = (data) =>postUrlData(data);
    const selectedOptions = ["", "music", "technology", "movies", "other"];

    const restoreData=()=>{
        setLoading(false)
        reset();

    }
    console.log(watch("title")) // watch input value by passing the name of it

    return (
        <>
            <h2 className="path-heading">Input storage</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>Title</label>
                <input defaultValue="test" {...register("title")} />

                {/* include validation with required or other standard HTML validation rules */}
                <label>Data Source</label>
                <input {...register("source", {required: true})} />
                {/* errors will return when field validation fails  */}
                {errors.source &&
                <span style={{marginLeft: '20px', color: "#db4242"}}> ⚠ This field is required</span>}
                <label>Mnemonic word</label>
                <input {...register("mnemonicWord", {required: true})} />
                {/* errors will return when field validation fails  */}
                {errors.mnemonicWord &&
                <span style={{marginLeft: '20px', color: "#db4242"}}> ⚠ This field is required</span>}
                <label> Description</label>
                <select {...register("description")}>
                    {selectedOptions.map(value =>
                        <option value={value}>{value}</option>
                    )}
                </select>
                {loading && <Loader/>}
                <input type="submit" value="Store" className="submit" onClick={()=>restoreData()}/>


            </form>
        </>
    );

}


export default AddUrlPath;
