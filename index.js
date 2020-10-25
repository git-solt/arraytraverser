if(!Array.prototype.traverser) {
  Array.prototype.traverser = function() {

    let index = 0
    const arr = this
  
    return (() => {
  
      function next() {
        if(index < 0) index ++
        const item = arr[index]
        if (index < arr.length) {
          index++
        }
        return item
      }
  
      function prev() {
        if(index > -1) {
         index --
        }
  
        return arr[index]
  
        
      }
      return {
        next,
        prev,
        get atStart() {
          return index === 0
        },
  
        get atEnd() {
          return index === arr.length 
        }
      }
    })()
  
  }
  
  
}







