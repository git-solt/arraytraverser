require('./index.js')

if (!Array.prototype.smoothTraverser) {
    Array.prototype.smoothTraverser = function () {
        let toRight = true
        const iter = this.traverser()


        function next() {

            if (!iter.atEnd) {
                if (!toRight) {
                    iter.next()
                    toRight = true
                }


                return iter.next()
            }
        }

        function prev() {
            if(!iter.atStart) {
                if(toRight ) {
                    iter.prev()
                    toRight = false
                }
                
         
                return iter.prev()
            }
          }

          return {
              next,
              prev
          }
        
    }
}




