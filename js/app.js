
$('#flashMessage').hide();//this hides te message first it will only show up when the user clicks the button

//select preview button
$('#previewButton').click(function(){
   //select title field & store into variable
   const title = $('#blogTitleInput').val();//call val method that retrieves whatever the user has type into the field.    
  
  
  //do the same for the content area
  const content = $('#blogContentInput').val();
  
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

   $('#flashMessage').slideDown(1000).delay(2000).slideUp();
  //console.log(title);
});




