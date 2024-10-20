import TierTag, { TierTagProps } from '@components/tier-tag'
import styles from './styles.module.scss'
import FlagTag from '@components/flag-tag'
import classnames from 'classnames'
import ProjectCard from '@components/project-card'
import Button from '@components/button'

/* TODO: When there are at least 2 themes, define the type of data keeping in mind that in the future these data will be receive from BE instead from mocked data*/
type ThemeAProps = { data: any }

const ThemeA = ({ data }: ThemeAProps) => {
  const {
    tags,
    title,
    country,
    company,
    year,
    about,
    my_role,
    challenge,
    solution,
    learning,
    otherProjects,
    hero_image,
    hero_img_alt,
    results,
  } = data
  const { start, end, description, client, platform, href: webSiteHref } = about
  const { list: roleList } = my_role
  const { description: challengeDescription } = challenge
  const { list: solutionList, solutionComplement } = solution
  const { list: learningList } = learning

  const timeStr = `• ${company} • ${year.join(' - ')}`
  const aboutDurationStr = `${start.month} ${start.year} - ${end.month} ${end.year}`
  return (
    <>
      <section id="project-hero" className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.tagContainer}>
            {tags.map((tag: TierTagProps, id: number) => {
              return <TierTag key={`${title}-${id}-tag`} {...tag} />
            })}
          </div>
          <div className={styles.flagContainer}>
            <FlagTag countryFlag={country} />
            <h3>{timeStr}</h3>
          </div>
          <h2>{title}</h2>
        </div>
      </section>
      <section className={styles.heroImg}>
        <img src={hero_image} alt={hero_img_alt} />
      </section>
      <section className={styles.section}>
        <div className={classnames(styles.container, styles.about)}>
          <div>
            <h2>About the project</h2>
            <p>{description}</p>
          </div>
          <div className={styles.aboutData}>
            <h3>
              <b>Client: </b> {client}
            </h3>
            <h4>
              <b>Duration: </b> {aboutDurationStr}
            </h4>
            <h5>
              <b>Platform: </b> {platform}
            </h5>
          </div>

          <Button
            onClick={() => {
              window.open(webSiteHref, '_blank')
            }}
            label="View website"
            hoverColor="#F0A471"
          />
        </div>
        <hr />
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>The challenge</h2>
          <p>{challengeDescription}</p>
        </div>
        <hr />
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>My role</h2>
          <ul>
            {roleList.map((item: string, id: number) => (
              <li key={`role-list-${item}-${id}`}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <hr />
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Solution</h2>
          <p>The solution involved several key steps:</p>
          <ul>
            {solutionList.map((item: string, id: number) => (
              <li key={`solution-list-${item}-${id}`}>
                <p>{` • ${item}`}</p>
              </li>
            ))}
          </ul>
          {solutionComplement && <p className={styles.complement}>{solutionComplement}</p>}
        </div>
      </section>
      <section className={styles.results}>
        <h2>Results</h2>
        {results.map(
          (
            { src, alt, title: resultTitle }: { src: string; alt: string; title: string },
            id: string
          ) => (
            <div
              className={classnames(styles.heroImg, styles.resultsContainer)}
              key={`result-${alt}-${id}`}
            >
              <h3>{resultTitle}</h3>
              <img src={src} alt={alt} />
            </div>
          )
        )}
      </section>
      <section className={styles.section}>
        <div className={classnames(styles.container, styles.learning)}>
          <h2>Learnings</h2>
          <ul>
            {learningList.map(
              (
                { title, description: learnDescription }: { title: string; description: string },
                id: number
              ) => (
                <li key={`learning-list-${title}-${id}`}>
                  <h3>{`${title}`}</h3>
                  <p>{learnDescription}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      <section className={classnames(styles.section, styles.otherProjects)}>
        <div className={styles.otherContainer}>
          <h2>Other projects</h2>
          {otherProjects.map((other: any, id: number) => {
            const {
              title: otherTitle,
              country: otherCountry,
              tags: otherTags,
              href: otherHref,
            } = other

            return (
              <ProjectCard
                key={`other-${otherTitle}-${id}`}
                title={otherTitle}
                href={otherHref}
                tags={otherTags}
                country={otherCountry}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ThemeA
