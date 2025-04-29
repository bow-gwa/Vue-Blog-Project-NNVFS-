<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import getPost from '../composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { projectFirestore } from '@/firebase/config';

export default {
props: ["id"],
components: { Spinner },

setup(props) {
  
  const router = useRouter()

 const { post, error, load } = getPost(props.id)

 load()


 const handleClick = async () => {
      try {
        // Delete the post using the Firestore document ID
        await projectFirestore.collection("posts").doc(props.id).delete();

        // Navigate to the home page after deletion
        router.push({ name: "Home" });
      } catch (err) {
        console.error("Error deleting post:", err);
      }
    };

 return { post, error, handleClick }
 }
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
  padding: 10px 15px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.delete:hover {
  background-color: #c9302c;
}
</style>