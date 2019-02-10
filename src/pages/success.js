import React from 'react'
import Helmet from 'react-helmet'



const Success = (props) => (
    <>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div >
            <section >
                <div >
                    <header >
                        <h1>Success!</h1>
                    </header>
                    <p>Thank you for contacting us!</p>
                </div>
            </section>
        </div>
    </>
)

export default Success