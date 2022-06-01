import React, { FC } from 'react'
import { Theme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import IconButton from '../components/IconButton'

interface Props {
    buttonTheme: Theme
    handlePageChange: (link: string) => void
    handleWindowLocationHref: (link: string) => void
}
const Links: FC<Props> = ({
    buttonTheme,
    handlePageChange,
    handleWindowLocationHref,
}) => {
    return (
        <div className="links">
            <IconButton
                handlePageChange={handlePageChange}
                component={<GitHubIcon fontSize="large" />}
                iconLabel="github"
                link="https://github.com/CalebTracey"
                buttonTheme={buttonTheme}
                timeoutStart={850}
                timeoutEnd={1100}
            />
            <IconButton
                handlePageChange={handlePageChange}
                component={<LinkedInIcon fontSize="large" />}
                iconLabel="linkedin"
                link="https://www.linkedin.com/in/caleb-tracey/"
                buttonTheme={buttonTheme}
                timeoutStart={900}
                timeoutEnd={1150}
            />
            <IconButton
                handlePageChange={handlePageChange}
                component={<InstagramIcon fontSize="large" />}
                iconLabel="instagram"
                link="https://www.instagram.com/caleb.tracey/"
                buttonTheme={buttonTheme}
                timeoutStart={950}
                timeoutEnd={1200}
            />
            <IconButton
                handleWindowLocationHref={handleWindowLocationHref}
                component={<EmailIcon fontSize="large" />}
                iconLabel="email"
                link="mailto:caleb.tracey@gmail.com"
                buttonTheme={buttonTheme}
                timeoutStart={1000}
                timeoutEnd={1250}
            />
        </div>
    )
}

export default Links
