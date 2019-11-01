<template>
  <div class="info">
    <p class="name has-font-rubik" style="font-weight: bold; letter-spacing: .4px;">
      {{ message.sender }}
    </p>
    <p class="text">
      {{ message.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>