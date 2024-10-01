import Footer from '@components/footer'
import Header from '@components/header'
import Home from '@views/home'
import Projects from '@views/projects'
import Themes from '@views/projects-themes'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const Routerfile = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:targetProject" element={<Themes />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routerfile
