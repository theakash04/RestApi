import React from 'react'
import Cotainer from '../../Container/Cotainer'
import Helpline from './Helpline'
import MeditationParts from './MeditationParts'
import Outdoor from './Outdoor'

function Resource() {
    return (
        <Cotainer className={"flex w-full justify-center mt-10 mx-3 sm:mt-0 flex-col gap-4"}>
            <Helpline />
            <MeditationParts />
            <Outdoor />
        </Cotainer>
    )
}

export default Resource
