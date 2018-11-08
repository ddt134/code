<?php
/**
 * Created by PhpStorm.
 * User: zhiyuan
 * Date: 2018/11/8
 * Time: 09:34
 */

//生成选择用户组件
function gcSelect($url){
    return <<<html
<script type="text/javascript">
    layui.use(['form', 'layedit', 'laydate'], function() {
        var form = layui.form, layer = layui.layer, layedit = layui.layedit, laydate = layui.laydate;
        $('.select-btn').bind('click',function (){         
            var title=$('.input-hide').data('title')?$('.input-hide').data('title'):'查询';
            layer.open({
                title:title,
                type: 2,
                // skin: 'layui-layer-rim',
                //offset:'100px',
                area: ['400px','450px'],
                shadeClose: true,
                content: "$url",
                success: function(layero, index) {
                    //layer.iframeAuto(index);
                }
            });
        });
        $('.clear-btn').bind('click',function (){
            $('.input-show').val('');
            $('.input-hide').val('');
        });
       
    });
</script>
html;

}