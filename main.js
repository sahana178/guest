name_student_array=[];

function submit(){

    var student_array =[];
  for(var j=1; j <= 4; j++){
      var student_name= document.getElementById("name_of_the_student_"+j).value;
      console.log(student_name);
      name_student_array.push(student_name);

  }

  console.log(name_student_array);
  var length_array=name_student_array.length;
  console.log(length_array);


  for(var k=0; k< length_array; k++){
       student_array.push("<h4> Name -"+ name_student_array[k]+"</h4>");
       console.log(student_array);
  }
  console.log(student_array);
  document.getElementById("display_name_with_commas").innerHTML=student_array;

  var remove_comma= student_array.join(" ");
  console.log(remove_comma);
  document.getElementById("display_name_without_commas").innerHTML=remove_comma;

  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";


}

function sorting(){

name_student_array.sort();
console.log(name_student_array);
var student_array_sorting=[];

var length_array=name_student_array.length;
console.log(length_array);

for(var k=0; k< length_array; k++){
    student_array_sorting.push("<h4> Name -"+ name_student_array[k]+"</h4>");
    console.log(student_array_sorting); 
}

var remove_comma= student_array_sorting.join(" ");
  console.log(remove_comma);
  
  document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}

