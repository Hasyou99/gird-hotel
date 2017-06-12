<template>
	<header class="intro">
			<ul>
				<li  v-for="(l,index) in banner" :key = 'index+1'>
                    <a href="#">
                        <img :src="l.FullPathImages[0]" alt="">
                        <div class="text">
                            <p>{{l.Title}}</p>
                            <p class="bot">{{l.Description}}</p>
                        </div>
                    </a>
                </li>
			</ul>
		</header>
</template>

<script>
	export default { 
		props:["banner"],  
	}
</script>

<style scoped>
	.intro{
        width:100%;   
        padding:10px
    }
    ul{
        list-style:none;
        width:100%;
        display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
    }
    ul li{
        width:50%;
        padding:10px 0
    }
    li img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    .text{
        display:inline-block;
        padding-left:8px;
        overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
    }
    .bot{
        color:#888;
        margin-top:12px
    }
</style>