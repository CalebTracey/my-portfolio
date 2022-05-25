import React, { FC, useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { createTheme } from '@mui/material/styles'
import Title from '../components/Title'
import TitleSubText from '../components/TitleSubText'
import PortraitCard from '../containers/PortraitCard'
import ParallaxButtonDown from '../components/ParallaxButtonDown'
import ParallaxButtonUp from '../components/ParallaxButtonUp'
import AboutText from '../components/AboutText'

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#892CDC',
        },
    },
})

const Parralax: FC = (): JSX.Element => {
    const parallax = useRef<IParallax | null>(null)

    const scrollDown = (): void => {
        if (parallax.current) {
            parallax.current.scrollTo(2)
        }
    }

    const scrollUp = (): void => {
        if (parallax.current) {
            parallax.current.scrollTo(0)
        }
    }

    return (
        <Parallax className="parallax" ref={parallax} pages={2}>
            <ParallaxLayer className="top-layer" offset={0} speed={2.5}>
                <div className="parallax__wrap-middle">
                    <PortraitCard buttonTheme={buttonTheme} />
                </div>
                <div className="parallax__wrap-left">
                    <Title />
                    <TitleSubText />
                </div>
                <div className="parallax__wrap-right" />
                <ParallaxButtonDown
                    scrollDown={scrollDown}
                    buttonTheme={buttonTheme}
                />
            </ParallaxLayer>
            <ParallaxLayer className="bottom-layer" offset={1} speed={2}>
                {/* <div className="parallax__wrap-middle" /> */}
                <div className="parallax__wrap-middle">
                    <AboutText />
                </div>
                {/* <div className="parallax__wrap-right" /> */}
                <ParallaxButtonUp
                    scrollUp={scrollUp}
                    buttonTheme={buttonTheme}
                />
            </ParallaxLayer>
        </Parallax>
    )
}

export default Parralax
