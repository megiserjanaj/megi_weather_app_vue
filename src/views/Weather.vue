<template>
	<div class="weather">
		<div class="p-10">
			<div
				class="
					max-w-sm
					w-80
					mx-auto
					my-0
					rounded
					overflow-hidden
					bg-white-50
					shadow-custom
					animate__animated animate__fadeInUp
					xs:w-60
					md:w-80
					lg:w-80
				">
				<div v-if="info" class="px-8 py-8 bg-white w-full h-auto">
					<h2
						class="
							text-center
							font-sans font-bold
							text-xxxl text-gunSmoke-500
							capitalize
							mx-auto
							xs:text-xl
							md:text-xxxl
							lg:text-xl
						">
						{{ info.data.name }}
						<sup
							class="
								text-blackRock-500 text-base
								xs:text-sm
								md:text-base
								lg:text-base
							"
							>{{ info.data['sys']['country'] }}</sup
						>
					</h2>
					<div id="icon" class="mx-auto -mt-2">
						<img
							:src="`/images/${info.data['weather'][0]['icon']}.png`"
							class="
								w-30
								h-auto
								mx-auto
								my-2
								xs:w-20
								md:w-30
								lg:w-30
								animate__animated animate__fadeInLeft
							" />
					</div>
					<p
						class="
							text-center text-xxxxl text-stratos-500
							font-anton
							mx-auto
							-mt-4
							xs:text-xxl
							md:text-xxxxl
							lg:text-xxxxl
							animate__animated animate__zoomIn
						">
						{{ Math.round(info.data['main']['temp']) }}&deg;C
					</p>
					<p
						class="
							text-center text-blackRock-500
							capitalize
							text-base
							font-sans
							animate__animated animate__zoomIn
						">
						{{ info.data['weather'][0]['description'] }}
					</p>
					<div
						class="
							text-center
							px-3
							py-2
							text-sm
							font-semibold
							mt-4
							mx-auto
							animate__animated animate__fadeIn
						">
						<h3
							class="
								text-xl
								font-extrabold
								text-stratos-500
								font-sans
								xs:text-base
								md:text-lg
								lg:text-xl
							">
							Feels like
						</h3>
						<p
							class="
								text-base text-blackRock-500
								font-anton
								xs:text-sm
								md:text-base
								lg:text-base
							">
							{{
								Math.round(info.data['main']['feels_like'])
							}}&deg;C
						</p>
					</div>
					<div
						class="
							px-2
							pt-3
							pb-3
							table
							align-middle
							mx-auto
							my-0
							xs:px-0
							md:px-5
							lg:px-5
							animate__animated animate__fadeIn
						">
						<div
							class="
								inline-block
								align-middle
								px-5
								text-sm
								font-sans
								mb-2
								mx-auto
							">
							<h3
								class="
									text-base
									font-extrabold
									text-centertext text-stratos-500
									font-sans
									xs:text-sm
									md:text-base
									lg:text-base
								">
								Humidity
							</h3>
							<p
								class="
									text-base text-center text-blackRock-500
									font-sans
									xs:text-sm
									md:text-base
									lg:text-base
								">
								{{ Math.round(info.data['main']['humidity']) }}
							</p>
						</div>
						<div
							class="
								inline-block
								align-middle
								px-5
								text-sm
								font-sans
								mb-2
								mx-auto
							">
							<h3
								class="
									text-base
									font-extrabold
									text-stratos-500
									font-sans
									xs:text-sm
									md:text-base
									lg:text-base
								">
								Wind
							</h3>
							<p
								class="
									text-base text-blackRock-500
									font-sans
									xs:text-sm
									md:text-base
									lg:text-base
								">
								{{ info.data['wind']['speed'] }}
							</p>
						</div>
					</div>
				</div>
				<p v-else class="text-center text-gunSmoke-800">Loading...</p>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { mapGetters } from 'vuex';

Vue.use(VueAxios, axios);

export default {
	name: 'Weather',
	data() {
		return {
			info: null,
		};
	},
	computed: {
		...mapGetters(['city']),
	},
	mounted() {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=d51b80a3ed242739b0f0e224e35a23a4&units=metric`
			)
			.then((res) => (this.info = res))
			.catch((err) => {
				console.error(err);
			});
	},
};
</script>
