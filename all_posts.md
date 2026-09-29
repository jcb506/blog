---
layout: default
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>

    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {% endif %}
  </li>

{% endfor %}

</ul>

