import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Profile() {
    return (
        <div className="">
            <div className="profile-box">
                <h2 className="text-center" style={{marginBottom: '5%'}}>JUST CALL ME <strong className='highlight'>LEONA</strong></h2>
                <div className="profile-quote">
                    <h5>"It doesn't matter how many times you fail or how hard you fall. Always get back up and keep moving forward."</h5>
                </div>
                <div className='about-text'>
                    <p>I'm a Peruvian Immigrant who came to the United States at the young age of 2. My parents, although neither poor or rich, wanted me to have more opportunities for success than I could ever find in Peru. Thus, they took the risk to leave family, belongings and a stable income behind to come to the United States and start anew. I ended up growing up in Louisville Kentucky, what I consider to be a quiet and humble city. Where as a low income immigrant, I was only able to go to lower end public schools. Which after looking back, didn't exactly help too much in my overall development at an early age.</p>
                    <p>As a low-income immigrant, college was a distant dream. Something that even I could only imagine was a place only the well off and truly intelligent could go. I wasn't bad in school but I didn't consider myself smart enough to go any big name school. Let alone be able to reasonably afford local ones. That was until I met my teacher, mentor and best friend, Mr. Baker of the Ivy Plus program. It was thanks to the Ivy Plus Program at Fern Creek High School that I discovered what I was truly capable of. With his encouragement and confidence, I worked hard to prove myself more than capable to stand alongside the people who had more opportunities that I did. That hard work bore fruit, as I was accepted to the Ivy League School, Dartmouth College. Where I studied for 5 years and graduated with a B.A. in Computer Science and Digital Arts.</p>
                    <p>My experiences from my life and the people I've met have influenced my outlook on life and myself. I have grown immensely since highschool and college. My curiosity larger than it has ever been before. Forming for myself a simple desire. <strong className='highlight'>To make people smile</strong>. As simplistic as this motivation is, it is what fuels my work in the Digital arts. It is a desire that has lead me to the opportunities that have developed me as a person. A desire that also doubles as a promise to my late mother. Who since I was little, always assured me that I was capable of doing anything I wanted. So far, she's been right.</p>
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
        <div id='about'>
            <div className="short-profile greeting">
                <div className='skills-showcase title'>
                    <h1 className={`${fadeState ? "fade-out skill-banner" : "fade-in skill-banner"}`} >
                        <strong>{skill}</strong>
                    </h1>
                </div>
                <div className='container-fluid'>
                    <div className='row' style={{height: 'auto'}}>
                        <div className='col-xl-auto'>
                            <h3 className="" style={{height: '30px'}}>JUST CALL ME <strong>LEONA</strong></h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p>I'm a Peruvian Immigrant that moved to the United States when I was only 2 years old. I grew up in Louisville Kentucky, doing all of my primary and secondary schooling at public schools. With the help of the Ivy Plus program at Fern Creek High School, I scored top of the class and was accepted to Dartmouth College. I studied my undergrad up at Dartmouth College where I got my B.A. in Computer Science and Digital Arts. I'm a curious person and always doing a lot of different things at once. In my professional career, I'm currently a freelance artist and developer and a online educator on the side.</p>
                    <p>That's who I am in a nutshell. Wanna know more about me? Go to my <Link className='text-link' href="/about" scroll={false}>About</Link> page.</p>
                    <p>Wanna see the things I've been working on? <Link className='text-link' href="#work" scroll={false}>Click here!</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
export { Profile, ShortProfile }