<template>
	<div id="QR">
		<h2>QR-Code</h2>
    	<VueQrcode :value="request" /><br>
		<a :href="imgData" download="qr.png">download QR-code</a>
	</div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'

function getData(canvas) {
	var stream = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
	return stream
}

function canvasData(dummy, canvas) {
	return getData(canvas)
}

export default {
	name: 'QR',
	props: {
		request: String
	},
	mounted() {
		console.log(this.$el.querySelector('canvas'))
	},
	components: {
		VueQrcode
	},
	computed: {
		imgData: function() {
			try {
				return canvasData(this.request, this.$el.querySelector('canvas'))
			} catch(error) {
				return ''
			}
		}
	},
}
</script>