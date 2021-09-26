import React,{useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import './addUrlPath.scss';
import {postUrlData} from "../../services/services";
import Modal from "../../general/modal/modal";


type Inputs = {
    title: string,
    source: string,
    description: string,
    mnemonicWord: string,
};

const AddUrlPath = () => {
    const {register, handleSubmit, watch,reset, formState: {errors}} = useForm<Inputs>();
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const onSubmit: SubmitHandler<Inputs> = (data:Inputs)=>postUrlData(data);
    const selectedOptions = ["", "music", "technology", "movies", "other"];
    const restoreData=()=>{
        setIsOpen(true);
        reset();
    }
    console.log(watch("title")) // watch input value by passing the name of it
    const closeModal=()=>{
        setIsOpen(false);
    }
    return (
        <>
            <h2 className="path__heading">Input storage</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input defaultValue="Title" {...register("title")} />
                <label>Data Source</label>
                <input {...register("source", {required: true})} />
                {errors.source &&
                <span style={{marginLeft: '20px', color: "#db4242"}}> ⚠ This field is required</span>}
                <label>Mnemonic word</label>
                <input {...register("mnemonicWord", {required: true})} />
                {errors.mnemonicWord &&
                <span style={{marginLeft: '20px', color: "#db4242"}}> ⚠ This field is required</span>}
                <label> Description</label>
                <select {...register("description")}>
                    {selectedOptions.map(value =>
                        <option value={value}>{value}</option>
                    )}
                </select>
                {Object.keys(errors).length<=0 && <Modal isOpen={isOpen} onClose={closeModal} title="Submit is succeeded" content="Your data are successfully submitted.Navigate to dataBase tab for more info "/>}
                <input type="submit" value="Store" className="submit" onClick={()=>restoreData()}/>
            </form>
        </>
    );

}


export default AddUrlPath;
