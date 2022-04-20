## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
body
h1- bold
main
section
section- italicize vanvouver wa
section
div
1. **For each HTML element ask: Why do I need this?**
body- all nested inside the body
h1- to display heading
main- sections nested in main
section- my name
section- my pronouns
section- where I live
div- my favorite animal, with button to show it pop up
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
body first with everything nested inside, then h1, then the main element with the sections nested inside on top of each other, with the div of favorite animal last.
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
when the button is clicked my favorite animal will appear in the div, it goes from a hidden div, to a picture of the animal
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
