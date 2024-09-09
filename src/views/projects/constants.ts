import { ProjectCardProps } from "@components/project-card"

export {}

export const PROJECT_CARD_LIST = [{
    title: "Title title",
    country: 'brazil',
    tags: [{label: 'front-end', tier: 'ultimate'}, {label: 'back-end', tier: 'mythic'}],
    href: '/projects'
},
{
    title: "title",
    country: 'usa',
    tags: [{label: 'back-end', tier: 'mythic'}],
    href: '/projects'
}
] as Array<ProjectCardProps>