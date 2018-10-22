var todo=[]; //empty array 

//take input from user
var input=prompt("what would you like to do?");
while(input!="quit"){
// now performing actions based on the user input
if(input==="list"){
	//console.log(todo);
	// here we simply display all the activities
	// here we display each todo in a new line
	for(var i=0;i<todo.length;i++){
		console.log(i +":" + todo[i]);
	}
}

else if(input==="new"){
	//ask the user for new to do
	var newtodo=prompt("what you want to add to your todos?");
	//add the new todo to the todo array
	todo.push(newtodo);
}
// if input=delete
//here we want to delete a specific todo based on index
else if(input==="delete"){
	var d=prompt("enter the index to be deleted");
	todo.splice(d,1);
}

input=prompt("what would you like to do?");
}
