import React from 'react';
import './modal.scss';

interface ModalState{
    isOpen:boolean
    onClose:()=>void,
    title:string,
    content:string
}
const Modal =(props:ModalState)=>{
    const {isOpen,onClose,title,content}=props;

return(
    <div>
    {isOpen &&
    <div className="modal" id="modal">
        <h2>{title}</h2>
        <div className="modal__content">
            {content}
        </div>
        <div className="modal__actions">
            <button className="actions__buttons" onClick={onClose}>Close</button>
        </div>
    </div>
    }
        </div>
    )
}


export default Modal;
