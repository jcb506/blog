---
layout: default
title: Search
# permalink: /search/
---

<h1>Search by Tag</h1>

<input
  type="text"
  id="tag-search"
  placeholder="Search by tag..."
  autocomplete="off"
>

<div id="tag-results"></div>

<script src="{{ '/assets/js/tag-search.js' | relative_url }}"></script>