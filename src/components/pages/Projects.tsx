/* eslint-disable max-len */
import React, { FC } from 'react'
import { animated, config, useTransition } from '@react-spring/web'
import { Container, Theme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import AnimatedText from '../animations/AnimatedText'
import AnimatedIcon from '../animations/AnimatedIcon'
import AnimatedHeader from '../animations/AnimatedHeader'

const text1 =
    'This website was built using react, react-spring, material-ui, and sass.'

const text2 =
    "A full stack web application built with react, spring boot, AWS S3, and mongoDB. \nThe application serves a hospital's fellowship program through their Department of Emergency Ultrasound. Find more information in the project's ReadMe."

interface Props {
    projectsSelected: boolean
    handlePageChange: (link: string) => void
    buttonTheme: Theme
}

const Projects: FC<Props> = ({
    projectsSelected,
    handlePageChange,
    buttonTheme,
}) => {
    const transition = useTransition(projectsSelected, {
        from: { x: -1000, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 1000, y: 0, opacity: 0 },
        reverse: projectsSelected,
        config: config.stiff,
        delay: 300,
    })

    return transition((style, item) => {
        return item ? (
            <animated.div
                className="span-text__light text-align-center"
                style={style}
            >
                <span
                    style={{
                        fontSize: '1.5em',
                        textAlign: 'center',
                    }}
                >
                    <Container>
                        <div
                            style={{
                                fontSize: '65%',
                                paddingTop: '2rem',
                                textAlign: 'initial',
                            }}
                        >
                            <div className="flex-row-center">
                                <AnimatedHeader
                                    text="1540 Project"
                                    fontSize="1.5rem"
                                    fontColor="__light"
                                    delay={400}
                                    startX={-1000}
                                    endX={10}
                                />
                                <AnimatedIcon
                                    icon={<GitHubIcon fontSize="large" />}
                                    iconLabel="1540"
                                    startX={-1000}
                                    endX={20}
                                    link="https://github.com/CalebTracey/ultrasound-app"
                                    delay={200}
                                    handlePageChange={handlePageChange}
                                    buttonTheme={buttonTheme}
                                    timeoutStart={850}
                                    timeoutEnd={1100}
                                />
                            </div>

                            <AnimatedText
                                text={text2}
                                delay={800}
                                fontColor="__light"
                            />

                            <div
                                className="flex-row-center"
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <AnimatedHeader
                                    text="caleb.tracey.com"
                                    fontSize="1.5rem"
                                    fontColor="__light"
                                    delay={800}
                                    startX={-1000}
                                    endX={10}
                                />
                                <AnimatedIcon
                                    icon={<GitHubIcon fontSize="large" />}
                                    iconLabel="portfolio"
                                    startX={-1000}
                                    endX={20}
                                    link="https://github.com/CalebTracey"
                                    delay={400}
                                    handlePageChange={handlePageChange}
                                    buttonTheme={buttonTheme}
                                    timeoutStart={1050}
                                    timeoutEnd={1300}
                                />
                            </div>

                            <AnimatedText
                                text={text1}
                                delay={1600}
                                fontColor="__light"
                            />
                        </div>
                    </Container>
                </span>
            </animated.div>
        ) : (
            ''
        )
    })
}

export default Projects
