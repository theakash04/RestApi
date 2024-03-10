import React from 'react'

function MeditationParts() {
    const parts = [
        {
            title: "Focused Attention",
            description: "Focusing your attention is crucial in meditation to free your mind from stress and worry. You can focus on objects, images, mantras, or your breathing.",
        },
        {
            title: "Relaxed Breathing",
            description: "Deep, even-paced breathing using the diaphragm muscle helps slow breathing, increase oxygen intake, and reduce tension in shoulder, neck, and chest muscles.",
        },
        {
            title: "Quiet Setting",
            description: "A quiet environment is beneficial for beginners. As you advance, meditation can be practiced anywhere, even in high-stress situations.",
        },
        {
            title: "Comfortable Position",
            description: "Meditation can be done sitting, lying down, walking, or during other activities. Maintain good posture for optimal meditation.",
        },
        {
            title: "Open Attitude",
            description: "Allow thoughts to pass through your mind without judgment during meditation.",
        }
    ]

    const everydayWays = [
        {
            title: "Breathe Deeply",
            description: "Focus on deep breathing, a natural function suitable for beginners.",
        },
        {
            title: "Focus on Breathing",
            description: "Concentrate solely on your breath, feeling and listening to it as you inhale and exhale.",
        },
        {
            title: "Body Scan",
            description: "Scan each part of your body, becoming aware of sensations like pain, tension, warmth, or relaxation.",
        },
        {
            title: "Repeat a Mantra",
            description: "Create or choose a mantra to repeat, which can be religious or not, focusing your mind.",
        },
        {
            title: "Walk and Meditate",
            description: "Slow your pace, focusing on each movement of your legs or feet. Pay attention to the surroundings.",
        },
        {
            title: "Pray",
            description: "Prayer, spoken or written, is a widely used form of meditation found in many faith traditions.",
        },
        {
            title: "Read and Reflect",
            description: "Read poems or sacred texts, reflecting on their meanings, and consider discussing them with others.",
        },
        {
            title: "Focus Love and Kindness",
            description: "Meditate on feelings of love, compassion, and kindness toward others to enhance your sense of connection.",
        }
    ]
    return (
        <div className='dark:bg-white/10 bg-black/10 backdrop-filter backdrop-blur-md border border-white/10 p-5 rounded-lg '>
            <div>
                <div>
                    <h2 className='dark:text-white text-3xl font-bold'>MEDITATION</h2>
                    <p className='pl-5 pt-2 text-black/80 font-semibold dark:text-white/80'>Parts of meditation:</p>
                </div>
                {parts.map((item, key) => (
                    <div key={key} className='pl-10 pt-3'>
                        <p className='dark:text-white font-bold text-lg'>{item.title + " : "}</p>
                        <p className='pl-16 pb-5 dark:text-white/50 text-black/70 '>{item.description}</p>
                    </div>
                ))}

                <div>
                    <p className='text-xl pt-2 text-black/80 font-semibold dark:text-white/80'>Everyday ways to practice meditation :</p>
                </div>
                {everydayWays.map((item, key) => (
                    <div key={key} className='pl-2 pt-3 flex items-center'>
                        <p className='dark:text-white font-semibold text-lg text-black/90'>{item.title}</p>
                        <p className='px-2'>:</p>
                        <p className='pl-5 dark:text-white/50 text-black/70'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeditationParts
