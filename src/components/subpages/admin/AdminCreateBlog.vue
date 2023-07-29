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
        <button @click="openPreview">Preview Photo</button>
      </div>
    </div>
    <div>
      <vue-editor
        :editorOptions="editorSettings"
        v-model="blogBody"
        useCustomImageHandler
        @image-added="imageHandler"
      >
      </vue-editor>
    </div>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue3-editor";
import BlotFormatter from "quill-blot-formatter";
Quill.register("modules/blotFormatter", BlotFormatter);

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      error: null,
      errorMessage: null,
      editorSettings: { BlotFormatter: {} },
      file: null,
      loading: null,
    };
  },
  methods: {
    fileChange() {},
  },
};
</script>
