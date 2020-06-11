# Lessons  

I implemented functionality first and then tried to refactor components and UI afterwards. This seems like a bad idea and instead the workflow should be to implement stub components first and then start implementing functionality.

## Global State  

we can represent global state by using context. The only drawback for now is that for cases where we have a large context object, whenever any part of the context is updated, every single component that uses the global context also gets updated.

## Reducer  

The purpose of the reducer is to provide action or event handling for contexts. This is done by using dispatch. This dispatch stuff still feels a bit wonky. so many random functions being passed around. First declare an "action" with dispatch in the global context, then pass it down with the wrapping global context provider, then go to the reducer and write a corresponding case to handle the action/payload of this dispatch, then actually go down to the prop which will generate the action and write another function to pass appropriate arguments to the function handed down from the global context provider. ![facepalm](https://static.tvtropes.org/pmwiki/pub/images/deja_q_hd_046_resized_6484.jpg)
