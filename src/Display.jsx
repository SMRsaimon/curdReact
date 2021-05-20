import React, { useState } from 'react';
import Additem from './Additem';
import Card from './Card';

const Display =()=>{

        let [getArry,setArry] = useState([])

const toSet =(note)=>{

        const newIteam=[...getArry,note]
        setArry(newIteam)
}

const RemoveDataFromArry =(id)=>{

  const remainIteam=getArry.filter((x, index)=>index  !== id )

  setArry(remainIteam) 


}

        return (
                <>
                <Additem toGet={toSet}></Additem>
               <div className="container">
                       <div className="row">
                               {getArry?.map((element,index)=>{
                                       return <Card title={element.title} content={element.content} id={index} key={index} RemoveDataFromArry={RemoveDataFromArry}></Card>
                               })}
                       </div>
               </div>
                </>
        )
}

export default Display;
