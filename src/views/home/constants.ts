import { WorkCardProps } from "@components/work-card"

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
        href: '/projects/vetted'
    },    
    {
        country: 'brazil',
        company: 'Freelancer',
        duration: ['2024'],
        title: 'Nature themed wedding',
        description: 'Giving guests a way to find all information about their wedding.',
        tags: [{tier: 'ultimate', label: 'Landing page'}, {tier: 'rare', label: 'Front-end'}, {tier: 'legend', label: 'Back-end'}],
        href: '/projects/wedding'
    },
]