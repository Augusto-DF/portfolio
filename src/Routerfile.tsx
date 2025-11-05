import Footer from '@components/footer'
import Header from '@components/header'
import Home from '@views/home'
import Projects from '@views/projects'
import Themes from '@views/projects-themes'
import TestArea from '@views/test-area'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

const Routerfile = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:targetProject" element={<Themes />} />
        <Route path="/test-area" element={<TestArea />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default Routerfile
