
function createTextNode (text) {
  console.log(text,'<-text')
  
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function createElement (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextNode(child))
    }
  }
}

// const dom = document.createElement(App.type)
// dom.id = App.props.id
// const rootEl = document.querySelector('#root')
// rootEl.append(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = textEl.props.nodeValue
// dom.append(textNode)
/**
 *
 * @param {*} el
 * @param {*} container
 * 1. 创建 element
 *
 * 2. props
 * 3. append
 */
function render (el, container) {
  const dom = el.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(el.type)
  //props  id class 遍历
  Object.keys(el.props).forEach(key => {
    if(key!=="children"){
      dom[key] = el.props[key]
    }
  })
  const children = el.props.children
  children.forEach(child => {
    render(child, dom)
  })

  container.append(dom)
}
const React = {
  render,
  createElement
}
export default React