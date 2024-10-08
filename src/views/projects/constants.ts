import { ProjectCardProps } from "@components/project-card"
import { PROJECTS } from "@views/projects-data/utils"

export {}

export const PROJECT_CARD_LIST = [{
    title: "Nature themed wedding",
    ...PROJECTS.wedding
},
{
    title: "Keeping the veteran community strong",
    ...PROJECTS.vetted
}
] as Array<ProjectCardProps>