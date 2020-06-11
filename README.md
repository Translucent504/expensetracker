# Lessons  

I implemented functionality first and then tried to refactor components and UI afterwards. This seems like a bad idea and instead the workflow should be to implement stub components first and then start implementing functionality.

## Global State  

we can represent global state by using context. The only drawback for now is that for cases where we have a large context object, whenever any part of the context is updated, every single component that uses the global context also gets updated.

## Reducer  

The purpose of the reducer is to provide action or event handling for contexts. This is done by using dispatch.