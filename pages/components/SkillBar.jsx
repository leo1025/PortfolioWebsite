import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

function SkillBar(props) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const { name, value } = props;

    const[fill, setFill] = useState(0);

    const containerStyles = {
        width: '100%',
        backgroundColor: "rgb(27, 27, 27)",
        borderRadius: '20px'
    }

    const fillerStyles = {
        width: `${fill}%`,
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: "#1a7b24",
        borderRadius: '20px',
        transition: 'width 1s ease-in-out',
        transitionDelay: '1s'
    }

    useEffect(() => {
        if(inView) {
            setFill(value);
        } else {
            setFill(0);
        }
    });

    return (
        <div className="col-md-6">
            <div className="row">
                <div className="col-5 text-start"><p>{name}</p></div>
                <div className="col-7 text-start">
                    <div style={containerStyles}>
                        <div ref={ref} style={fillerStyles}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar