import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const location =useLocation()


  const updateProduct = async(data)=>{
        try {
            const getProdect = await fetch(
                `${process.env.REACT_APP_BASE_URL}/update/${location.state.id}`,
                {
                  method:"PUt",
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
    updateProduct(data);
        navigate('/')
        toast.success("Updated Successfully")

  }

  return (
    <div className="w-full h-[100vh]  flex justify-center">
      <form className="flex flex-col gap-4 items-center pt-20" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">
          Id:
          <input className="ml-10 w-50 bg-slate-300 p-2 rounded-md" id="id" {...register("id")} value={location.state.id}/>
        </label>
        <label htmlFor="name">
          Name:
          <input className="ml-10 w-50 bg-slate-300 p-2 rounded-md" id="name" defaultValue={location.state.name} {...register("name")} />
        </label>
        <label htmlFor="name">
          Description:
          <textarea className="ml-10 w-60 bg-slate-300 p-2 rounded-md" id="name" rows="11" defaultValue={location.state.description} {...register('description')} />
        </label>

        <input className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' type="submit" />
      </form>
    </div>
  );
};

export default UpdateProduct;
