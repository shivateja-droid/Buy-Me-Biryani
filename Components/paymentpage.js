"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { initiate, fetchpayments, fetchuser } from '@/actions/useractions'
import Script from 'next/script'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const decodedUsername = decodeURIComponent(username);
    const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });
    const [currentUser, setCurrentUser] = useState({});
    const [Payments, setPayments] = useState([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const getdata = async () => {
        let u = await fetchuser(decodedUsername)
        if (!u) {
            console.error("User not found")
            return;
        }
        setCurrentUser(u)
        let dbpayments = await fetchpayments(decodedUsername)
        setPayments(dbpayments)
    }

    useEffect(() => {
        getdata()
        document.title = "Your Page - Buy Me Biryani";
    }, [])

    useEffect(() => {
        if (searchParams.get('paymentdone') === 'true') {
            toast('Thanks for your donation!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            router.push(`/${decodedUsername}`);
        }
    }, [searchParams, router]);

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    };

    const pay = async (amount) => {
        // Get the order Id 
        let a = await initiate(amount, decodedUsername, paymentform)
        let orderId = a.id
        var options = {
            "key": "rzp_test_RBsN578m9ona4y", // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Buy Me Biryani", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const isPayDisabled = paymentform.amount.length < 1 || paymentform.name.length < 3;

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4 overflow-y-scroll scrollbar-hide'>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className='w-full relative flex justify-center items-center'>
                <img src={currentUser.cp} alt="" className="w-full h-auto object-cover" />
                <div className='absolute left-1/2' style={{ top: '100%', transform: 'translate(-50%, -50%)' }}>
                    <img width={100} className="max-sm:w-[50px] rounded-full border-4 border-white shadow-lg" src={currentUser.pp} alt="" style={{
                        display: 'block',
                        height: 'auto',
                        maxWidth: '100px',
                    }}
                    />
                </div>
            </div>
            <div className='mb-4 mt-10 flex flex-col items-center justify-center gap-2 text-center'>
                <p>@{decodedUsername}</p>
                <p>Creating weird internet videos and films</p>
                <p>
                    {Payments.length} supporters | ₹{Payments.reduce((acc, payment) => acc + payment.amount, 0)} raised
                </p>
            </div>
            <div className='flex max-md:flex-col gap-4 mt-4 mb-10 w-[90%]'>
                <div className='container2 h-96 w-1/2 max-md:w-full bg-slate-600 p-5'>
                    <p className='text-lg font-semibold mb-10'>Make A Payment</p>
                    <input onChange={handleChange} value={paymentform.name} name='name' className='mb-4 rounded-md h-10 w-full text-black border-none' type="text" placeholder='Name' />
                    <input onChange={handleChange} value={paymentform.message} name='message' className='mb-4 rounded-md h-10 w-full text-black border-none' type="text" placeholder='Message' />
                    <input onChange={handleChange} value={paymentform.amount} name='amount' className='mb-4 rounded-md h-10 text-black w-full border-none' type="text" placeholder='Amount' />
                    <div className='flex justify-center '>
                        <button
                            onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                            disabled={isPayDisabled}
                            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 ${isPayDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center gap-2">
                                Pay
                            </span>
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={() => pay(1000)} className='border-2 border-black rounded-lg p-2 flex justify-center items-center hover:bg-slate-800 h-10 bg-slate-700' >pay ₹10</button>
                        <button onClick={() => pay(2000)} className='border-2 border-black rounded-lg p-2 flex justify-center items-center hover:bg-slate-800 h-10 bg-slate-700' >pay ₹20</button>
                        <button onClick={() => pay(3000)} className='border-2 border-black rounded-lg p-2 flex justify-center items-center hover:bg-slate-800 h-10 bg-slate-700' >pay ₹30</button>
                    </div>
                </div>
                <div id='supporters' className='container1 h-96 w-1/2 max-md:w-full bg-slate-600 p-5 overflow-y-scroll scrollbar-hide'>
                    <p className='text-lg font-semibold mb-5'>Supporters</p>
                    {Payments.length === 0 && <p>No supporters yet</p>}
                    {Payments.map((p, i) => (
                        <div key={i} className='flex items-center mb-2 gap-2'><img width={50} src="profile.svg" alt="" />
                            <p>{p.name} donated <span className='font-semibold'> ₹{p.amount}</span> with Message <span className='font-semibold'> "{p.message}"</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaymentPage