import React, { useEffect } from "react";
import { useState } from "react";
import {Helmet} from "react-helmet-async";
import axios from "axios";

const Home = () => {
 const[data,setData]=useState([])
 const datafunc=async()=>{
 const res=await axios.get("http://localhost:8080/flover")
 console.log((res.data));
 console.log("sd hv djh");
 }

 useEffect(()=>{
datafunc()
 },[])
 
  const deldata = async (id) => {
    await axios.delete(`hhttp://localhost:8080/flover/${id}`);
    datafunc();
  };
  const [sorted, setSorted] = useState({ sorted: "age", reversed: false });
  const sortedData = () => {
    setSorted({ sorted: "age", reversed: !sorted.reversed });
    const datacopy = [...data];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.age - a.age;
      } else {
        return a.age - b.age;
      }
    });
    setData(datacopy);
  };

  const [search, setSearch] = useState("");
  return (
    <div style={{width:"100%"}}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <button onClick={sortedData}>Sort is data</button>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      {data
        ?.filter((datas) => {
         return search.toLowerCase() === ""
            ? datas
            : datas.name.toLowerCase().includes(search);
        })
        
        .map(({ name, age, _id }) => {
          return (
            <div key={_id}>
              <h1>{name}</h1>
              <p>{age}</p>
              <button onClick={() => deldata(_id)}>delete</button>
            </div>
          );
        })}
        

       
       <div style={{width:"100%",height:300}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63486875.90133049!2d109.18999884846922!3d13.783009468426329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2s!4v1674885850669!5m2!1sen!2s"
       style={{border:0, width:"100%", height:450}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  );
};

export default Home;
