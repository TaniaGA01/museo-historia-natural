<script setup lang="ts">
import ServicesAPI from "@/services/api/strapiAPI";
const pollService = new ServicesAPI();
const posts: any = reactive(await pollService.getPosts());
</script>
<template>
  <div>
    <h2>Posts</h2>
    <div v-for="post in posts.data" :key="post.attributes.id">
      <p>{{ post.attributes.title }}</p>
      <p>{{ post.attributes.content }}</p>
    </div>
  </div>
</template>
