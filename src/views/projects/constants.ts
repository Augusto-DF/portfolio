import { ProjectCardProps } from "@components/project-card"

export {}

export const PROJECT_CARD_LIST = [{
    title: "Nature themed wedding",
    country: 'brazil',
    tags: [{label: 'front-end', tier: 'rare'}, {label: 'back-end', tier: 'legend'}],
    href: '/projects'
},
{
    title: "Keeping the veteran community strong",
    country: 'usa',
    tags: [{label: 'front-end', tier: 'rare'}],
    href: '/projects'
}
] as Array<ProjectCardProps>