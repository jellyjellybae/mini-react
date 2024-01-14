const el = document.createElement('div')
el.innerText='😘'
let i = 0
while (i < 10) {
  document.body.append(el)
  console.log(i)
  i++
}