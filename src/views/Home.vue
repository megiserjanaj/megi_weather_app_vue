<template>
	<div class="home">
		<div id="form-wrap">
			<div class="mx-auto my-auto text-center">
				<h1
					class="
						text-xxxl text-white-50 font-sans
						animate__animated animate__zoomIn
					">
					Welcome to your weather app!
				</h1>
				<br />
				<p class="text-white-50 font-sans animate__animated animate__fadeIn">
					Please enter your preferred city down below:
				</p>
			</div>
			<div
				class="
					flex
					items-center
					mx-auto
					my-5
					w-64
					animate__animated animate__fadeIn
				">
				<input
					type="text"
					placeholder="Enter your city here"
					class="
						w-full
						pr-10
						pl-4
						py-2
						border-white-50 border
						rounded-lg
						text-white-50
						font-sans
						focus:outline-none focus:border-green-500
					"
					v-bind:style="{ 'background-color': 'transparent' }"
					v-model="query"
					v-on:keypress="getWeather"
					autocomplete="off" />
				<svg
					class="w-4 h-4 fill-white-50 text-white-50 -ml-8 z-10"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="white">
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'Home',
	data() {
		return {
			query: '',
		};
	},
	methods: {
		...mapActions(['changeCity']),
		async getWeather(event) {
			if (event.key == 'Enter') {
				this.changeCity(this.query);
				this.$router.push('/weather');
			}
		},
	},
};
</script>
