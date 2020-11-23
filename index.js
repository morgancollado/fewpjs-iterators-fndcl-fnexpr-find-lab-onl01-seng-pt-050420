const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(obj => {
    return obj.result === "W"
  })
return win ? win.year : undefined
}