<template>
    <div class="enterprise_info_container">
        <div class="content">
            <div class="img">
                <img src="../assets/img/empty.png" height="100%" width="100%"/>
            </div>
            <div class="info">
                <h3>{{data.title}}</h3>
                <p class="desc">{{data.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style scoped>
    .enterprise_info_container{
        display: inline-block!important;
        margin: 10px;
    }
    .enterprise_info_container .content{
        width:400px;
        height: 150px;
        display:flex;
        border: 1px solid #ccc;
    }
    .enterprise_info_container .content .img{
        height:150px;
        width:150px;
        padding:10px;
        flex:none;
        text-align:center;
    }
    .enterprise_info_container .content .info{
        margin-left:10px;
    }
    .enterprise_info_container .content .info .desc{
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>>