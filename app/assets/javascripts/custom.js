$(document).ready(function() {
	$(".form-submit").on("click", function(e) {
    var answer = $('#list_item_content').val();
    $.ajax({
      type: "POST",
      url: "/list_items",
      data: { "list_item": {'content': answer}},
      success: function(data) {
        var content = "<td>" + data.content + "</td>"
        var completed = "<td>" + data.complete + "</td>"
        var toggle = "<td><button class='toggle-complete' data-id=" + data.id + ">Toggle Completion</button></td>"
        // <td><button class="delete-button" data-id=<%= list_item.id %>> Delete </button></td>
        var deleteButton = "<td><button class='delete-button' data-id=" + data.id +">Delete</button></td>"
        $('tbody').append("<tr>" + content + completed + toggle + deleteButton +'</tr>' );

        }
    });
		e.preventDefault();
	});
  $(document).on("click", '.toggle-complete', function(){
    var clicked = this;
    console.log(this.getAttribute('data-id'));
    $.ajax({
      type: "POST",
      url: "/list_items/" + this.getAttribute('data-id') + "/toggle",
      success: function(data) {
        $(clicked).closest('tr').find('td')[1].innerText = data.complete;
      }
    });
  });
  $(document).on('click', '.delete-button', function(e){
    var clicked = this;
    $.ajax({
      type: "DELETE",
      url: "/list_items/" + this.getAttribute('data-id'),
      success: function(data) {
        $(clicked).closest('tr').remove();
      }
    })
    e.preventDefault();
  })
	$(document).on('focus','.content-list', function(){
		console.log($(this).find('input').val());
	});
});
