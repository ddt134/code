<?php
class demo{
    public function doPageGetGoodsCateTree(){
        $cateModel=new GoodsCategoryModel();
        $data=$cateModel->getAll();
        $data=$cateModel->convertToRelationArray($data,'parent_id',0);
        $this->success('',$data);
    }
}
