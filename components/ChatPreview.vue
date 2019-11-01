<template>
  <div class="chat-item" @click="$emit('open-chat', name)">
    <div class="logo">
      <img src="~/assets/img/temp.png" alt="logo">
    </div>
    <div class="info">
      <p class="name has-font-rubik" style="font-weight: bold; letter-spacing: .4px;">
        {{ name }}
      </p>
      <p class="text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPreview',

  props: {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>