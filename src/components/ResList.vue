<!--//店家列表组件组件-->


<template>
	<div>
		<router-link v-for="s in list" :to="'/home/'+ s.id">
			<ResSingle :single="s"></ResSingle>
		</router-link>
		
	</div>
</template>

<script>
	import ResSingle from "./children/ResSingle.vue";
	export default {
		components:{
			ResSingle,
		},
		props:["list"],
		mounted(){
//			console.dir(this.list)
		}
	}
</script>

<style scoped>
	
</style>