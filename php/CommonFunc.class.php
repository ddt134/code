<?php

class CommonFunc
{
    //控制字符串长度
    public static function stringLengthLessThan($string,$length){
        if(mb_strlen($string,'utf-8')>$length){
            $string=mb_substr($string,0,$length,'utf-8').'...';
        }
        return $string;
    }

    //根据上下级关系对二维数组进行排序
    public static function sortByRelation($data,$relationFieldName,$relationFieldValue)
    {
        static $arr = array();
        if (!empty($data)) {
            foreach ($data as $k => $v) {
                if ($v[$relationFieldName] == $relationFieldValue) {
                    $arr[] = $v;
                    unset($data[$k]);
                    $funcName=__FUNCTION__;
                    self::$funcName($data,$relationFieldName,$v['id']);
                }
            }
        }
        return $arr;
    }

    //根据上下级关系把二维数组转成多维数组
    public static function convertToRelationArray($data,$relationFieldName,$relationFieldValue)
    {
        $arr = array();
        if (!empty($data)) {
            foreach ($data as $k => $v) {
                if ($v[$relationFieldName] == $relationFieldValue) {
                    unset($data[$k]);
                    $funcName=__FUNCTION__;
                    $v['children']=self::$funcName($data,$relationFieldName,$v['id']);
                    $arr[] = $v;
                }
            }
        }
        return $arr;
    }
}


