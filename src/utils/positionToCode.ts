export const initDom = () => {
  if (import.meta.env.MODE === 'development') {
    document.onmousedown = function (e) {
      if (e.shiftKey && e.button === 0) {
        e.preventDefault()
        sendRequestToOpenFileInEditor(getFilePath(e))
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFilePath = (e: any): string => {
  let element = e
  if (e.target) {
    element = e.target
  }
  if (!element || !element.getAttribute) return ''
  if (element.getAttribute('code-location')) {
    return element.getAttribute('code-location')
  }
  return getFilePath(element.parentNode)
}

const sendRequestToOpenFileInEditor = (filePath: string): void => {
  const protocol = window.location.protocol ? window.location.protocol : 'http:'
  const hostname = window.location.hostname ? window.location.hostname : 'localhost'
  const port = window.location.port ? window.location.port : '80'
  fetch(`${protocol}//${hostname}:${port}/gvaPositionCode?filePath=${filePath}`).catch((error) => {
    console.log(error)
  })
}
