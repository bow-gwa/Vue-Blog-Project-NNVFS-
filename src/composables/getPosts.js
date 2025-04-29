import { ref } from "vue"
import { projectFirestore } from "@/firebase/config"


const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection("posts")
      .orderBy("createdAt", "desc")
      .get();
      
      posts.value = res.docs.map(doc => {
        //console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
  }
  catch (err) {
    error.value = err.message
    console.log(error.value)
 }
}

// Function to delete a post from Firestore
const deletePost = async (postId) => {
  try {
    await projectFirestore.collection("posts").doc(postId).delete();
    // Update the local state
    posts.value = posts.value.filter((post) => post.id !== postId);
  } catch (err) {
    console.error("Error deleting post:", err);
  }
};

return { posts, error, load, deletePost }
}

export default getPosts

//CP RESPONSE AFTER I SHARED THE ABOVE CODE WHICH WASNT LOGGING THE res TO THE CONSOLE but it eventually worked without any changes to the above code so i guess i dont need the code below (which displayse the actual data stored in firebase. i'll keep it just to compare with how he does it)
// Your Vue function is set up to retrieve posts from a Firestore collection, but there are a couple of key improvements to make it work correctly:

// 1. **Extract the post data**: Right now, you're logging `res.docs`, but you're not actually storing the fetched posts in the `posts` array. You need to loop through `res.docs` and extract the data.
// 2. **Fix missing `await` in Firestore query**: Your Firestore query is correct, but you should also ensure it's properly handled.

// Here’s a refined version of your function:

// ```javascript
// import { ref } from "vue";
// import { projectFirestore } from "@/firebase/config";

// const getPosts = () => {
//   const posts = ref([]);
//   const error = ref(null);

//   const load = async () => {
//     try {
//       const res = await projectFirestore.collection("posts").get();
//       posts.value = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     } catch (err) {
//       error.value = err.message;
//       console.log(error.value);
//     }
//   };

//   return { posts, error, load };
// };

// export default getPosts;
// ```

// ### Improvements:
// - Extracts the post data using `.map()`, ensuring the retrieved documents are properly stored.
// - Includes `id` in the post objects for easier handling.
// - Keeps the original structure but ensures `posts` updates correctly.

// This should work smoothly now! Let me know if you run into any other issues. 🚀


//CP VERSION
// import { ref } from "vue";
// import { projectFirestore } from "@/firebase/config";

// const getPosts = () => {
//   const posts = ref([]);
//   const error = ref(null);

//   const load = async () => {
//     try {
//       const res = await projectFirestore.collection("posts").get();
//       posts.value = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     } catch (err) {
//       error.value = err.message;
//       console.log(error.value);
//     }
//   };

//   return { posts, error, load };
// };

// export default getPosts;
