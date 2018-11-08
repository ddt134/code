<?php
/**
 * Created by PhpStorm.
 * User: zhiyuan
 * Date: 2018/11/8
 * Time: 09:37
 */
global $_GPC, $_W;
$op=$_REQUEST['op']?$_REQUEST['op']:'display';
if($op='select'){
    $targetPage=$_GPC['tp'];
    $targetOperation=$_GPC['to'];
    $showField=$_GPC['sf'];
    $hideField=$_GPC['hf'];
    include $this->template('web/common/select');
}