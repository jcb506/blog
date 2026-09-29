---
layout: default
---

# Welcome

Welcome to my blog.

This is where I write about the things I work with and the things I find interesting: Linux, infrastructure, SRE, cybersecurity, automation, programming, and whatever else catches my attention.

Most of the posts here are notes from things I am learning, building, breaking, and fixing. Some will be polished articles; others may be little experiments or technical notes that I want to keep around.

{% assign pinned_posts = site.posts | where: "pinned", true %}
{% if pinned_posts.size > 0 %}
<h2>Pinned posts</h2>

<ul class="post-list">
  {% for post in pinned_posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <h3>
        <a href="{{ post.url | relative_url }}">  </a>
      </h3>

      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% endif %}


## Latest Posts

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <h3>
        <a href="{{ post.url | relative_url }}"> {{post.title}}</a>
      </h3>

    <!-- {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {% endif %} -->
  </li>

{% endfor %}

</ul>
