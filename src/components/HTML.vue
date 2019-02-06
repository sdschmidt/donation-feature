<template>
	<div class="html">
		<h2>HTML</h2>
		<p>
			<input type="checkbox" v-model="imgOpt" />dark mode
		</p>

		<pre>{{ html }}</pre> 

		<img v-if="imgOpt" src="@/assets/donate_black.png" height="32px">
		<img v-if="!imgOpt" src="@/assets/donate_white.png" height="32px">
	</div>
</template>

<script>

	export default {
		name: 'HTML',
		props: {
			request: String,
			imgDark: String,
			imgLight: String,
		},
		data: function() {
			return {
				imgOpt: false
			}
		},
		computed: {
			img: function () {
				return this.imgOpt ? this.imgDark : this.imgLight
			},
			html: function() {
				return `<div>
<a href="${this.request}"><img src="${this.img}"/></a>
</div>`
			}
		}
	}
</script>