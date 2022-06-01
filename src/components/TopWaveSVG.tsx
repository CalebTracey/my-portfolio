/* eslint-disable max-len */
import React, { FC } from 'react'

const TopWaveSVG: FC = () => {
    return (
        <div className="wave__top">
            <svg
                preserveAspectRatio="xMaxYMid meet"
                className="scaling-svg__top"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ display: 'block' }}
            >
                <path
                    fill="#3C415C"
                    fillOpacity="1"
                    d="M0,256L30,229.3C60,203,120,149,180,133.3C240,117,300,139,360,176C420,213,480,267,540,277.3C600,288,660,256,720,218.7C780,181,840,139,900,122.7C960,107,1020,117,1080,138.7C1140,160,1200,192,1260,202.7C1320,213,1380,203,1410,197.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                />
            </svg>
        </div>
    )
}

export default TopWaveSVG
