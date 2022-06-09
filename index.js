// code your solution here


function superbowlWin(record) {
  let win = record.find(obj => obj.result === "W")

  if (win) {
    return win.year
  }
}