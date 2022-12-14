function fitsInOneBox(boxes) {
    return boxes.every(({l,w,h}, idx) => {
      if (idx === boxes.length - 1) return true
      const nextBox = boxes[idx + 1] || {}
      const canFitsIn =  (nextBox.l > l && nextBox.w > w && nextBox.h > h) || (nextBox.l < l && nextBox.w < w && nextBox.h < h)
      return canFitsIn
    })
  }


  