1. What problem does the context API help solve?
Context API allows us to avoid prop drilling from component to component, with the use of the useContext hook we have global access to props thus we can share state/props with an indirect manner via any child or parent. This helps us keep our state  clean.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: Are events that tell the reducer what to do, it causes changes to state.
Reducers:  it holds initial state and provides us a new state with the use of actions.
Store: contains the state for our app and wraps the entire app so that every component has access to it. It allows us to integrate state management and is necessary to enable Redux. 
When changes are made to the state the state object is cloned and replaced, never mutated - single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, while component state is local, meaning that while components depend on application state, a component may have its own state in order to perform asynchronous actions.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-Thunk allows us to perform those Async actions.  It changes our action creators when needed to perform side effects, it checks to see what is returned when an action creator is called and send the respective paylod to make state changes and make sure renderer doesn't break.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like Context API because it cuts down on the prop drilling.
