import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton'
import cx from 'classnames'
import styles from './App.module.css'

// eslint-disable-next-line
import { lightTheme, darkTheme } from './theme'
import resume from './resume'

const Header = ({ header }) => (
  <div className={styles.Header}>
    <h1 className={styles.Title}>{header.name}</h1>
    <div className={styles.Links} >
      {
        header.links.map((link) => (
          <IconButton key={link.text} className={styles.Link} target="_blank" href={link.href}
            size="small" classes={{ 'root': styles.Link }}>
            <i className={cx(styles.Icon, 'fab', link.icon)} />
            <span className={styles.LinkLabel}>{link.text}</span>
          </IconButton>
        ))
      }
    </div>
  </div >
)

const Summary = ({ summary }) => (
  <div className={styles.Section}>
    <h3 className={styles.SectionHeading}>Summary</h3>
    <div className={styles.SubSection}>
      <ul>{summary.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  </div>
)

const Section = ({ section }) => (
  <div className={styles.Section}>
    <h3 className={styles.SectionHeading}>{section.title}</h3>
    <div className={styles.SubSections}>
      {
        section.subsections.map(subsection => (
          <div key={subsection.title} className={styles.SubSection}>
            <h4>{subsection.title}</h4>
            <h5>{subsection.subtitle}</h5>
            <ul>{subsection.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          </div>
        ))
      }
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className={styles.Resume}>
        <Header header={resume.header} />
        <Summary summary={resume.summary} />
        {resume.sections.map(section => <Section key={section.title} section={section} />)}
      </div>
    </ThemeProvider>
  )
}

export default App;
