import React from 'react'
import PageLoader from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <PageLoader
                type='ThreeDots'
                color='coral'
                height={100}
                width={100}
                timeout={3000}
             />
        </>
    )
}

export default Loader
