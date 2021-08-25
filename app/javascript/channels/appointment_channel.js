import consumer from "./consumer"

consumer.subscriptions.create("AppointmentChannel", {
  connected() {
    console.log('connected')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
  },

  approve: function() {
    return this.perform('approve');
  }
});
