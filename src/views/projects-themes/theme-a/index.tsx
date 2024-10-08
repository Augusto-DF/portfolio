import TierTag, { TierTagProps } from '@components/tier-tag'
import styles from './styles.module.scss'
import FlagTag from '@components/flag-tag'
import classnames from 'classnames'
import ProjectCard from '@components/project-card'

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
    acomplishments,
    learning,
    otherProjects,
  } = data
  const { start, end, description, client, platform } = about
  const { description: roleDescription, list: roleList } = my_role
  const { description: challengeDescription, list: challengeList } = challenge
  const { list: acomplishmentsList } = acomplishments
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
        {/* TODO: Uncomment it when an image was added */}
        {/* <img src={data.hero_img} alt={hero_img_alt} /> */}
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
        </div>
        <hr />
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>My role</h2>
          <p>{roleDescription}</p>
          <ul>
            {roleList.map((item: string, id: number) => (
              <li key={`role-list-${item}-${id}`}>
                <p>• {item}</p>
              </li>
            ))}
          </ul>
        </div>
        <hr />
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>The challenge and process</h2>
          <p>{challengeDescription}</p>
          <ul>
            {challengeList.map((item: string, id: number) => (
              <li key={`challenge-list-${item}-${id}`}>
                <p>• {item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.heroImg}>
        {/* TODO: Uncomment it when an image was added */}
        {/* <img src={data.challenge_img} alt={challenge_img_alt} /> */}
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Accomplishments</h2>
          <ol start={1}>
            {acomplishmentsList.map((item: string, id: number) => (
              <li key={`acomplishment-list-${item}-${id}`}>
                <p>{`${id + 1}. ${item}`}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={styles.heroImg}>
        {/* TODO: Uncomment it when an image was added */}
        {/* <img src={data.accomplishments_img} alt={accomplishments_img_alt} /> */}
      </section>
      <section className={styles.section}>
        <div className={classnames(styles.container, styles.learning)}>
          <h2>Learning & Takeaways</h2>
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
      <section className={styles.heroImg}>
        {/* TODO: Uncomment it when an image was added */}
        {/* <img src={data.learning_img} alt={learning_img_alt} /> */}
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
