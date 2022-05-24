import React, { FC } from 'react'

const text =
    // eslint-disable-next-line max-len
    "I'm a software engineer with a degree in Computer Science based in Portland, Maine."

const AboutText: FC = () => {
    return (
        <span className="span-text__light" style={{ fontSize: '1.5em' }}>
            {text}
        </span>
    )
}

export default AboutText
