const spinnerStack = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

const equalizeSpeed = (speed, heightContent) => heightContent > 100 ? speed * (heightContent / 100) : speed

const runSpinner = (content, timeout) => new Promise((resolve) => {
  const originalText = content.innerHTML

  content.textContent = ''

  const spinner = document.createElement('span')
  const message = document.createElement('span')

  spinner.classList.add('loading-spinner')
  spinner.textContent = spinnerStack[0]

  message.classList.add('loading-message')
  message.textContent = 'Loading'

  content.appendChild(spinner)
  content.appendChild(message)

  content.style.height = '25px'

  let spinnerIndex = 1

  const handler = setInterval(() => {
    spinner.textContent = spinnerStack[spinnerIndex]

    spinnerIndex = spinnerIndex >= spinnerStack.length - 1 ? 0 : spinnerIndex + 1
  }, 100)

  setTimeout(() => {
    clearInterval(handler)
    content.innerHTML = originalText
    resolve()
  }, timeout)
})

export default ({content, speed = 300, awaitAnimation = true}) => new Promise(async (resolve) => {
  const height = content.scrollHeight

  if (content.hasAttribute('data-loading')) {
    await runSpinner(content, +content.getAttribute('data-loading'))
  }

  speed = equalizeSpeed(speed, height)

  content.style.transitionDuration = speed + 'ms'
  content.style.height = height + 'px'

  if (awaitAnimation) {
    setTimeout(() => {
      resolve()
      content.style.height = 'auto'
    }, speed)

  } else {
    resolve()
  }
})
