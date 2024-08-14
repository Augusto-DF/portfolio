import { ReactComponent as BrazilIcon } from "@assets/icons/brazil-flag-icon.svg"
import { ReactComponent as EuaIcon } from "@assets/icons/eua-flag-icon.svg"
const flagsKeys = ['brazil', 'usa'] as const 

const flagTagsData = {
    brazil: {
        label: "Brazil",
        Icon: BrazilIcon 
    },
    usa: {
        label: "USA",
        Icon: EuaIcon 
    },
}

export {flagsKeys, flagTagsData}