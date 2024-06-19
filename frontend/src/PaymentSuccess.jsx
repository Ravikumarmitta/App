
import { Box, Heading, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {useSearchParams} from "react-router-dom"

const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    


  return (
    <Box>
    <VStack h="100vh" justifyContent={"center"}>

        <Heading textTranform={"uppercase"}> Order Successfull</Heading>


        <Text>
             Reference:{referenceNum}
          

        </Text>
        
        
        
        </VStack>    

    </Box>
  )
}

export default PaymentSuccess