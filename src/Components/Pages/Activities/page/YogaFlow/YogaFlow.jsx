import React from 'react'
import Cotainer from '../../../../Container/Cotainer'
import YogaCard from './YogaCard'
import { Yoga } from './Assets/Yoga'

function YogaFlow() {

    const Yogas = [
        {
            img: Yoga,
            title: "Balasana",
            desc: "Balasana, is a restorative pose that is known for its calming, grounding, and relaxing effects. It gently stretches the lower back, hips, andthighs, while calming the mind and relieving stress."
        },
        {
            img: Yoga,
            title: "Savasana",
            desc: "Savasana, Savasana is a relaxation pose that allows the body and mind to completely relax and let go of tension. It helps to calm the nervous system and promote a sense of deep relaxation and peace."
        },
        {
            img: Yoga,
            title: "Uttanasana",
            desc: "Uttanasana, also known as Standing Forward Fold or Bend, is a Hatha yoga pose that stretches the entire back body, including the soles of the feet and up the backs of the legs. It improves posture, extends the spine, and stretches tight hamstrings. The pose can be adjusted to suit the fitness level and provides a deep stretch along the backside of the body while calming the mind."
        },
        {
            img: Yoga,
            title: "Padmasana",
            desc: "Padmasana is a cross-legged yoga posture that is a continuation of Sukhasana, with the hips flexing, abducting, and externally rotating. The feet are brought up onto the thighs, and a bandha is formed where the lower legs cross.2 It is an advanced hip-opening pose that helps deepen meditation by calming the mind and alleviating various physical ailments. A regular practice of this posture aids in overall blossoming of the practitioner."
        }
    ]

    return (
        <Cotainer className={"sm:py-10  pt-20"}>
            <div className='grid gap-5'>
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
