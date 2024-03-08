import React from 'react'
import { Link } from 'react-router-dom'
import Cotainer from '../../Container/Cotainer'
import ActivityCard from './ActivityComponent/ActivityCard'
import '../../PlaceHolder/Pholder.css'


function Activites() {

    return (
        <Cotainer className={"sm:*:pl-40 px-4 pt-24"}>
            <div className='grid sm:grid-cols-2 gap-4'>
                <Link to={'/activites/calm-mind'}>
                    <ActivityCard
                        className={'card-animation'}
                        title={"Calm Mind"}
                        desc={"Breathing Exercises and Relaxation"} />
                </Link>
                
                <Link to={"/activites/harmony-haven"}>
                    <ActivityCard
                        className={'card-animation'}
                        title={"Harmony Haven"}
                        desc={"Serene Music for Mind Relaxation"} />
                </Link>

                <Link to={"/activites/yoga-flow"}>
                    <ActivityCard
                        className={'card-animation'}
                        title={"Yoga Flow"}
                        desc={"Discover inner peace with yoga"} />
                </Link>
                
                <Link to={"/activites/book-recommendations"}>
                    <ActivityCard
                            className={'card-animation'}
                            title={"Book Recommendations"}
                            desc={"Dive into calm worlds with curated book recommendations for all tastes"} />
                </Link>
            </div>
        </Cotainer>
    )
}

export default Activites
