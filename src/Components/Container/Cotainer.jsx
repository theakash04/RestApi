import React from 'react'

function Cotainer({children, className}) {
    return (
        <div className={`py-10 sm:mx-28  ${className}  w-full h-full`}>
            {children}
        </div>
    )
}

export default Cotainer
