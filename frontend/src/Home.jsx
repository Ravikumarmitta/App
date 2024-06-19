import React from 'react'
import {Box,Stack} from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'
import './Home.css'

const Home = () => {

    const checkoutHandler =  async(amount)=>{

        const {data :{key}} = await axios.get("http://www.localhost:5000/api/getkey")

        const { data:{order}} = await axios.post("http://localhost:5000/api/checkout",{
            amount
        })
        const options = {
            key, // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "6 pack programmer",
            "description": "Tutorial of Razorpay",
            "image": "https://github.com/GBALU123/36SBMS_PROJECTS.git",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:5000/api/paymentverification",
            "prefill": {
                "name": "Mitta Ravikumar",
                "email": "ravikumarmitta6573@gmail.com",
                "contact": "6300294523"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
            razor.open();

    }

  return (
    <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
            

<Card amount={5000} img={"https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg"} checkoutHandler={checkoutHandler} />

<Card amount={7000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

</Stack>
    </Box>
  )
}

export default Home
