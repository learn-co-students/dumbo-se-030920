Sinatra CRUD Part 1

## SWBATs
- Make a CRUD app using Sinatra
- Demonstrate how REST is used with CRUD
- Understand the difference between static and dynamic routes
- Know how to write the following HTML tags: `<a>`, `<form>`, `<input>`
- Understand what information Sinatra uses to create the `params` hash
- Get information from the `params` hash in a controller method
- Understand the difference between rendering and redirecting, and when to use one strategy or the other

## Review
- different parts of MVC

## Outline
- Part 1.1: review our code from yesterday, update our index view and create a show view
  - Links
  - Dynamic Routing
- Part 1.2: work on the Create part of CRUD
  - Forms
  - Creating w/Mass Assigmnent

## REST & CRUD
- [ ] Create
  - [ ] GET '/breaks/new' -> Show the user a form to create a new break
  - [ ] POST '/breaks' -> Create a new break in our database
- [] Read
  - [x] GET '/breaks' -> Show all breaks
  - [] GET '/breaks/:id' -> Show one break
- [ ] Update
  - [ ] GET '/breaks/:id/edit' -> Show the user a form to edit an existing break break
  - [ ] PATCH '/breaks/:id' -> Update the break in our database
- [ ] Delete
  - [ ] DELETE '/breaks/:id' -> Delete the break from our database

### Static vs Dynamic Routes

Let's say we want to get the show page for a specific movie in our application. In our ApplicationController, we could hard code specific routes for each movie using their ID:

```rb
  get '/movies/1' do
    @movie = Movie.find(1)
    erb :show
  end

  get '/movies/2' do
    @movie = Movie.find(2)
    erb :show
  end

  get '/movies/3' do
    @movie = Movie.find(3)
    erb :show
  end
```

If we need to define a route to handle every possible id in our database, we'd have to hard code a route each time a new record got added to the database! This isn't very sustainable and makes our applications impossible to maintain. Instead, we can create dynamic routes handle any request that matches the __pattern__ that we define in our controller:

```rb
  get '/movies/:id' do
    @movie = Movie.find(params[:id])
    erb :show
  end
```

The part of the url that is dynamic (in the example above, it's the `:id` part) is then processed as part of the `params` hash by Sinatra so we can access it in the controller.

### Forms

So far, we've only given our user one way to interact with our website: by visiting a specific URL for a resource (`/movies` or `/movies/:id`). Forms are another way for users to interact with our application, and they give our users a nice interface to input specific kinds of data (text, numbers, etc). We'll typically use forms for the Create and Update parts of CRUD, but you might also come across forms in other contexts (like search forms).

To start, we'll need to set up a route in our controller to display a form:

```rb
  get '/movies/new' do
    erb :new
  end
```

In our `new.erb` file, we can generate the HTML for a form that will let a user create a new instance of a movie in our application:

```html
<form method="POST" action="/movies">
  <label for="title">Title</label>
  <input type="text" name="title" />
  <label for="runtime">Runtime</label>
  <input type="number" name="runtime" />
  <input type="sbumit" />
</form>
```

When we click SUBMIT to submit the form, the browser will send a request to the server. The HTTP verb for the request comes from the form's `method` attribute, and the path for the request comes from the `action` attribute.

Once the form is submitted, we need a place in our controller receive the request and do something with the user's data. All the information filled in by the user in our form will be available in the `params` hash as key/value pairs. The keys will match with the `name` attributes on our input fields, and the values will be whatever the user put in before submitting the form.

```rb
  post "/movie" do
    movie = Movie.create(title: params[:title], runtime: params[:runtime])
  end
```

Since ActiveRecord's create method accepts a hash as an argument, and our `params` is a hash, we can also use mass assingment to make our code a little cleaner:

```rb
  post "/movie" do
    movie = Movie.create(params)
  end
```

After the form is submitted and we've created an instance of a movie in our database, we still have one step left! The server is still responsible for sending some kind of response back to the client. Ideally, we'd like to take the user to the SHOW page for their newly created movie instance. We could just render the show view...

```rb
  post "/movie" do
    @movie = Movie.create(params)
    render :show
  end
```

But this isn't following restful convention! What if our show route had some additional logic in it? We'd have to recreate that logic in the create route as well, and then we're adding additional redundant code to our project. The better solution is to redirect the user to the show route. This will send an additional request to the server, which will hit our show route and run all the logic in that controller action:

```rb
  post "/movie" do
    movie = Movie.create(params)
    redirect to "/movies/#{movie.id}" # make another GET request to /movies/1
  end
```


### HTML 101

Here are a few important HTML tags and how they work. For a deeper dive into HTML, check out the [Mozilla Developer Network docs](https://developer.mozilla.org/en-US/docs/Web/HTML).

- Anchor Tag (`<a>`)
  - used to create links in our website
  - needs a `href` attribute to say what URL to request when a user clicks the link
  - when a user clicks a link, the browser sends a GET request to the URL specified in the `href` attribute
  - `<a href="/movies">Movies</a>`

- List Tags (`<ul>`, `<ol>`, `<li>`)
  - used to represent lists of information
  - `ul`: Unordered List, `ol`: Ordered list (numbered)
  - both `ul` and `ol` tags are used to contain `li` (list item) tags

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

- Input Tag (`<input>`)
  - used in conjunction with form tags to give the user a place to enter information
  - important attributes:
    - `name`: the name of the field, will be used on the server as part of the params hash
    - `type`: what kind of data this input field should be used for (text, number, password, etc)
    - `value`: what the INITIAL value of this input field is (useful for edit forms)
    - `placeholder`: text to display to the user before they input a value

- Form Tag (`<form>`)
  - used to give our users an interface to send information to our server
  - all forms must have a `method` attribute to specify the HTTP verb, and an `action` attribute to specify the URL -> this is how the browser knows what kind of request to make when the form is submitted
  - all forms must have a `submit` tag: `<input type="submit" />`, this will render a button to let the user submit the form after they've filled it out
  - forms can have other input fields: `<input type="text" />`, `<input type="number" />`, `<select>`...

```html
<form method="POST" action="/movies">
  <input type="text" name="title" placeholder="What's the title?" />
  <input type="number" name="runtime" placeholder="How long is it?" />
  <input type="sbumit" />
</form>
```
