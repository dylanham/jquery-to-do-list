## jQuery & Rails Integration

You will be implementing CRUD features using jQuery to create, update, and destroy To-Do List Items on a single page application.

### Iteration Zero | Appending with jQuery

-  Clone this app, create a database, run migrations, run the server.
-  Intercept the default form behavior to append a To-Do ListItem to the List. This does item does not have to persist through refreshing the page.

### Iteration One | POST with jQuery

-  Using jQuery, make the form submit a `POST` request to `list_items_controller#create`. This should submit parameters that create a new ListItem. When you refresh the page, you should see your new ListItem.
  -  You will likely use [ajax](http://api.jquery.com/jquery.ajax/) to make this request.
  -  You will likely need to [serialize](https://api.jquery.com/serialize/) the data from the form for it to successfully run in the rails controller.

### Iteration Two | Updating the DOM

-  Update the functionality above to update the To-Do List without requiring a page refresh. It may be helpful to make use of the `success` setting in the `ajax` request.

### Iteration Three | Toggling Completion

-  In a similar fashion to the above iterations, implement a feature which will toggle complete on the ListItem. This should update the DOM without a page refresh.

### Iteration Four | Deleting ListItems

- Add a delete button for each ListItem. When clicked, it should remove the ListItem from the database as well as the DOM. This should persist through page refreshes.

### Iteration Five | Editing ListItems

-  Make the content of each ListItem an input field that allows you to change the text. Upon clicking _out_ of the input box, save the next text to the database so that it persists on page refresh.

### Iteration Six | Extracting Rails && Javascript

-  Create a node server with a single page which looks as close as possible to the rails root page. Your node server should post to the rails server (you'll have two localhost servers running), and the functionality should remain the same.