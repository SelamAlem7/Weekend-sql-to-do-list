console.log('client.js working!!');

$(document).ready(function(){
    console.log('JQUERY in the house!!');
 
    renderTasks();
    
});

/////////////////////////////////////////////////////////

//here we will respond to the GET request from router to grab our entire checklist.
function renderTasks(tasks) {
    console.log('in clients renderTasks function');
    
    $('#taskShelf').empty();
    //console.log('empty taskShelf in clients GET route');
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










/////////////////////////////////////////////////////////











/////////////////////////////////////////////////////////

