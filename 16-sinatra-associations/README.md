Sinatra Relationships
===

## SWBATs
- Use ActiveRecord association methods on models in a Sinatra application
- Create multiple controllers to handle multiple RESTful resources
- Use ActiveRecord associations to look up information in a view file
- Use the `<select>` tag to display a dropdown menu

## Outline
- [ ] Review CRUD
- [ ] Add a second model to our domain
- [ ] Come up with user stories for our application and see how they can be solved with REST
- [ ] List the instances related model on the show page for the class that `has_many` of the other class
- [ ] Create the `new` and `create` routes for the other model (with `belongs_to`)

## Notes

### Controllers in Sinatra

Once our application starts to get more complex and we have multiple models that we'd like to create views for, we need to start separating our logic out to multiple controller files. This will keep our `ApplicationController` from getting to big and will help us separate out the routing logic based on RESTful conventions for each of our models. 

First, we need to create a new controller file for each of our models. Controller names should be _plural_, since route names are all plural:

_app/controllers/movies_controller.rb_
```rb
  class MoviesController < ApplicationController
    # movie routes here!
  end
```

All our new controllers should inherit from our `ApplicationController` instead of inheriting directly from `Sinatra::Base` directly. That way we can set up any configuration that applies to all controllers in one place - the ApplicationController.

We also need to configure our application to use this new controller in the `config.ru` file:

```rb
  
run ApplicationController
use MoviesController # can go before or after run ApplicationController
```

Finally, we'll also need to create a new folder for all the view files for this particular model. Then our controller can refer to these view files using the folder name + the file name - this keeps them separate from view files pertaining to other models in our application:

```rb
  class MoviesController < ApplicationController
    
    get '/movies' do
      erb :"movies/index"
    end
  end
```

