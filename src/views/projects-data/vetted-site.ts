import { PROJECTS } from "./utils"
import vettedHeroImg from "@views/projects-data/assets/vetted/vetted-home-page.jpg"
import vetthenewsPage from '@views/projects-data/assets/vetted/vet-the-news-page.jpg'
import vetyoursearchPage from '@views/projects-data/assets/vetted/vet-your-search-page.jpg'
import abaoutvettedPage from '@views/projects-data/assets/vetted/about-vetted-page.jpg'

export {}

export const data = {
    tags: [...PROJECTS.vetted.tags],
    country: 'usa',
    company: 'Vetted',
    year: ['2024'],
    title: 'Keeping the veteran community strong',
    hero_image: vettedHeroImg,
    hero_img_alt: 'Vetted home page',
    about: {
        description: 'Vetted is a platform created by veterans and military families that offers reliable information, service opportunities, and essential resources while promoting veteran-owned businesses and organizations to foster community growth.',
        client: 'Vetted',
        start:{ year: '2024', month: 'Feb' },
        end:{ year: '', month: 'Now' },
        platform: 'Desktop/Mobile (Responsive)',
        href: 'https://getvetted.org/',
    },
    my_role: {        
        list: [
            'I was hired as a React/Next Front-end Developer to create the Vetted website from scratch.', 
            'I also managed the DevOps and back-end aspects of the project to ensure everything worked smoothly.'
        ]        
    },
    challenge: {
        description: 'The client wanted to create a hub for information, resources, and services tailored to veterans and military families. They reached out to me to step in as a Front-end Developer and bring the Vetted website to life.',
    },
    solution: {
        list: [
            "Integrated the Vetted API, which aggregates news from a specific list of websites.",
            "Developed the Vet Your Search, integrating both Google and Bing search APIs.",
            "Integration with behavior analytics tools (Hotjar) to understand the users.",
            "Implemented a security layer using Redis to prevent DDoS attacks and limit customer spending on Google and Bing APIs.",
            "Conducted end-to-end tests with Playwright to make sure the code was solid and reliable."
        ],
        solutionComplement: "And, of course, ensured everything was componentized and pixel-perfect while creating the front end of the website.",
        image: ""
    },
    learning: {
        list: [
            {
                title: "Problem-Solving & Versatility",
                description: "Although I wasn’t a full-stack developer, I embraced the challenge of handling DevOps and back-end tasks. This pushed me to quickly expand my skills, adapt to new areas, and think beyond front-end development."
            },
            {
                title: "Importance of Testing:",
                description: "Implementing end-to-end tests with Playwright reinforced the need for thorough testing to maintain code quality and stability."
            },
            {
                title: "New Skills:",
                description: "I gained valuable experience implementing a security layer using Redis to prevent DDoS attacks and integrated behavior analytics tools like Hotjar to better understand user interactions and improve the platform's UX."
            }
        ],
        image: ''
    },
    results: [
        {title: "Vetted Homepage", src: vettedHeroImg, alt: "Vetted home page"},
        {title: "Vet the News Page", src: vetthenewsPage, alt: "Vet the news page"},
        {title: "Vet Your Search Page", src: vetyoursearchPage, alt: "Vet your search page"},
        {title: "About Vetted", src: abaoutvettedPage, alt: "About vetted page"},
    ],
    otherProjects: [
        {
            title: 'Nature themed wedding ',  
            ...PROJECTS.wedding
        },  
         {
            title: 'Refera - Comming soon...',  country: 'brazil',
            tags: [
                { label: '???', tier: "rare" }, 
                { label: '???', tier: "rare" }, 
                { label: '???', tier: "rare" }
            ],
            href: ''
        }, 
        {
            title: 'Dialogo - Comming soon...',  country: 'brazil',
            tags: [
                { label: '???', tier: "rare" }, 
                { label: '???', tier: "rare" }, 
                { label: '???', tier: "rare" }
            ],
            href: ''
        },
    ]
}