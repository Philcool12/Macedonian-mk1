//Set todo list variable
//var todoList = JSON.parse(localStorage.getItem('todos'));

$(document).ready(function(){
//Set counter
//var i = 0
//Check for todos
//if (localStorage.getItem('todos')!=null){
    //Loop through and output li items
//    $.each(todoList, function(key, value){
//        $('#todos').prepend('<li id="task-'+i+'"><a id="todo_link" href"#edit" data-todo_name="'+value.todo_name+'" data-todo_date=+"'+value.todo_date+'">'+value.todo_name+'</a></li>');
//        $('#todos').prepend('<li id="task-'+i+'">'+value.todo_name+'</li>');

//        i++;
//    });
    //Refresh
//    $('#todos').listview('refresh');
//}

    //Add Todo
$('#save').submit(function(){
    //Get submitted values
 //   var todo_name = $('#todo_name').val();
    var todo_date = 4;
    //$('#todo_date').val();
    
    //Simple field validation
    if(todo_date == 4){
        alert('You have not completed the lesson'),0;
//        } else if (todo_date == '') {
//           alert('Please add a date');
//        } else {
//            var todos = JSON.parse(localStorage.getItem('todos'));
            //check todos
//            if(todos == null) {
//                todos = [];
//            }
            //Create array with new todo
//            var new_todo = {
//                "todo_name": todo_name,
//                "todo_date": todo_date
//            }
//            todos.push(new_todo);
//            localStorage.setItem('todos',JSON.stringify(todos));
        }
    })
})
//})

