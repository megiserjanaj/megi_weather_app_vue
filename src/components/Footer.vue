<template>
	<footer v-bind:style="{ 'background-color': '#13113c' }" class="w-full">
		<p
			class="
				mx-auto
				my-0
				p-6
				text-white-50 text-base
				font-sans
				text-center
                xs:text-sm
                lg:text-base
			">
			{{ copyright }}
		</p>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			copyright: 'Copyright © : Megi Serjanaj, October 2021.',
		};
	},
};
</script>
