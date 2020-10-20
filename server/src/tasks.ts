let express = require('express');
let router = express.Router();

router.get('/', function(req: Request, res: Response) {
    // res.send('GET handler for /tasks route.');
});

router.post('/', function(req: Request, res: Response) {
    // res.send('POST handler for /tasks route.');
});


// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req: Request, res: Response) => {
    // Data.find((err, data) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true, data: data });
    // });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req: Request, res: Response) => {
    // const { id, update } = req.body;
    // Data.findByIdAndUpdate(id, update, (err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true });
    // });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req: Request, res: Response) => {
    // const { id } = req.body;
    // Data.findByIdAndRemove(id, (err) => {
    //     if (err) return res.send(err);
    //     return res.json({ success: true });
    // });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req: Request, res: Response) => {
    // let data = new Data();
    //
    // const { id, message } = req.body;
    //
    // if ((!id && id !== 0) || !message) {
    //     return res.json({
    //         success: false,
    //         error: 'INVALID INPUTS',
    //     });
    // }
    // data.message = message;
    // data.id = id;
    // data.save((err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true });
    // });
});

module.exports = router;