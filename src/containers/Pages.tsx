import { Container, Theme } from '@mui/material'
import React, { FC } from 'react'
import AboutMe from '../components/bottom-content/AboutMe'
import GetInTouch from '../components/bottom-content/GetInTouch'
import Projects from '../components/bottom-content/Projects'

interface Props {
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
    buttonTheme: Theme
    projectsSelected: boolean
    aboutMeSelected: boolean
    getInTouchSelected: boolean
}

const Pages: FC<Props> = ({
    handlePageChange,
    handleWindowLocationHref,
    buttonTheme,
    projectsSelected,
    aboutMeSelected,
    getInTouchSelected,
}) => {
    return (
        <Container>
            <div className="page-container">
                <Projects
                    handlePageChange={handlePageChange}
                    buttonTheme={buttonTheme}
                    projectsSelected={projectsSelected}
                />
            </div>
            <div className="page-container">
                <AboutMe aboutMeSelected={aboutMeSelected} />
            </div>
            <div className="page-container">
                <GetInTouch
                    handleWindowLocationHref={handleWindowLocationHref}
                    handlePageChange={handlePageChange}
                    buttonTheme={buttonTheme}
                    getInTouchSelected={getInTouchSelected}
                />
            </div>
        </Container>
    )
}

export default Pages
