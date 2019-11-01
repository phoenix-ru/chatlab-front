<template>
  <div id="chat-wrapper">
    <div style="height: 100%; overflow-y: scroll">
      <message
        v-for="message in messages"
        :key="message._id"
        :message="message"
        style="padding: 1rem"
      />
    </div>
    <div class="input-wrapper">
      <input
        v-model="userMessage"
        name="user-name"
        type="text"
        placeholder="Your message"
        autofocus
        class="input"
        @keypress.enter="sendMessage"
      >
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message'
import { get, post } from '~/services/abstract.service'

export default {
  name: 'Chat',

  components: { Message },

  data() {
    return {
      userMessage: undefined
    }
  },

  async asyncData(ctx) {
    const chatId = ctx.query.id

    const res = await get(
      ctx.$axios,
      `/chats/${chatId}`
    )

    if (res && res.error) {
      return ctx.redirect('/', { error: res.error })
    }

    return {
      chatId,
      messages: res.data.messages
    }
  },

  mounted() {
    this.$parent.$emit('page-changed', 'Chat ' + this.chatId)

    setInterval(this.getMessages, 1000)
  },

  methods: {
    async sendMessage() {
      await post(
        this.$axios,
        `/chats/${this.chatId}`,
        { text: this.userMessage, name: 'Marsel' }
      )

      this.userMessage = undefined
    },

    async getMessages() {
      const res = await get(
        this.$axios,
        `/chats/${this.chatId}`
      )

      if (res && res.error) {
        return this.$router.replace('/', { error: res.error })
      }

      this.messages = res.data.messages
    }
  }
}
</script>

<style scoped>
#chat-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-wrapper {
  margin-right: -1rem;
  margin-left: -1rem;
  border-top: 1px solid rgba(211, 211, 211, 0.4);
}

input.input {
  width: 100%;
  height: 2rem;
  border: none;
  padding: 1rem 2rem;
}
</style>
