# Key Questions
* What is REST again and why do we still care about it?
* What is json-server and how can it help us prototype a RESTful API?
* How can I work with an API that responds with a list of JSON objects?
* How can I create data in a RESTful API using fetch?

## If there's time
* How can I handle errors with fetch?
* What's one way I can organize my `fetch`es?
* What's another strategy for handling our application's state?

1. When X event happens
2. Make Y fetch happen
3. Slap Z on the DOM!

Things to talk about:
- what happens in a fetch, promises vs response object
- delegation vs closure
- fetch using https verbs

## Deliverables

- [x] When the page loads, fetch all todo items and add them to the `to-do-items` list. Each `li` should have the following HTML:

```html
<li class="item">
  <input id="to-do-item-1" type="checkbox" checked />
  <label for="to-do-item-1" class="js-title middle aligned content">Walk the cat</label>
  <button>×</button>
</li>
```

- [x] When a user submits the `new-to-do` form, create a new todo item. The new todo item should be persisted in the back end and should also be added to the `to-do-items` list.
- [x] When a user clicks the "X" button next to a todo item, the todo item should be removed from the DOM and deleted on the server.
- [ ] When a user clicks the checkbox next to a todo item on the page, the todo's "done" status should toggle between true and false. This information should be persisted on the backend and should also be reflected in the DOM.

## API Documentation
When you're fetching data from a remote source, you won't always have control over how the server expects _requests_ to be formatted, and what kind of data you'll get in the _response_.

In this lecture, we'll get some practice reading API documentation and understanding how to format our `fetch` requests, and how the data in the response will be formatted.

By the end of this mod, you'll have all the tools for building your own API server on Rails, but for now, we can use a tool called `json-server` to easily spin up a RESTful API. Here are the different endpoints we can use on out `json-server` API.

### Read

*Get all todos*
```


sample response:
[
  {
    "id": 1,
    "title": "Make fetch happen",
    "done": true
  },
  {
    "id": 2,
    "title": "Master JavaScript",
    "done": false
  }
]
```

### Create

*Create new todo*
```


Required Headers:
{
  "Content-Type: "application/json"
}

Body:
{
  "title": _string_,
  "done": _boolean_
}

sample response:
{
  "title": "Create new todo",
  "done": true,
  "id": 4
}
```

### Delete

*Delete one todo*
```


sample response:
{}
```

### Update

*Update one todo*
```


Required Headers:
{
  "Content-Type: "application/json"
}

Body (note: you don't have to send all keys!):
{
  "title": _string_,
  "done": _boolean_
}

sample response:
{
  "title": "Update todo",
  "done": false,
  "id": 4
}
```
