import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import InputForm from '../components/InputForm'
import DisplayTable from '../components/DisplayTable'

const Dashboard = () => {
  return (
    <DefaultLayout>
        <InputForm />
        <DisplayTable />
    </DefaultLayout>
  )
}

export default Dashboard
