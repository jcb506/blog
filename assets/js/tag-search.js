const searchInput = document.getElementById("tag-search");
const results = document.getElementById("tag-results");

let posts = [];

fetch(searchIndex)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    posts = data;
    console.log("Search index loaded:", posts);
  })
  .catch(error => {
    console.error("Error loading search index:", error);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  results.innerHTML = "";

  if (!query) {
    return;
  }

  const matchingPosts = posts.filter(post =>
    post.tags.some(tag =>
      tag.toLowerCase().includes(query)
    )
  );

  console.log("Search:", query);
  console.log("Matches:", matchingPosts);

  if (matchingPosts.length === 0) {
    results.innerHTML = "<p>No posts found.</p>";
    return;
  }

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