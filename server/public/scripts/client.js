
/////////////////////////////////////////////////////////
console.log('client.js working!!');
/////////////////////////////////////////////////////////

$(document).ready(function(){
    console.log('JQUERY in the house!!');
    refreshTasks();
    addClickHandlers();
    //renderTasks();//shows all the tasks in the checklist 
});

/////////////////////////////////////////////////////////

/////////////////////////START 'clickHandlers' FUNCTION/////////////////////////////
function addClickHandlers() {
    $('#addButton').on('click', handleAddTaskButton);
    $('#taskShelf').on('click', 'button', deleteTask);
    //$('#bookShelf').on('click', '.completedMarker', handleMarkRead);
  };


/////////////////////////END 'clickHandlers' FUNCTION/////////////////////////////

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
                <td><button class="completedMarker" data-id="${task.id}" data-completed-status="${task.completed}">Completed</button> </td>
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
    }).then((response) => {
        console.log('working delete function', response);
        renderTasks();
        
    })
    
}

/////////////////////////END 'deleteTask' FUNCTION//////////////////////////////////////

/////////////////////////START 'addTask' FUNCTION//////////////////////////////////////
function addTask(taskToAdd) {
    console.log('inside addTask function POST');

    $.ajax({
        type: 'POST',
        url: '/checklist',
        data: taskToAdd,
    })
    .then((response) => {
        console.log('response client POST ', response);
        renderTasks();
        refreshTasks(); //CREATE FUNCTION
        
        
    }).catch((error) => {
        console.log('Error in POST client', error);
        alert('Sorry, cannot add Task at this moment.');
        
    }); ////NEXT, CREATE A FUNCTION FOR THE 'addButton' TO RUN THIS^^

}
/////////////////////////END 'addTask' FUNCTION//////////////////////////////////////

/////////////////////////START 'handleAddTaskButton' FUNCTION//////////////////////////////////////
function handleAddTaskButton() {
    console.log('Add button clicked!');

    let taskAdded = {};
    taskAdded.task = $('#taskInput').val();
    taskAdded.due_date = $('#dueDateInput').val();

    addTask(taskAdded);
    
    $('#taskInput').val("");
    $('#dueDateInput').val(""); //to empty after input

    console.log('New added task is:', taskAdded);
    
};
///////////////////END 'handleAddTaskButton' FUNCTION//////////////////////////////////////

///////////////////START 'refreshTasks' FUNCTION//////////////////////////////////////

function refreshTasks() {
    $.ajax({
      type: 'GET',
      url: '/checklist'
    }).then(function(response) {
      console.log(response);
      renderTasks(response);
    }).catch(function(error){
      console.log('error in client GET refreshTasks', error);
    });
  }

///////////////////END 'refreshTasks' FUNCTION//////////////////////////////////////
