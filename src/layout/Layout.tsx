/* eslint-disable max-len */
import React, { FC, useRef } from 'react'
import { Parallax, IParallax } from '@react-spring/parallax'
import { createTheme } from '@mui/material/styles'
import ParallaxTop from '../containers/ParallaxTop'
import ParallaxBottom from '../containers/ParallaxBottom'

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#892CDC',
        },
    },
})

const bottomNavTheme = createTheme({
    palette: {
        primary: {
            main: '#892CDC',
        },
        text: {
            secondary: '#BEA0D3',
        },
    },
})

const Parralax: FC = (): JSX.Element => {
    const parallax = useRef<IParallax | null>(null)

    const handlePageChange = (link: string): void => {
        window.open(link, '_blank')
    }

    const handleWindowLocationHref = (link: string): void => {
        window.location.href = link
    }

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
            <ParallaxTop
                scrollDown={scrollDown}
                handlePageChange={handlePageChange}
                handleWindowLocationHref={handleWindowLocationHref}
                buttonTheme={buttonTheme}
            />
            <ParallaxBottom
                scrollUp={scrollUp}
                handlePageChange={handlePageChange}
                handleWindowLocationHref={handleWindowLocationHref}
                buttonTheme={buttonTheme}
                bottomNavTheme={bottomNavTheme}
            />
        </Parallax>
    )
}

export default Parralax
