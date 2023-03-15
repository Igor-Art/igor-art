export default ({ message, input, cursor, speed = 60 }) => new Promise((resolve) => {
  let letterIndex = 0

  cursor.classList.add('pause')

  const typing = setInterval(() => {
    const letter = message[letterIndex]

    if (typeof letter === 'undefined') {
      clearInterval(typing)
      cursor.classList.remove('pause')
      resolve()

      return
    }

    input.textContent = input.textContent + letter
    letterIndex++
  }, speed)
})
