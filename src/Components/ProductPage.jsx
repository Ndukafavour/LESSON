// import React, { useEffect, useState } from 'react'
// import "./ProductPageStyle.css"

// const ProductPage = () => {
//     const [data, setdata] = useState()
//     const [pop, setPop] = useState(false)
//     const [dInfo, setDInfo] = useState()

//     const Url = "https://fakestoreapi.com/products"
//     const getAllProducts = () => {
//       fetch(Url)
//       .then((res) => res.json())
//       .then((products) => setdata(products))
//       .catch((err) => console.log(err))
//     }
    
//     const getOneProducts = (id) => {
//      const UrlOne = `https://fakestoreapi.com/products/${id}`
//       fetch(UrlOne)
//       .then((res) => res.json())
//       .then((products) => setDInfo(products))
//       .catch((err) => console.log(err))
//     }

//     useEffect(()=>{
//         getAllProducts()
//     },[])

//     console.log(dInfo)

//   return (
//     <div className='CardContainer'>
//         <div className='Cardwrapper'>
//         {
//             data?.map((data)=>(
//                 <div className='Card' key={data.id} onClick={()=> {setPop(true); getOneProducts(data.id)}}>
//                 <div className='TitleImag'>
//                   <img src={data.image} alt="Title Image" />
//                 </div>
//                 <div className='CardTextWrapper'>
//                   <h6>{data.title}</h6>
//                   <p>N{data.price}</p>
  
//                     <span>Add Cart</span>
  
//                 </div>
//               </div>
//             ))
//         }
//     </div>

//         {
//             pop?
//             <div className='PopBody'>
//             <div className='PopCard'>
//                 <div className='BigImage'>
//                     <img src={dInfo?.image} alt="" />
//                 </div>
//                 <div className='BigInfo'>
//                     <div className='close' onClick={()=>setPop(false)}>X</div>
//                     <h1>{dInfo?.title}</h1>
//                     <span>{dInfo?.description} </span>
//                     <p>{dInfo?.price}</p>
//                     <button>Add Cart</button>
//                 </div>
//             </div>
//         </div>:null
//         }
// </div>
//   )
// }

// export default ProductPage