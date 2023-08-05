document.getElementById('get-comment-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var projectId = document.getElementById('project-id').value;
    
    fetch(`https://api.scratch.mit.edu/users/${username}/projects/${projectId}/comments`)
      .then(response => response.json())
      .then(comments => {
        if (comments.length > 0) {
          var randomComment = comments[Math.floor(Math.random() * comments.length)];
          displayComment(randomComment);
        } else {
          displayErrorMessage("No comments found for the given username and project ID.");
        }
      })
      .catch(error => {
        displayErrorMessage("An error occurred while fetching the comments.");
      });
  });
  
  function displayComment(comment) {
    var commentContainer = document.getElementById('comment-container');
    commentContainer.innerHTML = `
      <div class="comment">
        <p><strong>Author:</strong> ${comment.author.username}</p>
        <p><strong>Content:</strong> ${comment.content}</p>
        <p><strong>Date:</strong> ${comment.datetime_created}</p>
        <img src="${comment.author.image}" alt="Author's avatar">
      </div>
    `;
  }
  
  function displayErrorMessage(message) {
    var commentContainer = document.getElementById('comment-container');
    commentContainer.innerHTML = `<p>${message}</p>`;
  }
  