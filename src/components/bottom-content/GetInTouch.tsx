/* eslint-disable max-len */
import React, { FC } from 'react'
import { animated, config, useTransition } from '@react-spring/web'
import { Container, Theme } from '@mui/material'
import { Email, LinkedIn } from '@mui/icons-material'
import AnimatedTextLight from '../AnimatedTextLight'
import AnimatedIcon from '../AnimatedIcon'

const text1 = 'The best way to reach me is via by email.'
const text2 = "I'm always happy to connect on LinkedIn as well!"

interface Props {
    getInTouchSelected: boolean
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
    buttonTheme: Theme
}

const GetInTouch: FC<Props> = ({
    getInTouchSelected,
    buttonTheme,
    handlePageChange,
    handleWindowLocationHref,
}) => {
    const transition = useTransition(getInTouchSelected, {
        from: { x: -1000, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 1000, y: 0, opacity: 0 },
        reverse: getInTouchSelected,
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
                    <span
                        className="span-header__light"
                        style={{ fontSize: '2rem' }}
                    >
                        Get In Touch
                    </span>

                    <Container>
                        <div
                            style={{
                                fontSize: '65%',
                                paddingTop: '2rem',
                                textAlign: 'initial',
                            }}
                        >
                            <div
                                className="flex-row-center"
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <AnimatedTextLight text={text1} delay={800} />
                                <AnimatedIcon
                                    icon={<Email fontSize="large" />}
                                    startX={300}
                                    endX={20}
                                    iconLabel="email"
                                    link="mailto:caleb.tracey@gmail.com"
                                    delay={600}
                                    handleWindowLocationHref={
                                        handleWindowLocationHref
                                    }
                                    buttonTheme={buttonTheme}
                                    timeoutStart={850}
                                    timeoutEnd={1100}
                                />
                            </div>

                            <div
                                className="flex-row-center"
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <AnimatedTextLight text={text2} delay={2000} />
                                <AnimatedIcon
                                    icon={<LinkedIn fontSize="large" />}
                                    startX={300}
                                    endX={20}
                                    iconLabel="linkedin"
                                    link="https://www.linkedin.com/in/caleb-tracey/"
                                    delay={1800}
                                    handlePageChange={handlePageChange}
                                    buttonTheme={buttonTheme}
                                    timeoutStart={850}
                                    timeoutEnd={1100}
                                />
                            </div>
                        </div>
                    </Container>
                </span>
            </animated.div>
        ) : (
            ''
        )
    })
}

export default GetInTouch
