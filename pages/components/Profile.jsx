import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-box">
                <h2 className="text-center greeting" style={{height: '50px'}}>JUST CALL ME <strong>LEONA</strong></h2>
                <div className="profile-quote">
                    <h5>"It doesn't matter how many times you fail or how hard you fall. Always get back up and keep moving forward."</h5>
                </div>
                <div className='text-start'>
                    <p>I'm a Peruvian Immigrant who came to the United States at a young age. Raised in Louisville Kentucky. As a low-income immigrant, college was at the time a distant dream. It was thanks to the Ivy Plus Program at Fern Creek High School that I proved myself and went to Dartmouth College. Where I studied for 5 years and graduated with a B.A. in Computer Science and Digital Arts.</p>
                    <p>My experiences from my life and the people I've met have formed a simple desire. <strong>To make people smile</strong>. As simplistic as this motivation is, it is what fuels my work in Computer Science and Digital arts.</p>
                </div>
            </div>
        </div>
    )
}

function ShortProfile() {
    const skills = [
        "COMPUTER SCIENCE",
        "GAME DEVELOPMENT",
        "DIGITAL ILLUSTRATION",
        "CHARACTER DESIGN",
        "TEACHING AND EDUCATION",
        "FILM AND ANIMATION",
        "3D MODELING",
        "AR/VR DESIGN"
    ]

    const [idx, setIdx] = useState(0);
    const [skill, setSkill] = useState(skills[idx]);
    const [fadeState, setFadeState] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if(fadeState) {
                setIdx((idx + 1) % skills.length);
                setSkill(skills[idx]);
            }
            setFadeState(!fadeState);
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div style={{paddingTop: '2%'}} id='about'>
            <div className="short-profile greeting">
                <div className='skills-showcase title'>
                    <h1
                        style={{fontSize: '4.25vw'}}
                        className={`${fadeState ? "fade-out" : "fade-in"}`}
                    >
                        <strong className='skills-fade text-pad-left'>{skill}</strong>
                    </h1>
                </div>
                <div className='container-fluid'>
                    <div className='row' style={{height: 'auto'}}>
                        <div className='col-xl-auto'>
                            <h3 className="" style={{height: '30px'}}>JUST CALL ME <strong>LEONA</strong></h3>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <p>I'm a Peruvian Immigrant that moved to the United States at a young age. Where I studied and grew up in Louisville Kentucky. I studied my undergrad up at Dartmouth College where I got my B.A. in Computer Science and Digital Arts. I'm a curious person and always doing a lot of random things. In my professional career, I'm currently an freelance artist and developer and a online educator on the side. Still searching for a professional position to get my foot in the door.</p>
                    <p>Wanna know more? Go to my <Link className='text-link' href="/about" scroll={false}>About</Link> page.</p>
                    <p>Wanna see the things I've been working on? <Link className='text-link' href="#work" scroll={false}>Click here!</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
export { Profile, ShortProfile }