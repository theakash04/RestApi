import React from 'react'
import { MainDataDisplay } from '../../index'
import Cotainer from '../../Container/Cotainer'

function HomePage() {
    return (
        <Cotainer className={'z-1'}>
            <MainDataDisplay />
        </Cotainer>
    )
}

export default HomePage
