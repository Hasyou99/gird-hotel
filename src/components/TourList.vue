<template>
	<div class="tour-list">
        <div class="content">
            <img :src="list.SmallFullPathImages[0]" alt="">
            <div class="des">
                <p class="title clearfix"><span>{{list.Title}}</span><span>原价{{list.OriginalPrice}}</span></p>
                <p class="despri clearfix"><span>{{list.Description}}</span><span>￥{{list.CurrentPrice}}</span></p>
            </div>
        </div>
        <div class="end" v-if="list.length>0">
			<p class="bottom"><span class="fa fa-chevron-down"></span></span></p>
			<p>已经到最底了</p>
		</div>
	</div>
</template>

<script>
	export default { 
			props:["list"]
            
		}
	
</script>

<style scoped="">
	.des{
		padding:5px 10px;
	}
    .title span:nth-child(1){
        float:left;
        font-size:16px;
    }
     .title span:nth-child(2){
         float:right;
         font-size:12px;
         text-decoration: line-through;
         color:#999;
     }
    .despri span:nth-child(1){
        float:left;
        font-size:14px;
        color:#999;
        margin:7px 0;
        width:70%;
        white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
     }
    .despri span:nth-child(2){
        float:right;
        font-size:18px;
        color:orange;
     }
     .clearfix{
         content:'';
         display:black;
         clear:both
     }
     .end{
		text-align: center;
		padding: 10px 0;
	}
	.bottom{
		width: 25px;
		height: 25px;
		margin: 0 auto;
		line-height: 25px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #c3c3c3;
		color: #c3c3c3;
	}
	.end p:nth-child(2){
		font-size: 14px;
		color: #999999;
		margin-top: 5px;
	}
</style>