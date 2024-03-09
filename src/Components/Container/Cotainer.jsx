import React from 'react'

function Cotainer({children, className}) {
    return (
        <div className={`py-10 sm:pl-32 sm:pr-3 ${className}  w-full h-full`}>
            {children}
        </div>
    )
}

export default Cotainer
