<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</div>
</template>

<script>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue"


export default {
props: ["posts"],
components: { SinglePost },
setup(props) {
   // Manage posts within the component
   const posts = ref([...props.posts]);


    onMounted(() => console.log("component mounted"))
    onUnmounted(() => console.log("component unmounted"))
    onUpdated(() => console.log("component updated"))

    return {
      posts
    };
    
  },
  mounted() {
    console.log("options api")
  }
}
</script>

<style>

</style>