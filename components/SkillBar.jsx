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
        paddingTop: '12px',
        paddingBottom: '12px',
        backgroundColor: "#4acf38",
        borderRadius: '10px',
        transition: 'width 1s ease-in-out',
        transitionDelay: '0.5s'
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
            <div className="row mt-5">
                <div className="text-start">
                    <p className="fs-5">{name}</p>
                    <div style={containerStyles}>
                        <div ref={ref} style={fillerStyles}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar