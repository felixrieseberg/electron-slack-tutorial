const exec = require('child_process').exec

let interval = setInterval(() => {
  if (window.TS && window.TS._did_full_boot) {
    clearInterval(interval)

    TS.ims.message_received_sig.add((model, message) => {
      exec(`say ${message.text}`)
    });
  }
}, 300)