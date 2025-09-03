import PaymentPage from '@/Components/paymentpage'
import React from 'react'
import { notFound } from 'next/navigation'

const Username = async ({params}) => {
   const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username })
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