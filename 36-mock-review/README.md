# Shoe Store
Today, you'll be starting your own e-commerce store! You'll be selling shoes and like any self-respecting business, you allow your customers to leave reviews on the shoes you sell. Although the backend has been set up for you, it is your job to build out the proper functionality in the front end with JavaScript!

# Deliverables

* When a user loads the page, they should be able to see a list of all the shoes in the sidebar and by default, have the first shoe rendered in the main container (see deliverable 2).
* When a user clicks on one of the shoes in the sidebar, they should be able to see more details about the shoe, the reviews associated with it and a form in the main container. There should only be one shoe in the main container at one time.
* When a user fills the form out and submits it, the review should get persisted in the backend and also be shown on the page, without refreshing. When you create a review for a given shoe, if you click on another shoe and you go back to your initial shoe, you should see the new review persist without refreshing.

# API
```
$ cd ShoesAPI              # Change into the directory
$ bundle install           # Install the appropriate dependencies/gems
$ rails db:migrate         # Migrate the database
$ rails db:seed            # Seeds the database
$ rails server             # Start the server
```

## Getting All Shoes For the Sidebar (Deliverable 1)

```JavaScript
#=> Example Request
  GET 'http://localhost:3000/shoes'
#=> Example Response
[
  {
    "id": 1,
    "name": "Crocs Classic Clogs",
    "company": "Crocs",
    "price": 39,
    "image": "https://media.journeys.com/images/products/1_547493_ZM.JPG",
    "description": "Most comfortable shoes!",
    "reviews": [
      {
        "id": 1,
        "content": "All my friends are jealous of me because of this shoe!"
      },
      {
        "id": 2,
        "content": "This shoe saved my love life."
      }
    ]
  },
  {
    "id": 2,
    "name": "Birko Flor Nubuck Mocha",
    "company": "Birkenstock",
    "price": 99,
    "image": "https://www.birkenstock.com/on/demandware.static/-/Sites-master-catalog/default/dw573eb793/151183/151183.jpg",
    "description": "Goes well with socks.",
    "reviews": [
      {
        "id": 3,
        "content": "Worth every penny!"
      }
    ]
  },
  // ...
  ]
```

The HTML of how you should render the shoes in the `#shoe-list` should look like the following:

```html
<li class="list-group-item">Crocs Classic Clogs</li>
```

## Getting One Shoe for the Main Container (Deliverable 2)

```JavaScript
#=> Example Request
  GET 'http://localhost:3000/shoes/1'
#=> Example Response
  {
    "id": 1,
    "name": "Crocs Classic Clogs",
    "company": "Crocs",
    "price": 39,
    "image": "https://media.journeys.com/images/products/1_547493_ZM.JPG",
    "description": "Most comfortable shoes!",
    "reviews": [
      {
        "id": 1,
        "content": "All my friends are jealous of me because of this shoe!"
      },
      {
        "id": 2,
        "content": "This shoe saved my love life."
      }
    ]
  }
```

The HTML of how you should render the selected shoe in the `#main-shoe` should look like the following:

```HTML
<img class="card-img-top" id="shoe-image" src="https://media.journeys.com/images/products/1_547493_ZM.JPG">
<div class="card-body">
  <h4 class="card-title" id="shoe-name">Crocs Classic Clogs</h4>
  <p class="card-text" id="shoe-description">Most Comfortable Shoes!</p>
  <p class="card-text"><small class="text-muted" id="shoe-price">39</small></p>
  <div class="container" id="form-container">
    <!-- FORM GOES HERE -->
  </div>

</div>
<h5 class="card-header">Reviews</h5>
<ul class="list-group list-group-flush" id="reviews-list">
  <!-- REVIEWS GO HERE -->
</ul>
```

And the HTML of how you should render the form in the `#form-container` should look like the following:

```html
<form id="new-review">
  <div class="form-group">
    <textarea class="form-control" id="review-content" rows="3"></textarea>
    <input type="submit" class="btn btn-primary"></input>
  </div>
</form>
```

And the HTML of how you should render one of the reviews in the `#reviews-list` should look like the following:

```html
<li class="list-group-item">All my friends are jealous of me because of this shoe!</li>
```

## Submitting the Form (Deliverable 3)

```JavaScript
#=> Example Request
  POST `http://localhost:3000/shoes/${shoe_id}/reviews`

  Required Headers:
  {
    'Content-Type': 'application/json'
  }

  Required Body:
  {
    content: "Content of the Review"
  }

#=> Example Response
  {
    id: 100,
    content: "Content of the Review"
  }
```

When the `#new-review` form is submitted, we want the new review appended to the `#reviews-list`.
