<template>
  <div class="hello">
    <button v-on:click="render"> fill </button>


    <Identicon :address="account"/>
    <h1>{{ account }}</h1>
    <form>
      account <input v-model="account"/><br>
      amount <input v-model="amount"/><br>
      message <input v-model="message"/>
    </form>
   
    <HtmlCode v-if="request" :request="request" :imgDark="imgDark" :imgLight="imgLight"/>
    <QR v-if="request" :request="request"/>
    <Url v-if="request" :url="request"/>

  </div>

</template>

<script>
import HtmlCode from './HTML.vue'
import QR from './QR.vue'
import Url from './Url.vue'
import { Identicon } from '@nimiq/vue-components'
import { createRequestLink } from '@nimiq/nimiq-utils/request-link-encoding/request-link-encoding.js'

export default {
  name: 'HelloWorld',
  props: {
    submitAddress: String,
    defaultMessage: String,
    address: String,
    imgDark: String,
    imgLight: String,
  },
  data: function() {
    return {
      amount: 0,
      account: this.submitAddress,
      message: '',
    }
  },
  computed: {
    request: function() {
      try {
        return createRequestLink(this.account, parseInt(this.amount), this.msg, this.address)
      } catch(error) {
        return ''
      }
    },
    msg: function() {
      return this.message ? this.message : this.defaultMessage
    } 
  },
  components: {
    Identicon,
    HtmlCode,
    QR,
    Url,
  }, 
  methods: {
    render: function() {
      this.account = 'NQ08 53GX 37HG 8H94 1HY8 3SQM 8V4T L6MP T31J'
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
