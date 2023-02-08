import { Box, Container, Image } from '@chakra-ui/react'
import logo from '../assets/logo1.png'
import { motion } from "framer-motion"
import Typed from 'react-typed'
import '../styles/loading.css'
import React from 'react'

const Loading = () => {
  return (
    <Container h={'100vh'} bgColor={'black'} maxW={'100vw'}>
            <Box py={['8rem','2rem']} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                 <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    >
                <Image w={'50rem'} src={logo}></Image>
                </motion.div>
                <Box color={'white'}  fontSize={['4xl','5xl']} transform={['','translateY(-10rem)']} textTransform={'capitalize'} className={'loading_wrapper'}>
                <Typed
                strings={["Coming Soon..."]}
                typeSpeed={100}
                backSpeed={100}
                loop
                >

                </Typed>
                 </Box>
            </Box>
    </Container>
  )
}

export default Loading