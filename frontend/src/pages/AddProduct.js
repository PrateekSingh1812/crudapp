import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const addProduct = async(data)=>{
        try {
            const getProdect = await fetch(
                `${process.env.REACT_APP_BASE_URL}/create`,
                {
                  method:"POST",
                  mode:"cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body:JSON.stringify({...data})
                }
              );
    
        } catch (error) {
            console.log(error)
        }
  }

  const onSubmit = async(data) => {
        addProduct(data);
        navigate('/')
        toast.success("Added Successfully")
  }

  return (
    <div className="w-full h-[100vh]  flex justify-center">
      <form className="flex flex-col gap-4 items-center pt-20" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name :
          <input className="ml-10 w-50 bg-slate-300 p-2 rounded-md" id="name" {...register("name")} />
        </label>
        <label htmlFor="name">
          Description :
          <textarea className="ml-10 w-60 bg-slate-300 p-2 rounded-md" rows="3" id="name" {...register('description')} />
        </label>

        <input  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
