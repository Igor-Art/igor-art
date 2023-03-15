import typing from './typing.js'
import render from './render.js'

async function cmd(section) {
  const headline = section.querySelector('.section-headline')
  const content = section.querySelector('.section-content')

  const input = headline.querySelector('.command')
  const cursor = headline.querySelector('.cursor')
  const message = headline.getAttribute('data-command')

  input.textContent = ''
  section.style.display = ''

  if (!message.length) {
    return
  }

  await typing({ message, input, cursor })

  cursor.style.display = 'none'

  await render({ content })
}

async function cmdPipeline(sections) {
  if (!sections.length) {
    return
  }

  await cmd(sections.shift())

  cmdPipeline(sections)
}

export default cmdPipeline
