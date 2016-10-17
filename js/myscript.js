// Declaring global variables
var taskentered = "";
var familymember = "";
var task;

//hiding the add task view part of the page that will be useful later
$(document).ready(function() {
    $("#add_task_container").hide();
    $("#change_person_container").hide();
});

//switching to the add task view
$("#add_task").click(function(){
    $("#family_list_container").hide();
    //resetting the task value field
    $("#task_field").val("");
    $("#add_task_container").show(); 
});

/*storing the name of the family member who was clicked on 
and also providing visual feedback of who was selected */
function storePerson () {
    $(".person").click(function(){
        familymember = ($(this).attr("id"));
        //removing the person_selected class if someone has previously been selected
        $(".person").removeClass("person_selected");
        $(this).addClass("person_selected");
    });
};

storePerson(); 

//Storing the new task as a string and adding the task to the list and setting delete and complete functions for the new tasks
$("#complete_add").click(function(){
    taskentered = ($("#task_field").val());
    $("#add_task_container").hide();
    $("#family_list_container").show();
    $("#family_list").append('<li class="list-group-item">' + '<span class="label"><img src="img/'+ familymember+ '.jpg" width="20" height="20"></span>' + taskentered + '<span class="glyphicon glyphicon-remove float_right"></span><span class="glyphicon glyphicon-ok float_right"></span></li>');
    createOnClickListenerRemove(); 
});


//function to hold the delete task 
function createOnClickListenerRemove() {
$(".glyphicon-remove").click(function(){
    $(this).parent().fadeOut(500);
});
};

createOnClickListenerRemove(); 

//function to toggle the crossing off an item
$('#family_list_container').on('click', '.glyphicon-ok', function() {
    $(this).parent().toggleClass("task_done");
}); 

$(".glyphicon-pencil").click(function(){
   $("#family_list_container").hide();
   $("#change_person_container").show();
   task = $(this).parent();
});


//function to change the person associated with a task
$(".image_label").click(function(){
    $("#family_list_container").hide();
    $("#change_person_container").show();
    storePerson();
    task = $(this);
});

$("#complete_change").click(function(){
   $(task).attr("src", 'img/' + familymember + '.jpg');
   $("#change_person_container").hide();
   $("#family_list_container").show();
});





