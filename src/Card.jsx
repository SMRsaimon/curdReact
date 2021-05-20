import React from 'react';


const Card =(props)=>{

 const {RemoveDataFromArry,title, content,id}=props
   
        return (
                <>
                <div className="col-3">
                        <div className="card">
                                <h5>{title}</h5>
                                <p><i>{content}</i></p>
                                <button className="btn btn-warning" onClick={()=>RemoveDataFromArry(id)}>Remove Item</button>
                        </div>
                </div>
                </>
        )
}

export default Card;