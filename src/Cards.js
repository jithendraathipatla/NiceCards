import React,{useState, useEffect} from 'react';
import axios from "axios";
import "./card.css";


const Cards = () => {
const [state, setstate] = useState([])
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_end=20').then((res)=>{
          setstate(res.data);
       }).catch((e)=>{
           console.log(e);
       })

    }, []);

      
    return (
        console.log(state),
        <div>
            <ul>
               {state.map((item)=>{
                   return (
                       <div>
                       <li><img src={item.thumbnailUrl} alt="image"/></li>
                      
                       </div>
                   )
               })}
            </ul>
        </div>
    );
};

export default Cards;