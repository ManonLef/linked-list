### Assignment

You will need two classes or factories:

- [x] 1. `LinkedList` class / factory, which will represent the full list.
- [x] 2. `Node` class / factory, containing a `value` property and a link to the `nextNode`, set both as `null` by default.

Build the following functions in your linked list class:

- [x] 1. `append(value)` adds a new node containing `value` to the end of the list
- [x] 2. `prepend(value)` adds a new node containing `value` to the start of the list
- [x] 3. `size` returns the total number of nodes in the list
- [x] 4. `head` returns the first node in the list
- [x] 5. `tail` returns the last node in the list
- [x] 6. `at(index)` returns the node at the given `index`
- [x] 7. `pop` removes the last element from the list
- [x] 8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- [x] 9. `find(value)` returns the index of the node containing value, or null if not found.
- [x] 10. `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    The format should be: `( value ) -> ( value ) -> ( value ) -> null`

### Extra Credit

- [x] 1. `insertAt(value, index)` that inserts a new node with the provided `value` at the given `index`.
- [x] 2. `removeAt(index)` that removes the node at the given `index`.

**Extra Credit Tip:** When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their `nextNode` link updated.

## Notes / extras

- [ ] go through functions to make sure no errors are thrown for empty lists
- [ ] refactor
