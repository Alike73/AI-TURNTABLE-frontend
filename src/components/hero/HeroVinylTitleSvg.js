import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getVinylTitle } from "../../redux/VinylRecordSlice";
import { getIsPlayingAudio } from "../../redux/AudioSlice";

const HeroVinylTitleSvg = () => {

    const vinylTitle = useSelector(getVinylTitle);
    const isPlaying = useSelector(getIsPlayingAudio);

    const [textLength, setTextLength] = useState(0);
    const MAX_TEXT_LENGTH = 231.33;

    useEffect(() => {
        const textPathElement = document.getElementById('textPathTop');
        if (textPathElement) {
            const computedTextLength = textPathElement.getComputedTextLength();
            setTextLength(Math.min(computedTextLength, MAX_TEXT_LENGTH));
        }
    }, [vinylTitle]);

    return (
        <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={ `t_vinyl_title top_svg ${ isPlaying ? "top_svg" : "top_svg_paused" }`}
        >
            <path id="circlePath" fill="none" d="
                M 10, 50
                a 40,40 0 1,1 80,0
                a 40,40 0 1,1 -80,0
                " />
            <text dy="-0.125em">
                <textPath id="textPathTop" href="#circlePath" startOffset="50%" textAnchor="middle" textLength={textLength} >
                    &#8220;{vinylTitle}&#8221;       
                </textPath>
            </text>
            {/* <tspan className="dot">•</tspan>  <tspan className="dot">•</tspan>  */}
        </svg>
    )
};

export default HeroVinylTitleSvg;