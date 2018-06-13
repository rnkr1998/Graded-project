  
  function fullPost(){
    window.location.href="./post.html";
  }
  function onDeletePost(){
    document.getElementById('deletePostPrompt').style.display='block';
  }
  function onCloseDeleteClicked() {
    document.getElementById('deletePostPrompt').style.display='none';
    }