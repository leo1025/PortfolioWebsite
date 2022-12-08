import SkillBar from "./SkillBar";

function Skills() {
    const proSkills = [
        {name: "Project Management", value: 90},
        {name: "Time Management", value: 90},
        {name: "Education", value: 90},
        {name: "Film and Animation", value: 90},
        {name: "Software Dev", value: 80},
        {name: "Full-Stack Dev", value: 70},
        {name: "Character Design", value: 60},
        {name: "Game Design", value: 40},
     ];

     const techSkills = [
        {name: "Python", value: 90},
        {name: "HTML", value: 90},
        {name: "JS", value: 80},
        {name: "ReactJS", value: 80},
        {name: "NextJS", value: 80},
        {name: "EJS", value: 80},
        {name: "C#", value: 80},
        {name: "CSS", value: 70},
        {name: "MongoDB", value: 60},
        {name: "C++", value: 60},
        {name: "MySQL", value: 50},
        {name: "Java", value: 40},
     ];

     const otherSkills = [
        {name: "Maya", value: 90},
        {name: "Blender", value: 90},
        {name: "VS Code", value: 90},
        {name: "Substance Painter", value: 90},
        {name: "Clip Studio Paint", value: 80},
        {name: "Unity", value: 80},
        {name: "DaVinci Resolve", value: 60},
        {name: "OpenToonz", value: 50},
        {name: "Unreal Engine", value: 50},
        {name: "Ableton Live", value: 40},
     ];

    return (
        <div className="alt-resume py-3 px-3">
            <h1 className="fs-1 title profile-quote">Skills</h1>
            <div className="row m-auto pb-5">
                <h4 className="pt-5 title fs-2">Professional Skills</h4>
                <hr />
                {proSkills.map((item, idx) => (
                    <SkillBar name={item.name} value={item.value} />
                ))}
            </div>
            <div className="row m-auto pb-5">
                <h4 className="pt-5 title fs-2">Tech Skills</h4>
                <hr />
                {techSkills.map((item, idx) => (
                    <SkillBar name={item.name} value={item.value} />
                ))}
            </div>
            <div className="row m-auto pb-5">
                <h4 className="pt-5 title fs-2">Software Skills</h4>
                <hr />
                {otherSkills.map((item, idx) => (
                    <SkillBar name={item.name} value={item.value} />
                ))}
            </div>
        </div>
    )
}

export default Skills