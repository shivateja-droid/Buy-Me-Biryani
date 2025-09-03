import PaymentPage from '@/Components/paymentpage'
import React from 'react'

const Username = ({params}) => {
  return (
    <PaymentPage username={params.username} />
  )
}

export default Username