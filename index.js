const posts = [
  {
    name:     "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar:   "/images/avatar-vangogh.jpg",
    post:     "/images/post-vangogh.jpg",
    comment:  "just took a few mushrooms lol",
    likes:    21
  },
  {
    name:     "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar:   "/images/avatar-courbet.jpg",
    post:     "/images/post-courbet.jpg",
    comment:  "i'm feelin a bit stressed tbh",
    likes:    4
  },
  {
    name:     "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar:   "/images/avatar-ducreux.jpg",
    post:     "/images/post-ducreux.jpg",
    comment:  "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes:    152
  }
];

const container = document.getElementById("posts-container");

function renderPosts() {
  posts.forEach(post => {
    const article = document.createElement("article");
    article.classList.add("post");

    article.innerHTML = `
      <header class="post-header">
        <img src="${post.avatar}"
             alt="${post.name}’s avatar"
             class="avatar">
        <div class="user-info">
          <h2 class="username">${post.name}</h2>
          <p class="location">${post.location}</p>
        </div>
      </header>
      <figure class="post-image">
        <img src="${post.post}"
             alt="Artwork by ${post.username}">
      </figure>
      <footer class="post-footer">
        <nav class="actions">
          <img src="/images/icon-heart.png"
               alt="Like"
               class="icon like">
          <img src="/images/icon-comment.png"
               alt="Comment"
               class="icon comment">
          <img src="/images/icon-dm.png"
               alt="Direct Message"
               class="icon dm">
        </nav>
        <p class="likes">${post.likes.toLocaleString()} likes</p>
        <p class="caption">
          <strong>${post.username}</strong> ${post.comment}
        </p>
      </footer>
    `;

    container.appendChild(article);

    const likeIcon = article.querySelector(".icon.like");
    const likesEl  = article.querySelector(".likes");

    // initialize liked state
    post._liked = post._liked || false;
    likeIcon.classList.toggle("liked", post._liked);

    // click to toggle like
    likeIcon.addEventListener("click", () => {
      post._liked = !post._liked;
      post.likes += post._liked ? 1 : -1;
      likesEl.textContent = `${post.likes.toLocaleString()} likes`;
      likeIcon.classList.toggle("liked", post._liked);
    });

    // dblclick image to like
    const imgEl = article.querySelector(".post-image img");
    imgEl.addEventListener("dblclick", () => {
      if (!post._liked) likeIcon.click();
    });
  });
}

document.addEventListener("DOMContentLoaded", renderPosts);
