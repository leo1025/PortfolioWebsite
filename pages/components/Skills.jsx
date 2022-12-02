import SkillBar from "./SkillBar";

function Skills() {
    const proSkills = [
        {name: "Character Design", value: 70},
        {name: "Project Management", value: 90},
        {name: "Time Management", value: 90},
        {name: "Full-Stack Development", value: 60},
        {name: "Software Development", value: 70},
        {name: "Game Design", value: 40},
     ];

     const techSkills = [
        {name: "HTML", value: 70},
        {name: "CSS", value: 90},
        {name: "JS", value: 90},
        {name: "ReactJS", value: 60},
        {name: "NextJS", value: 70},
        {name: "MySQL", value: 40},
        {name: "MongoDB", value: 40},
        {name: "MySQL", value: 40},
     ];

     const otherSkills = [
        {name: "Character Design", value: 70},
        {name: "Project Management", value: 90},
        {name: "Time Management", value: 90},
        {name: "Full-Stack Development", value: 60},
        {name: "Software Development", value: 70},
        {name: "Game Design", value: 40},
     ];

    return (
        <div className="alt-resume py-3 px-5">
            <h1 className="fs-1 title profile-quote">Skills</h1>
            <div className="row m-auto">
                <h4 className="p-5">Professional Skills</h4>
                {proSkills.map((item, idx) => (
                    <SkillBar name={item.name} value={item.value} />
                ))}
            </div>
        </div>
    )
}

export default Skills