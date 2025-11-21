import React, { useContext } from 'react'
import { FormContext } from '../Components/FormContext'

const KanbanBoard = () => {
  const {formData}=useContext(FormContext);

  return (
    <div className='flex p-5'>
      <div className='w-[230px] bg-amber-700 p-5 ml-5 rounded-2xl'>
      <p>Company Name:{formData.companyName}</p>
      <p>Role Title:{formData.RoleTitle}</p>
      <p>Link:{formData.ApplicationLink}</p>
      <p>Status:{formData.status}</p>
      </div>
    </div>
  )
}

export default KanbanBoard
