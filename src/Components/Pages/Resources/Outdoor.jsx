import React from "react";

function Outdoor() {
    const outdoorActivities = [
        {
            title: "Nature Walks/Hiking",
            description:
                "Spending time in nature, whether it's a leisurely walk through a local park or a more rigorous hike in the mountains, can have a calming effect on the mind. The fresh air, natural scenery, and gentle exercise can help reduce stress and anxiety.",
        },
        {
            title: "Cycling",
            description:
                "Cycling is not only a great form of exercise but also an excellent way to clear your mind and reduce anxiety. Explore bike paths, trails, or scenic routes in your area to enjoy the sights and sounds of nature while getting some physical activity.",
        },
        {
            title: "Gardening",
            description:
                "Spending time tending to a garden can be therapeutic and calming. Whether you have a small balcony garden or a larger plot of land, gardening allows you to connect with nature, focus on the present moment, and enjoy the satisfaction of nurturing living plants.",
        },
        {
            title: "Photography",
            description:
                "Taking up photography as a hobby can encourage you to explore new outdoor locations and appreciate the beauty of your surroundings. Whether you're capturing landscapes, wildlife, or everyday moments, photography can provide a creative outlet and a sense of accomplishment.",
        },
        {
            title: "Stargazing",
            description:
                "On clear nights, spend some time stargazing outdoors. Find a quiet spot away from city lights, lay down a blanket, and marvel at the beauty of the night sky. Observing the stars can be a calming and awe-inspiring experience that helps put things into perspective.",
        },
    ];

    return (
        <div className="dark:bg-white/10 bg-black/10 backdrop-filter backdrop-blur-md border border-white/10 p-5 rounded-lg ">
            <div>
                <h2 className='dark:text-white text-3xl font-bold'>Outdoor Activities</h2>
            </div>
            {outdoorActivities.map((item, key) => (
                <div key={key} className="pl-2 pt-5">
                    <p className='inline dark:text-white font-semibold text-lg text-black/90'>{item.title}</p>
                        <p className='px-2 inline'>:</p>
                        <p className='pl-5 dark:text-white/50 text-black/70'>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Outdoor;
