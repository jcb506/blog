---
layout: default
---

<h1>Search by Tag</h1>

<input type="text" id="tag-search" placeholder="Search by tag...">

<div id="tag-results"></div>

<script>
  const searchIndex = "{{ '/search.json' | relative_url }}";
</script>

<script src="{{ '/assets/js/tag-search.js' | relative_url }}"></script>

<pre>

</pre>