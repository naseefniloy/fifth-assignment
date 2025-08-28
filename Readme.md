### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- `getElementById()`: Selects a single element by its ID attribute. IDs should be unique, so this returns one element.

- `getElementsByClassName()`: Selects all elements with a specific class name. Returns a live HTMLCollection that updates automatically as the document changes.

- `querySelector()`: Selects the first element that matches a CSS selector. More versatile as it can use any CSS selector.

- `querySelectorAll()`: Selects all elements that match a CSS selector. Returns a static NodeList that doesn't update automatically.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element:
1. Create the element: `const newElement = document.createElement('div');`
2. Add content/attributes: `newElement.textContent = 'Hello World';`
3. Insert into DOM using methods like:
   - `parent.appendChild(newElement)` - adds as last child
   - `parent.insertBefore(newElement, referenceElement)` - inserts before reference element
   - `parent.replaceChild(newElement, oldElement)` - replaces existing element

### 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event starts from the target element and propagates upward through its ancestors in the DOM tree. For example, when a button is clicked, the click event first fires on the button, then on its parent, then on the parent's parent, and so on up to the document object.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where we attach a single event listener to a parent element to handle events triggered on its child elements. This works due to event bubbling.

It's useful because:
- It reduces memory usage by minimizing the number of event listeners
- It works for dynamically added elements without needing to attach new listeners
- It simplifies code when dealing with many similar elements

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- `preventDefault()`: Prevents the default behavior of an event (e.g., preventing a form submission or a link navigation).

- `stopPropagation()`: Stops the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.