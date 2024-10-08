export {}

const HEADER_DATA = [
    { label: "Home", href: "/" },
    /* { label: "About", href: "" }, */ // TODO: Uncomment it when the About page is built.
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact", onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } },
]

export { HEADER_DATA }