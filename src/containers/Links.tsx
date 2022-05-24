import React, { FC } from 'react'
import { Theme } from '@mui/material'
import Email from '../components/links/Email'
import GitHub from '../components/links/GitHub'
import Instagram from '../components/links/Instagram'
import LinkedIn from '../components/links/LinkedIn'

// type TLink = { link: string }
interface Props {
    buttonTheme: Theme
}
const Links: FC<Props> = ({ buttonTheme }) => {
    const handlePageChange = (link: string): void => {
        // console.log(e.currentTarget)
        window.open(link, '_blank')
    }
    return (
        <div className="links">
            <GitHub
                handlePageChange={handlePageChange}
                buttonTheme={buttonTheme}
            />
            <LinkedIn
                handlePageChange={handlePageChange}
                buttonTheme={buttonTheme}
            />
            <Instagram
                handlePageChange={handlePageChange}
                buttonTheme={buttonTheme}
            />
            <Email buttonTheme={buttonTheme} />
        </div>
    )
}

export default Links
