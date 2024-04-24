import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} = useSelector(state=>state.user)
  return (
    <DefaultLayout>
        Dashboard
    </DefaultLayout>
  )
}

export default Dashboard
