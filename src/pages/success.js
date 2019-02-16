import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const StyledSuccess = styled.div`
  padding-left:20px;
  max-width: 1000px;
  margin:auto;
  @media (max-width: 500px) {
      p{
          margin:0;
          padding:0;
      }
     header{
         padding:20px;
         text-align:center;
         
     }
    }
`

const Success = (props) => (
    <>
        <Helmet>
            <title>Thanks!</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <StyledSuccess >


            <header >
                <h1>I have received your request!</h1>
            </header>
            <p>Thank you for contacting me! I will get back to you as soon as possible 😃</p>
        </StyledSuccess>


    </>
)

export default Success