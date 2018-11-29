<?php
class demo{
    public function doPageGetStores(){
        $storeModel=new StoreModel();
        $data=$storeModel->getAll();
        $this->success('',$data);
    }
}
