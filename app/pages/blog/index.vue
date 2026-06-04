<script setup lang="ts">
import type { PageSummary } from "@paragraphcms/client";
import Blog from "../../components/blog/Blog.vue";

const { data: posts, error } = await useAsyncData<PageSummary[]>(
    "blog-posts",
    () => $fetch("/api/blog"),
);

if (error.value) {
    throw error.value;
}
</script>

<template>
    <Blog :posts="posts ?? []" />
</template>
