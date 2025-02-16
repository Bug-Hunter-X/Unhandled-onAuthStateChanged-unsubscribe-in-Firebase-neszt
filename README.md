# Unhandled onAuthStateChanged unsubscribe in Firebase

This repository demonstrates a common error in Firebase authentication: failing to unsubscribe from the `onAuthStateChanged` listener.  This can lead to memory leaks and unexpected behavior in your application.

The `bug.js` file shows the incorrect implementation. The `onAuthStateChanged` listener is attached, but the returned unsubscribe function is never called. 

The `bugSolution.js` file provides the corrected implementation, where the unsubscribe function is called appropriately using useEffect hook in React. This ensures that the listener is removed when the component unmounts, preventing memory leaks.

## How to reproduce

1. Clone this repository.
2. Run the `bug.js` code (after setting up Firebase).
3. Observe memory usage over time.  The memory leak will gradually become apparent.
4. Run the `bugSolution.js` code. Memory usage should remain stable.

## Solution

Always call the unsubscribe function returned by `onAuthStateChanged` when it's no longer needed.  In React, the `useEffect` hook provides a clean way to handle this, ensuring cleanup when the component unmounts.