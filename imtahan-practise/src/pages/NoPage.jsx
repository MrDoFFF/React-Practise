import React from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {
    return (
        <div>
            <Helmet>
                <title>404</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1>Not found page</h1>
        </div>
    )
}

export default NoPage
