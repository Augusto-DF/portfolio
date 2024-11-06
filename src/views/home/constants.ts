import { WorkCardProps } from "@components/work-card"
import { PROJECTS } from '@views/projects-data/utils'

export {}

/* TODO: Centralize all href paths on utils file */

export const HOME_WORKS_CARD_LIST: Array<WorkCardProps> = [
    {
        country: 'usa',
        company: 'Vetted',
        duration: ['2024', 'Current'],
        title: 'Keeping the veteran community strong',
        description: 'Vetted is a digital hub that supports veterans, veteran-owned businesses and journalism.',
        tags: [{tier: 'ultimate', label: 'Landing page'}, {tier: 'rare', label: 'Front-end'}],
        inverse: true,
        href: '/projects/vetted',
        thumbSrc: { desktop: PROJECTS.vetted.thumbSrc.desktop, mobile: PROJECTS.vetted.thumbSrc.mobile },
        thumbAlt: PROJECTS.vetted.thumbAlt
    },    
    {
        country: 'brazil',
        company: 'Freelancer',
        duration: ['2024'],
        title: 'Nature themed wedding',
        description: 'Giving guests a way to find all information about their wedding.',
        tags: [{tier: 'ultimate', label: 'Landing page'}, {tier: 'rare', label: 'Front-end'}, {tier: 'legend', label: 'Back-end'}],
        href: '/projects/wedding',
        thumbSrc: { desktop: PROJECTS.wedding.thumbSrc.desktop, mobile: PROJECTS.wedding.thumbSrc.mobile },
        thumbAlt: PROJECTS.wedding.thumbAlt
    },
]