/* eslint-disable max-len */
import React, { FC, useState } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { Theme } from '@mui/material'
import ParallaxButtonUp from '../components/ParallaxButtonUp'
import BottomNavigationBar from '../components/BottomNavigationBar'
import BottomWave from '../components/BottomWaveSVG'
import Pages from './Pages'

type Props = {
    scrollUp: () => void
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
    bottomNavTheme: Theme
    buttonTheme: Theme
}

const ParallaxBottom: FC<Props> = ({
    scrollUp,
    handlePageChange,
    handleWindowLocationHref,
    buttonTheme,
    bottomNavTheme,
}) => {
    const [projectsSelected, setProjectsSelected] = useState(false)
    const [aboutMeSelected, setAboutMeSelected] = useState(true)
    const [getInTouchSelected, setGetInTouchSelected] = useState(false)

    return (
        <ParallaxLayer className="bottom-layer" offset={1} speed={2}>
            <div className="parallax__wrap-top">
                <Pages
                    handlePageChange={handlePageChange}
                    handleWindowLocationHref={handleWindowLocationHref}
                    buttonTheme={buttonTheme}
                    projectsSelected={projectsSelected}
                    aboutMeSelected={aboutMeSelected}
                    getInTouchSelected={getInTouchSelected}
                />
            </div>
            <div className="parallax__wrap-bottom">
                <BottomWave />
                <BottomNavigationBar
                    bottomNavTheme={bottomNavTheme}
                    projectsSelected={projectsSelected}
                    aboutMeSelected={aboutMeSelected}
                    getInTouchSelected={getInTouchSelected}
                    setProjectsSelected={setProjectsSelected}
                    setAboutMeSelected={setAboutMeSelected}
                    setGetInTouchSelected={setGetInTouchSelected}
                />
            </div>
            <ParallaxButtonUp scrollUp={scrollUp} buttonTheme={buttonTheme} />
        </ParallaxLayer>
    )
}

export default ParallaxBottom
