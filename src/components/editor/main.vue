<template>
  <div>
    <quillEditor :style="styleOption" align="left" :options="editorOption"></quillEditor>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    name: 'ap-editor',
    components: {
      quillEditor
    },
    props: {
      options: {
        default: {},
        type: Object
      },
      styleOption: {
        default: {},
        type: Object
      }
    },
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              // highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    created() {

    },
    methods: {

    }
  }

</script>
<style scoped>
</style>