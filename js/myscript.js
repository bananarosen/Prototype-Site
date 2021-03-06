// Declaring global variables
var taskentered = "";
var familymember = "";
var task;

//hiding the add task view part of the page that will be useful later
$(document).ready(function() {
    $("#add_task_container").hide();
    $("#change_person_container").hide();
    $(".toolbox").hide();
});

//switching to the add task view
$("#add_task").click(function(){
    $("#family_list_container").hide();
    //resetting the task value field
    $("#task_field").val("");
    $("#add_task_container").show(); 
    $("#header").text("Add Task");
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
    $("#family_list").append('<li class="list-group-item">' + '<span class="label"><img src="img/'+ familymember+ '.jpg" width="20" height="20" class=' + familymember + '></span> <span class="basic_task">'+ taskentered + ' </span><span class="glyphicon glyphicon-pencil"></span><span class="glyphicon glyphicon-remove float_right"></span><span class="glyphicon glyphicon-ok float_right"></span></li>');
    $("#header").text("Family List");
    createOnClickListenerRemove(); 
});


//function to hold the delete task function
function createOnClickListenerRemove() {
$(".glyphicon-remove").click(function(){
    $(this).parent().fadeOut(500).remove();
});
};

createOnClickListenerRemove(); 

//function to toggle the crossing off an item
$('#family_list_container').on('click', '.glyphicon-ok', function() {
    $(this).parent().toggleClass("task_done");
}); 


//function to open the edit task view
$('#family_list_container').on('click', '.glyphicon-pencil', function(){
   $("#family_list_container").hide();
   $(".person").removeClass("person_selected");
   task = $(this).parent();
   taskentered = $(task).text().trim();
   $("#task_change_field").val(taskentered);
   $("#change_person_container").show();
   $("#header").text("Edit Task");
   familymember = $(task).find("img").attr("class");
});

//function to implement changes into the main function
$("#complete_change").click(function(){
   $(task).find("img").attr("src", 'img/' + familymember + '.jpg');
   $(task).find("img").removeClass();
   $(task).find("img").addClass(familymember);    
   taskentered = ($("#task_change_field").val());
   $(task).find(".basic_task").text(taskentered);
   $("#change_person_container").hide();
   $("#family_list_container").show();
   $("#header").text("Family List");
});

//function to show only the kim's tasks
$("#my_list").click(function(){
   $("img.kanye").parents("li").hide();   
   $("img.north").parents("li").hide();
   $("img.saint").parents("li").hide();
   $("li.active").removeClass("active");
   $("#my_list").parent().addClass("active");
   $("#header").text("My List");
});

//function to switch back to family list
$("#fam").click(function(){
  console.log("been clicked");
  $("li.active").removeClass("active");
  $("#fam").parent().addClass("active");
  $(".list-group-item").show();
  $("#header").text("Family List");
}); 







