<template>
  <div id="app">
    <router-view />
	<el-button type="primary" plain @click="getRandom()">随机数</el-button>
	{{state}}
  </div>
</template>
<script>
	import bus from '@/components/common/bus';
	export default{
		data() {
			return{
			}
		},
		computed:{
			state(){
				return this.$store.getters.getStatus
			}
		},
		mounted(){
		// 	const that = this;
		// 	window.onresize = function() {
		// 		bus.$emit('echarts', 'resize');
		// 	};
		
		// 	//开始动画调整页面
		// 	setTimeout(() => {
		// 		bus.$emit('echarts', 'resize');
		// 	}, 500)
			// 开始动画调整页面
			window.onresize = function() {
				let time = setTimeout(() => {
					bus.$emit('echarts','resize');
					clearTimeout(time);
				}, 200)
			};
		},
		methods:{
			getRandom(){
				let num = Math.ceil(Math.random()*1000);
				this.$store.dispatch('set_Setstatus',num); 
				console.log(this.$store.state.status);
				console.log(this.$store.getters.getStatus);
			}
		}
	}
</script>
<style lang="scss">
	.echarts{
		width: 100%;
		height: 100%;
	}
</style>
