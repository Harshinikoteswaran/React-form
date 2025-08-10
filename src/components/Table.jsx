  import React from 'react'

const Table = ({data,handleEdit,handleDelete}) => {

  return (
    <>
      <table className='w-full  rounded mt-10 text-center'>
        <thead>
           <tr className='bg-gray-100  '>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'colSpan={2}>Actions</th>
            </tr> 
        </thead>
        <tbody>
       {
        data.map((item,idx)=>{
          return(
            <tr key={idx}>
              <td className='border p-2'>{item.name}</td>
              <td className='border p-2'>{item.email}</td>
              <td className='border p-2 '>
                <button className='bg-yellow-500 text-white px-2 py-1 mr-5 rounded cursor-pointer'onClick={() => handleEdit(idx)}>Edit</button>
                <button className='bg-red-500 text-white px-2 py-1 ml-5 rounded cursor-pointer' onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          )
        })
       }
        </tbody>
      </table>
    </>
  )
}

export default Table
