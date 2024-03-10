import React from 'react'

function ResourceCard() {
    const Helplines = [
        {
            title: "Vandrevala Foundation",
            about: "Cyrus & Priya Vandrevala Foundation is a non-profit organisation that aims to provide significant funding and aid contributions for those suffering from mental health problems and illnesses in India. A 24-7 Mental Health helpline to aid patients, their relatives and others struggling with mental health problems. The Helpline currently operates Pan India. Advice and assistance is available in English, Hindi and all major Indian regional languages.",
            number: "9999 666 555"
        },
        {
            title: "iCALL",
            about: "iCALL is a psychosocial helpline for individuals in emotional and psychological distress. They provide professional and free counseling through technology assisted mediums such as telephone, email and chat to anyone in need of emotional support, irrespective of age, gender, sexual orientation or race, and transcending geographical distances while ensuring confidentiality.",
            number: "+91-9152987821"
        },
        {
            title: "Connecting Trust",
            about: "Connecting NGO is a non-judgemental, non-advisory, confidential and anonymous space for those feeling low, distressed and/or suicidal.",
            number: "+91-9922001122"
        },
        {
            title: "Mann Talks",
            about: "A Shantital Shanghvi Foundation initiative, Mann Talks focuses on empowering individuals to take charge of their mental health. A team of trained mental health professionals offers an empathetic and non-judgmental environment where one can share their thoughts, emotions, and experiences freely. They guide individuals in making informed decisions about their mental health.",
            number: "+91-8686139139"
        }
    ];

    return (
        <div className='dark:bg-white/10 bg-black/10 backdrop-filter backdrop-blur-md border border-white/10 px-5 pt-5 rounded-lg'>
            {Helplines.map((item, key)=>(
                <div key={key} className=''> 
                        <p className='dark:text-white font-bold text-xl pb-1'>{item.title}</p>
                        <p className='dark:text-white text-lg pb-1 text-black/70'>{item.about}</p>
                        <div className='flex gap-2'>
                        <label>Contact :</label>
                        <p className='text-blue-700 hover:underline cursor-pointer'>{item.number}</p>
                        </div>
                        <div className='border border-1 mb-5 mt-2 border-black/40 dark:border-white/50' />
                </div>
            ))}
        </div>
    )
}

export default ResourceCard
