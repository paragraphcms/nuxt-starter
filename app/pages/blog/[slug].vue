<script setup lang="ts">
import type { Page } from "@paragraphcms/client";
import Post from "../../components/blog/Post.vue";

const route = useRoute();
const slug = String(route.params.slug ?? "");

const { data: page, error } = await useAsyncData<Page>(
  `blog-post:${slug}`,
  () => $fetch(`/api/blog/${encodeURIComponent(slug)}`),
);

if (error.value) {
  throw error.value;
}
</script>

<template>
  <Post v-if="page" :page="page" />
</template>
