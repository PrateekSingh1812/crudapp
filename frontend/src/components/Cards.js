
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Details from '../pages/Details';
import toast from 'react-hot-toast';

const Cards = () => {

  const[procucts,setProducts] = useState([]);
  const navigation = useNavigate();

  const getAllData = async()=>{
      try {
        const getProdect = await fetch(
          `${process.env.REACT_APP_BASE_URL}/getAll`,
          {
            method:"GET",
            mode:"cors",
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        const res = await getProdect.json();
        setProducts(res?.data);
        

      } catch (error) {
        console.log(error)
      }
      
  }

  useEffect(()=>{
    getAllData()
  },[procucts],[])
  
  const deletApiCall = async(id)=>{
    try {
      const getProdect = await fetch(
        `${process.env.REACT_APP_BASE_URL}/deleteOne/${id}`,
        {
          method:"DELETE",
          mode:"cors",
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      const res = await getProdect.json();
      console.log(res?.message)

    } catch (error) {
      console.log(error)
    }
}


  const deletProduct = (_id) =>{
    deletApiCall(_id);
    toast.error("Deleted Successfully")
  }
  
  const detailPage= (_id)=>{
    console.log(_id)
    navigation("/detail",{state:{id:_id}})
  }

  const updateProduct=(_id,name,description)=>{
    console.log(_id);
    navigation("/updateProduct",{state:{id:_id,name:name,description:description}})
  }
  

  return (
    <div className='w-full  h-[100vh] flex flex-col gap-3 items-center pt-20'>
    {
     procucts.map((product)=>{
      return (
        <div className='w-[50%] flex justify-around items-center pt-3 pb-3'>
          <p>{product.name}</p>
          <div className='w-[50%] flex justify-evenly'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=>deletProduct(product._id)}>Delete</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>detailPage(product._id)}>Show Details</button>
            <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={()=>updateProduct(product._id,product.name,product.description)}>Update Product</button>
          </div>
        </div>
      )
     })
    }


    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>navigation('/addProduct')}>Add Product</button>

    </div>
  )
}

export default Cards