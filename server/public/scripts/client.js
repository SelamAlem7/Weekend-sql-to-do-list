
/////////////////////////////////////////////////////////
console.log('client.js working!!');

$(document).ready(function(){
    console.log('JQUERY in the house!!');
 $('#taskShelf').on('click', 'button', deleteTask);
    renderTasks();//shows all the tasks in the checklist 

    
});

/////////////////////////////////////////////////////////

/////////////////////////START 'renderTasks' FUNCTION/////////////////////////////
//here we will respond to the GET request from router to grab our entire checklist.
function renderTasks(tasks) {
    console.log('in clients renderTasks function');
    $('#taskShelf').empty();
    //console.log('taskshelf in GET route');
    $.ajax({
        type: 'GET',
        url: '/checklist'
    }).then((response) => {
        for (let task of response) {
            $('#taskShelf').append(`
                <tr>
                <td>${task.task}</td>
                <td>${task.due_date}</td>
                <td><button data-id="${task.id}">DELETE</button></td>
                <td><button class="completedButton" data-id="${task.id}" data-completed-status="${task.completed}">Completed</button> </td>
                </tr>
            `);
        }
    });
    
}
/////////////////////////END 'renderTasks' FUNCTION//////////////////////////////////////

/////////////////////////START 'deleteTask' FUNCTION//////////////////////////////////////
//now that we have our table showing from the database, we will try to delete a task:
function deleteTask() {
    console.log('Delete button clicked!');

    const taskToDelete = $(this).data('id');//giving the task we delete a value of an /id
    $.ajax({//here we are requesting our server to delete:
        type: 'DELETE',
        url: `/checklist/${taskToDelete}`
    }).then((respond) => {
        console.log('working delete function', response);
        renderTasks();
        
    })
    
}





















/////////////////////////END 'deleteTask' FUNCTION//////////////////////////////////////

/////////////////////////////////////////////////////////











/////////////////////////////////////////////////////////

