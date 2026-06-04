<script setup lang="ts">
type BlogPost = {
  id: string;
  slug: string;
  title: string;
};

defineProps<{
  posts: BlogPost[];
}>();
</script>

<template>
  <main>
    <h1>Blog</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
