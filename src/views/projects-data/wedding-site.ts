import { PROJECTS } from "./utils"
import weddingHero from '@views/projects-data/assets/wedding/wedding-hero.jpg'
import weddinggiftList from '@views/projects-data/assets/wedding/gift-list-image.jpg'
import weddingGiftListFlow from '@views/projects-data/assets/wedding/gift-list-flow-image.jpg'
import countdown from '@views/projects-data/assets/wedding/countdown-image.jpg'
import confirmationForm from '@views/projects-data/assets/wedding/confirmation-form-image.jpg'

export {}

export const data = {
    tags: [...PROJECTS.wedding.tags],
    country: 'brazil',
    company: 'Freelance',
    year: ['2024'],
    title: 'Nature themed wedding',
    hero_image: weddingHero,
    hero_img_alt: 'Wedding website hero',
    about: {
        description: 'Our clients wanted a minimalist wedding website that include sections on outfits, venue, date, and gift list.',
        client: 'Freelancer',
        start:{ year: '2024', month: 'Jun' },
        end:{ year: '2024', month: 'Jul' },
        platform: 'Desktop/Mobile (Responsive)',
        role: 'Front-end & back-end developer, Dev Ops',
        tools: [{label: '', icon: ''}],
        href: 'https://mariaemiguel.com.br/'
    },
    my_role: {        
        description: 'I was hired as a full-stack developer and was responsible for:',
        list: [
            'In this project, I worked as a full-stack developer, handling both the front-end and back-end', 
            'I also managed all the steps to deploy both the API and the front-end, ensuring they went live successfully', 
            'I was also responsible for setting everything up, including choosing the technologies.'
        ]        
    },
    challenge: {
        description: 'The clients wanted a website that captured the joy and excitement of their wedding, including a countdown to the big day, a guest RSVP form, and a way for guests to send gifts to the bride and groom. They provided an initial design, and I collaborated with a designer to bring their vision to life.',
    },
    solution: {
        list: [
            "At the clients' request, I implemented a countdown timer leading up to the big day.",
            "Developed an API to securely store and manage guest information and gift data.",
            "Implemented a user-friendly gift list flow to simplify the process of gifting the couple.",
            "Created a confirmation form to allow guests to easily RSVP for the event.",
        ],
    },
    results: [
        {title: "Wedding website hero", src: weddingHero, alt: "Wedding website hero"},
        {title: "Countdown section", src: countdown, alt: "Countdown section"},
        {title: "Gift list", src: weddinggiftList, alt: "Gift list"},
        {title: "Gift list flow", src: weddingGiftListFlow, alt: "Gift list flow"},
        {title: "Confirmation form section", src: confirmationForm, alt: "Confirmation form section"},
    ],
    learning: {
        list: [
            {
                title: "Back-end development",
                description: "This project was my first time building a complete backend. I created a simple REST API to connect with a database that stores guest and gift information. Using an ORM to manage the database would be easier, but I went with SQLite, because I wanted to dig into every aspect of backend development and still keep things solid and reliable. My next step is to try out ORMs like Sequelize or Mongoose, which should speed up the development process"
            },
            {
                title: "Deploy and Atomation",
                description: "Even though this was a small project, I noticed early on that the client would request a lot of changes during development. So, I set up GitHub Actions to automate the deployment process, which really sped things up since I didn’t have to do this step manually anymore"
            }
        ]
    },
    otherProjects: [ 
        {
            title: 'Vetted - Keeping the veteran community strong',  
            ...PROJECTS.vetted
        },  
        /* {
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
        }, */
    ]
}