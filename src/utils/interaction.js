// 滚动条在Y轴上的滚动距离
const getScrollTop = () => {
  let scrollTop = 0
  let bodyScrollTop = 0
  let documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  return scrollTop
}

// 文档的总高度
const getScrollHeight = () => {
  let scrollHeight = 0
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

// 浏览器视口的高度
const getWindowHeight = () => {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

const setDocumentTitle = (title) => {
  document.title = title
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  const loadHandler = () => {
    window.setTimeout(() => {
      iframe.removeEventListener('load', loadHandler)
      document.body.removeChild(iframe)
    }, 0)
  }
  iframe.addEventListener('load', loadHandler)
  document.body.appendChild(iframe)
}

const debounce = (func, wait, immediate) => {
  let args, context, later, result, timeout, timestamp
  timeout = args = context = timestamp = result = undefined
  later = () => {
    let last = new Date().getTime() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) {
          context = args = null
        }
      }
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = new Date().getTime()
    const callNow = immediate && !timeout
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

const loadMore = (callback, wait = 100) => {
  window.onscroll = debounce(() => {
    if (getScrollHeight() - getScrollTop() - getWindowHeight() <= 2) {
      callback()
    }
  }, wait)
}

module.exports = {
  setDocumentTitle: setDocumentTitle,
  loadMore: loadMore
}
