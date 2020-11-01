# Simple usage pre version 1.1.0



###### import

`require('arraytraverser')`

###### Instantiate iterator

`const iterator = [1,2,3,4].traverser()`

###### Traverse your array

`iterator.next() // 1`
`iterator.next() // 2`
`iterator.prev() // 2`
`iterator.prev() // 1`

Go to [wikipage](https://github.com/git-solt/arraytraverser/wiki) for full example on how to improve the functionality when traversing.

## Versin 1.1.0

Features a new Iterator that does those extra steppes for you when changing direction

In this version both iterators will be available from the import

###### import 

`require('arraytraverser/smoother')`

###### Instantiate iterator

`const iterator = [1,2,3,4].smoothTraverser()`

###### Traverse your array

`iterator.next() // 1`
`iterator.next() // 2`
`iterator.prev() // 1`
`iterator.prev() // undefined`
`iterator.next() // 2`

