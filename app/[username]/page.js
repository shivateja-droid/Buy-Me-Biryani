import PaymentPage from '@/Components/paymentpage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/user'

const Username = async ({params}) => {
   const checkUser = async () => {
    await connectDb()
    const decodedUsername = decodeURIComponent(params.username)
    let u = await User.findOne({ username: decodedUsername })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()


  return (
    <PaymentPage username={params.username} />
  )
}

export default Username