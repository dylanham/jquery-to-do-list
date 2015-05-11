## jQuery & Rails Integration

You will be implementing CRUD features using jQuery to create, update, and destroy To-Do List Items on a single page application.

### Iteration Zero | Creating Items with jQuery

-  Using jQuery, make the form submit a `POST` request to `list_items_controller#create`. This should submit parameters that create a new ListItem. When you refresh the page, you should see your new ListItem.
  -  You can use [post](https://api.jquery.com/jquery.post/) or [ajax](http://api.jquery.com/jquery.ajax/).

### Iteration One | Updating the DOM

-  Update the functionality above to update the To-Do List without requiring a page refresh. 

### Iteration Two | Toggling Completion

-  In a similar fashion to the above iterations, implement a feature which will toggle complete on the ListItem. This should update the DOM without a page refresh.

### Iteration Four | Deleting ListItems

- Add a delete button for each ListItem. When clicked, it should remove the ListItem from the database as well as the DOM.