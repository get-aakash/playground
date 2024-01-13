import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import InputForm from '../components/InputForm'


const Dashboard = () => {

    const handleOnDelete = (id)=>{
        console.log(id)
    }
  return (
    <DefaultLayout>
        <InputForm handleOnDelete={handleOnDelete} />
        
    </DefaultLayout>
  )
}

export default Dashboard
