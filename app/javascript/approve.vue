<template>
  <div id="">
      <button class="btn btn-outline-success btn-sm fw-bold" @click="approveUser"> دخول </button>
    
  </div>
</template>

<script>
export default {
    props: {
        id: Number
    },
  data: function () {
    return {}
  },
  channels: {
    AppointmentChannel: {
      connected() {
        console.log('connected from Approve')
      },
      received(data) {},
      disconnected() {}
    }
  },
  methods: {
      approveUser() {
          this.$cable.perform({
              channel: 'AppointmentChannel',
              action: 'approve',
              data: {
                  id: this.id
              }
          })
      }
  },
  mounted () {
    this.$cable.subscribe({
      channel: 'AppointmentChannel'
    })
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
