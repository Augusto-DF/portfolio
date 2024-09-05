import Header from '@components/header'
import Home from '@views/home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const Routerfile = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default Routerfile
