import React from 'react'
import { Helmet } from 'react-helmet-async'

function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>Contact Me</h1>;
        </div>
    )
}

export default Contact
