import React from 'react'
import Cotainer from '../../../../Container/Cotainer'
import YogaCard from './YogaCard'
import { Yoga } from './Assets/Yoga'

function YogaFlow() {

    const Yogas = [
        {
            img: Yoga,
            title: "Balasana",
            desc: "Balasana (The Child’s Pose), is a restorative pose that is known for its calming, grounding, and relaxing effects. It gently stretches the lower back, hips, andthighs, while calming the mind and relieving stress."
        },
        {
            img: Yoga,
            title: "Balasana",
            desc: "Balasana (The Child’s Pose), is a restorative pose that is known for its calming, grounding, and relaxing effects. It gently stretches the lower back, hips, andthighs, while calming the mind and relieving stress."
        },
        {
            img: Yoga,
            title: "Balasana",
            desc: "Balasana (The Child’s Pose), is a restorative pose that is known for its calming, grounding, and relaxing effects. It gently stretches the lower back, hips, andthighs, while calming the mind and relieving stress."
        },
    ]

    return (
        <Cotainer className={"sm:py-10 pt-20"}>
            <div className='grid gap-3'>
                {Yogas.map((item, index) =>(
                    <div key={index} className='w-full'>
                        <YogaCard title={item.title} Description={item.desc} Img={item.img}/>
                    </div>
                ))}
            </div>
        </Cotainer>
    )
}

export default YogaFlow
