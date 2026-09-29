const searchInput = document.getElementById("tag-search");
const results = document.getElementById("tag-results");

let posts = [];

fetch("/search.json")
  .then(response => response.json())
  .then(data => {
    posts = data;
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  results.innerHTML = "";

  if (!query) {
    return;
  }

  const matchingPosts = posts.filter(post =>
    post.tags.some(tag =>
      tag.toLowerCase().includes(query)
    )
  );

  matchingPosts.forEach(post => {
    const article = document.createElement("article");

    const link = document.createElement("a");
    link.href = post.url;
    link.textContent = post.title;

    const tags = document.createElement("small");
    tags.textContent = post.tags.join(" · ");

    article.appendChild(link);
    article.appendChild(document.createElement("br"));
    article.appendChild(tags);

    results.appendChild(article);
  });
});