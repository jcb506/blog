---
layout: default
---

# All posts

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

<h1>Browse by topic</h1>

<div class="tag-list">
  {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class="tag">
      {{ tag[0] }} ({{ tag[1].size }})
    </a>
  {% endfor %}
</div>

{% for tag in site.tags %}
  <section id="{{ tag[0] | slugify }}">
    <h2>{{ tag[0] }}</h2>
    <ul>
      {% for post in tag[1] %}
        <li>
          <a href="{{ post.url | relative_url }}">
            {{ post.title }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}

</ul>
