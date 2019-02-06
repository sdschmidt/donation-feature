<template>
	<div class="url">
		<h2>Link</h2>
		<pre>{{ url }}</pre>
		<p><a href="#">copy link</a></p>
	</div>
</template>

<script>
	export default {
		name: 'Url',
		props: {
			url: String,
		}
	}
</script>