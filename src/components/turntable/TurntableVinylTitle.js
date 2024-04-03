import { useEffect, useState } from "react";

const TurntableVinylTitle = ({vinylTitle}) => {

    const [textLength, setTextLength] = useState(0);
    const MAX_TEXT_LENGTH = 241.33;

    useEffect(() => {
        const textPathElement = document.getElementById('textPath');
        if (textPathElement) {
            const computedTextLength = textPathElement.getComputedTextLength();
            setTextLength(Math.min(computedTextLength, MAX_TEXT_LENGTH));
        }
    }, [vinylTitle]);

    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="t_vinyl_title">
            <path id="circlePath" fill="none" d="
                M 10, 50
                a 40,40 0 1,1 80,0
                a 40,40 0 1,1 -80,0
                " />
            <text dy="-0.125em">
                <textPath id="textPath" href="#circlePath" startOffset="50%" text-anchor="middle" textLength={textLength} >
                <tspan className="dot">•</tspan> &#8220;{vinylTitle}&#8221; <tspan className="dot">•</tspan>       
                </textPath>
            </text>
        </svg>
    )
};

export default TurntableVinylTitle;