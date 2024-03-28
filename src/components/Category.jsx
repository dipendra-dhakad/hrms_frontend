// import React from 'react'
//   const data = [
//     {
//       "title": "Sunset",
//       "image_url": "https://example.com/sunset.jpg"
//     },
//     {
//       "title": "Cityscape",
//       "image_url": "https://example.com/cityscape.jpg"
//     },
//     {
//       "title": "Beach",
//       "image_url": "https://example.com/beach.jpg"
//     },
//     {
//       "title": "Waterfall",
//       "image_url": "https://example.com/waterfall.jpg"
//     },
//     {
//       "title": "Cabin",
//       "image_url": "https://example.com/cabin.jpg"
//     },
//     {
//       "title": "Sunflowers",
//       "image_url": "https://example.com/sunflowers.jpg"
//     },
//     {
//       "title": "Starry",
//       "image_url": "https://example.com/starry.jpg"
//     },
//     {
//       "title": "Rural",
//       "image_url": "https://example.com/rural.jpg"
//     },
//     {
//       "title": "Bridge",
//       "image_url": "https://example.com/bridge.jpg"
//     },
//     {
//       "title": "Desert",
//       "image_url": "https://example.com/desert.jpg"
//     },
//     {
//       "title": "Autumn",
//       "image_url": "https://example.com/autumn.jpg"
//     },
//     {
//       "title": "Sailboats",
//       "image_url": "https://example.com/sailboats.jpg"
//     },
//     {
//       "title": "Moonlit",
//       "image_url": "https://example.com/moonlit.jpg"
//     },
//     {
//       "title": "Aurora",
//       "image_url": "https://example.com/aurora.jpg"
//     },
//     {
//       "title": "Lavender",
//       "image_url": "https://example.com/lavender.jpg"
//     },
//     {
//       "title": "Misty",
//       "image_url": "https://example.com/misty.jpg"
//     },
//     {
//       "title": "Lighthouse",
//       "image_url": "https://example.com/lighthouse.jpg"
//     },
//     {
//       "title": "Balloons",
//       "image_url": "https://example.com/balloons.jpg"
//     },
//     {
//       "title": "Lake",
//       "image_url": "https://example.com/lake.jpg"
//     },
//     {
//       "title": "Ruins",
//       "image_url": "https://example.com/ruins.jpg"
//     },
//     {
//       "title": "Harbor",
//       "image_url": "https://example.com/harbor.jpg"
//     }
//   ]
  
// export const Category = () => {

//   return (
//     <div >
//    <div className='grid grid-cols-5 '>
// {
//     data.map((item,index)=>{
//         return(
//             <div>
//   <div>
    
//   <img src={item.image} alt="" />
//   </div>
//           <h1>{item.title}</h1>
//             </div>
//         )
//     })
// }
//    </div>
//     </div>
//   )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';
const data = [
  {
    "title": "Company-Profile",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "My-Profile",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Beach",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Waterfall",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Cabin",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Sunflowers",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Starry",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Rural",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Bridge",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Desert",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Autumn",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Sailboats",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Moonlit",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Aurora",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Lavender",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Misty",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Lighthouse",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Balloons",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Lake",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Ruins",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  },
  {
    "title": "Harbor",
    "image_url": "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
  }
];

export const Category = () => {
  return (



<div className="container mx-auto p-1 w-[49%]">
  <div className="grid grid-cols-4 gap-3">
    {data.map((item, index) => (
      <NavLink key={index} to={`/${item.title.toLowerCase()}/overview`} className="rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <div className="rounded-lg overflow-hidden">
          <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4 bg-white rounded-b-lg">
            <h1 className="text-lg font-semibold text-center mb-2">{item.title}</h1>
          </div>
        </div>
      </NavLink>
    ))}
  </div>
</div>

  );
};

