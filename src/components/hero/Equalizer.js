import React from 'react';
import HeroVinylTitleSvg from './HeroVinylTitleSvg';


const Equalizer = () => {

    return (
        <div className="top_equalizer_wrapper p-4">
            <div id="box" className="animated fadeIn">
                <HeroVinylTitleSvg />
                <div id="circle">
                    <div id="square">
                        <span id="bar" className="bar2 b1" />
                        <span id="bar" className="bar1 b2" />
                        <span id="bar" className="bar2 b3" />
                        <span id="bar" className="bar1 b4" />
                        <span id="bar" className="bar2 b5" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Equalizer;