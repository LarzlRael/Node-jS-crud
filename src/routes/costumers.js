const express = require ('express');
const router=express.Router();

const costumerController = require('../controllers/costumerController');
router.get('/',costumerController.list);
router.post('/add',costumerController.save);
router.get('/delete/:id',costumerController.delete);

router.get('/update/:id',costumerController.edit);
router.post('/update/:id',costumerController.update);

module.exports=router;