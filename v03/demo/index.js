let taskId = 1
function WorkLoop (deadline) {
  taskId++
  let shouldYield = false
  while (!shouldYield) {
    console.log(`task ${taskId} run task`)
    shouldYield = deadline.timeRemaining() < 1
  }
  console.log(deadline.timeRemaining())
  
requestIdleCallback(WorkLoop)
}
requestIdleCallback(WorkLoop)
