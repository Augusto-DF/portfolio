import VettedHomePageImg from "@views/projects-data/assets/vetted/vetted-home-page.jpg"
import VettedHomePageMobileImg from "@views/projects-data/assets/vetted/vetted-home-page-mobile.jpg"
import WeddingHomePageImg from "@views/projects-data/assets/wedding/wedding-hero.jpg"
import WeddingHomePageMobileImg from "@views/projects-data/assets/wedding/wedding-hero-mobile.jpg"
export {}


// TODO: it will be removed when backend is built.
export const PROJECTS = {
    vetted: {
        href: '/projects/vetted',
        tags: [ 
            { label: 'React', tier: "ultimate" },
            { label: 'Next Js', tier: "mythic" },
            { label: 'Playwright', tier: "mythic" },
            { label: 'Redis', tier: "legend"},
            { label: 'Typescript', tier: "rare" }
            ],
        country: 'usa',
        thumbSrc: {desktop: VettedHomePageImg, mobile: VettedHomePageMobileImg},
        thumbAlt: 'Vetted home page'
    },
    wedding: {
        href: '/projects/wedding',
        tags: [ 
            { label: 'React', tier: "ultimate" },
            { label: 'Landing Page', tier: "mythic" },
            { label: 'Express', tier: "legend" },
            { label: 'Back-End', tier: "rare" },
            { label: 'Typescript', tier: "rare" },
            { label: 'Node Js', tier: "rare" },
            { label: 'SQL', tier: "rare" }
            ],
        country: 'brazil',
        thumbSrc: { desktop: WeddingHomePageImg, mobile: WeddingHomePageMobileImg },
        thumbAlt: 'Wedding home page'
    },
}