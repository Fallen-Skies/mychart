<template>
	<div class="home">
		<h1>欢迎来到home页面</h1>
		<vChartsBar :seriesArr="qu_Arr" :seriesName="qu_name" v-if="activeName === 'one'"  style="width: 100%; height: 300px;"></vChartsBar>
		<div>{{getDate}}</div>
	</div>
</template>

<script>
	import vChartsBar from '@/components/chart/chartsbar.vue'

	export default {
		components: {
			vChartsBar
		},
		data() {
			return {
				activeName: 'one',
				qu_Arr: [],
				qu_name: ['总客流数','高意向客流数','二次进店数'],
				getDate:this.getdate(),
			}
		},
		methods:{
			loadData(){
				this.qu_Arr=[
				    ['一区','二区','三区','四区','五区','六区','七区','八区','九区'],
				    [146,136,126,116,106,96,86,76,50],[104,98,90,82,74,66,58,50,32],
				    [76,70,64,58,52,46,40,34,20]
				];
			},
			getdate() {
				var now = new Date(),
				y = now.getFullYear(),
				m = now.getMonth() + 1,
				d = now.getDate();
				return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
			},
		},
		computed:{
			
		},
		mounted() {
			this.loadData();
			setInterval(()=>{
				this.getDate = this.getdate();
			},1000)
		}
	};
</script>
