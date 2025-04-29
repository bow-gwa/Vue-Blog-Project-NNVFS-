<template>
    <header>
      <h1>The Amazing Blog</h1>
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Create' }">Create Post</router-link>
      </nav>
    </header>
  <!-- <img src="../assets/images/italy.jpg" alt="" style="width: 200px; height: 100px "> -->
  <div id="image-container">
  <img src="../assets/images/italy.jpg" alt="Image 1">
  <img src="../assets/images/Bing Cape South Africa.jpg" alt="Image 2">
  <img src="../assets/images/paris.jpg" alt="Image 3">
</div>

  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    header {
       display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px; 
      
    }
    header h1 {
      color: #dfdfdf;
      font-size: 48px;
    }
    header a {
      color: #bbb;
      text-decoration: none;
      margin-left: 20px;
    }
    header a.router-link-active {
      color: #444;
      font-weight: bold;
    }



/* Navigation-specific additions to stabilize links */
header nav {
  display: flex; /* Ensures links are horizontally aligned */
  justify-content: flex-end; /* Pushes links to the right */
  gap: 20px; /* Adds space between links */
}

header nav a {
  position: relative; /* Keeps links in place */
  padding: 5px 10px; /* Adds padding for click area and visual balance */
  font-size: 16px; /* Consistent font size for readability */
}

    /* images */
    #image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Adjust spacing below the header */
}

#image-container img {
  width: 30%; /* Adjust image size */
  height: auto;
  border: 1px solid #ddd; /* Optional: Adds a border to each image */
  border-radius: 5px; /* Optional: Rounds the corners of each image */
}




  </style>