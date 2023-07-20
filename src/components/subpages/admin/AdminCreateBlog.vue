<template>
  <div>
    <!-- Add loading element at some point in the future. :^) -->
    <div>
      <input type="text" placeholder="Title of Blog" v-model="blogTitle" />
      <div>
        <label for="post-photo">Upload Blog Photo</label>
        <input
          type="file"
          ref="blogPhoto"
          id="blog-photo"
          @change="fileChange"
          accept=".png, .jpg, .jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script></script>
