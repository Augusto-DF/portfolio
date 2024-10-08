import { useParams } from 'react-router-dom'
import { data as wedding } from '../projects-data/wedding-site'
import ThemeA from './theme-a'
import { useMemo } from 'react'

const Themes = () => {
  const { targetProject: project } = useParams()

  const data = useMemo(() => {
    switch (project) {
      case 'wedding':
        return wedding
      case 'vetted':
        return wedding
      default:
        return
    }
  }, [project])

  /* TODO: When the BE was sending the projects' data make a function that select the theme randomly or select the theme based on some information sent by BE */

  return <ThemeA data={data} />
}

export default Themes
