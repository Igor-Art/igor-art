import runSections from './components/cmd.js'

import './app.css'

const sections = document.querySelectorAll('section.section')
const headlineTemplate = document.querySelector('section.section:first-of-type .section-headline')

sections.forEach((section) => {
  const headline = section.querySelector('.section-headline')

  if (!headline.childNodes.length) {
    const newHeadline = headlineTemplate.cloneNode(true)
    newHeadline.setAttribute('data-command', headline.getAttribute('data-command'))
    section.replaceChild(newHeadline, headline)
  }
})

runSections(Array.from(sections))

document
  .querySelectorAll('a[href="#telegram"]')
  .forEach(link => link.setAttribute('href', atob('aHR0cHM6Ly90Lm1lL3dlYmxhYmlv')))
