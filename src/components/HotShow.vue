<template>
	<div class="hot">
        <p class="header">热门精选</p>
        <router-link  v-for="m in hotlist" :to="'/home/detail/'+ m.ItemID" >
            <div class="content"  :data-index="m.ItemID" >
                <img :src="m.SmallFullPathImages[0]" />
                <div class="text">
                    <div class="top clearfix">
                        <span>{{m.Title}}</span>
                        <span>原价{{m.CurrentPrice}}</span>
                    </div>
                    <div class="bottom clearfix">
                        <span>{{m.Description}}</span>
                        <span>￥{{m.OriginalPrice}}</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    
	export default { 
		props:["hotlist"],
	}
</script>

<style scoped>
	.hot{
        width:100%;
    }
    .hot .header{
        font-size:18px;
        padding:10px 0;
        text-align:center
    }
    img{
        width:100%;
        height:150px
    }
    .text{
        padding:10px 13px;
        line-height:20px
    }
    .clearfix{
        content:'';
        display:block;
        clear:both
    }
    .top span:nth-child(1){
        font-size:16px;
        float:left;
    }
    .top span:nth-child(2){
        font-size:12px;
        color:#666;
        text-decoration:line-through;
         float:right;
    }
    .bottom span:nth-child(1){
        font-size:14px;
        color:#666;
        float:left;
    }
    .bottom span:nth-child(2){
        font-size:17px;
        color:red;
         float:right;
    }
</style>