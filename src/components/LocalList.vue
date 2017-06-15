<template>
		<div class="local-list clearfix">
			<img :src="list.SmallFullPathImages[0]" alt="" />
			<div class="right">
				<p class="title">{{list.Title}}</p>
				<p class="des">{{list.Description}}</p>
				<p class="price">
                    <i class="i">￥</i><span class="one">{{list.CurrentPrice}}</span><span class="qi">起</span>
                    <span class="dis"><i class="fa fa-map-marker"></i>{{list.Distance}}米</span>   
                </p>
			</div>
		</div>
</template>

<script>
	export default{
		props:['list']
	}
</script>

<style scoped="">
	.local-list{
		padding: 10px ;
		border-bottom: 1px solid #EEEEEE;
	}
	.clearfix{
		content: '';
		display: block;
		clear: both;
	}
	img{
		width: 100px;
		height: 100px;
		float: left;
	}
	.right{
		float: left;
		padding-left: 10px;
		width: calc(100% - 100px);
		height: 100px;
		/*overflow: auto;*/
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-right: 10px;
	}
	.title{
		font-size: 16px;
	}
	.des{
		color: #999;
		font-size: 14px;
		max-height: 60px;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
	}
	.price{
		padding-top: 5px;
	}
	.price .i,.one{
			color: #FFA500;
	}
	.one{
		font-size: 18px;
	}
    .qi{
        color: #999;
        font-size:14px
    }
    .fa-map-marker{
        color:#999;
        font-size:16px
    }
	.dis{
		color: #999;
		float: right;
	}
</style>