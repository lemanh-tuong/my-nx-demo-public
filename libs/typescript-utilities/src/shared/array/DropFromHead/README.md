# Overview
The `DropFromHead` utility function provides an efficient way to remove a specified number of elements from the beginning (head) of an array. This function is especially useful when you need to skip or ignore the first few elements of an array without modifying the original data structure. Designed for performance and type-safety, this utility ensures that the original array remains unchanged while producing a new array with the desired elements removed.

# Usage
To utilize the `DropFromHead` function, supply it with an array and the number of elements you wish to drop from the head. The utility will create and return a new array, omitting the specified number of elements from the beginning of the provided array.
```typescript
type ResultType = DropFromHead<List>
```
# Example
To drop the first two elements from this tuple type, use the `DropFromHead` type utility:
```typescript
type Case1 = DropFromHead<[1, 2, 3, 4, 5], 2>; // [3, 4, 5]
```
