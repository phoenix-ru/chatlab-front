<template>
  <div>
    <nuxt-link
      v-for="chat in chats"
      tag="div"
      :key="chat.id"
      :to="`/chat?id=${chat._id}`"
    >
      <chat-preview
        :name="chat._id"
        :text="chat.text"
      />
    </nuxt-link>
  </div>
</template>

<script>
import ChatPreview from '~/components/ChatPreview'
import { get } from '~/services/abstract.service'

export default {
  components: {
    ChatPreview
  },

  async asyncData(ctx) {
    const res = await get(
      ctx.$axios,
      '/chats'
    )

    if (res && res.error) {
      console.log(res.error)
      return
    }

    return {
      chats: res.data.chats
    }
  },

  mounted() {
    this.$parent.$emit('page-changed', 'All chats')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
