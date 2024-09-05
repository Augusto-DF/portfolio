import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin-icon.svg'
import { ReactComponent as Github } from '@assets/icons/github-icon.svg'
import { ReactComponent as DownloadIcon } from '@assets/icons/download-icon.svg'
import { HOVER_COLORS } from 'src/libs/utils/hoverColors'

export {}


export const FOOTER_BUTTON_LIST = [
{
    theme: "icon", 
    Icon: Github , 
    iconPosition: "right", 
    label: "Github",
    value: 'github',
    hoverColor: HOVER_COLORS.ferir_nut
},
{
    theme: "icon", 
    Icon:  LinkedinIcon , 
    iconPosition: "right", 
    label: "LinkedIn",
    value: 'linkedin',
    hoverColor: HOVER_COLORS.ferir_nut
}, 
{
    theme: "icon", 
    Icon: DownloadIcon , 
    iconPosition: "right", 
    label: "Download my resume",
    value: 'download',
    hoverColor: HOVER_COLORS.fenrir_mythic
},
]