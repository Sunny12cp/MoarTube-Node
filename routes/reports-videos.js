const express = require('express');

const { reportsVideos_GET, reportsVideosArchive_POST, reportsVideosReportIdDelete_DELETE, reportsVideosCaptcha_GET } = require('../controllers/reports-videos');

const router = express.Router();

router.get('/', async (req, res) => {
    reportsVideos_GET(req, res);
});

router.post('/archive', (req, res) => {
    reportsVideosArchive_POST(req, res);
});

router.delete('/:reportId/delete', async (req, res) => {
    reportsVideosReportIdDelete_DELETE(req, res);
});

router.get('/captcha', async (req, res) => {
    reportsVideosCaptcha_GET(req, res);
});

module.exports = router;