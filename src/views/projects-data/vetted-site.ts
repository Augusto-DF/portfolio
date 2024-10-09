import { PROJECTS } from "./utils"

export {}

export const data = {
    tags: [...PROJECTS.vetted.tags],
    country: 'usa',
    company: 'Vetted',
    year: ['2024'],
    title: 'Keeping the veteran community strong',
    hero_image: '',
    hero_img_alt: '',
    about: {
        description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit.',
        client: 'We The Veterans',
        start:{ year: '2024', month: 'Feb' },
        end:{ year: '', month: 'Now' },
        platform: 'Desktop/Mobile (Responsive)',
        role: 'Front-end developer',
        tools: [{label: '', icon: ''}]
    },
    my_role: {        
        description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit.',
        list: [
            'Norem ipsum dolor sit amet, consectetur adipiscing elit.', 
            'Norem ipsum dolor sit amet, consectetur adipiscing elit.', 
            'Norem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]        
    },
    challenge: {
        description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit.',
        list: [
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]
    },
    acomplishments: {
        list: [
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
        image: ""
    },
    learning: {
        list: [
            {
                title: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            },
            {
                title: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            },
            {
                title: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
                description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            }
        ],
        image: ''
    },
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