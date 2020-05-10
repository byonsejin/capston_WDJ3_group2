<template>
  <span>
		<HomeJumbotron/>
		<HomeContext/> 
		<HomeIntroduce/>
	</span>
</template>

<script>
import HomeJumbotron from './home/HomeJumbotron'
import HomeContext   from './home/HomeContext'
import HomeIntroduce from './home/HomeIntroduce'

export default {
	components: {
		HomeJumbotron,
		HomeContext,
		HomeIntroduce,
	},
};
</script>
