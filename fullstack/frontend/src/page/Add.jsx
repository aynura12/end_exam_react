import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios"
const Add = () => {
  const [state,setState]=useState({
    name:"",
    age:""
  })
  const adddata=async()=>{
    if(!state.name||!state.age)return
    await axios.post("http://localhost:8080/flover",state)
  }
  const onsubmit=(data)=>{
    console.log(data);
    adddata()
  }
  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value}) 
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <div>
      <Helmet>
        <title>Add</title></Helmet>
        <form>
          <input
            {...register("name")}
            onChange={handleChange}
            value={state.name}
            name="name"
          />
          {errors.name?<span>{errors.name.message}</span>:<></>}
          <input
            type="number"
            {...register("age")}
            onChange={handleChange}
            value={state.age}
            name="age"
          />
            {errors.age?<span>{errors.age.message}</span>:<></>}
          <button type="submit"   onClick={handleSubmit(onsubmit)}>Add</button>
        </form>
      
    </div>
  );
};

export default Add;
