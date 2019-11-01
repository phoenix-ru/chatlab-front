<template>
  <div id="wrapper">
    <div class="chat-form">
      <div class="header has-font-rubik">
        {{ pageHeader }}
      </div>
      <div class="content">
        <nuxt @page-changed="changePageHeader" />
      </div>
      <div class="footer">
        Copyright (c) 2019 phoenix_ru
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHeader: ''
    }
  },

  methods: {
    changePageHeader(value) {
      this.pageHeader = value
    }
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
