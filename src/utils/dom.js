import get from 'lodash.get'

export const htmlToElement = html => {
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}

export const updateProps = (root, context = root) => {
  Array.from(root.querySelectorAll('[data-prop]')).forEach(element => {
    const attribute = element.getAttribute('data-prop')
    const [componentProperty, key] = attribute.split(':')
    element[componentProperty] = get(context, key)
  })
}

export const updateText = (root, context = root) => {
  Array.from(root.querySelectorAll('[data-text]')).forEach(element => {
    const attribute = element.getAttribute('data-text')
    element.innerText = get(context, attribute)
  })
}

export const bindEvents = (root, context, ...eventNames) => {
  eventNames.forEach(eventName => {
    const attributeName = `data-bind-${eventName}`
    Array.from(root.querySelectorAll(`[${attributeName}]`)).forEach(element => {
      const handler = context[element.getAttribute(attributeName)]
      if (!handler) {
        return
      }
      element.addEventListener(eventName, handler.bind(context))
    })
  })
}
