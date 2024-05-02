const express = require('express')

const router = express.Router()
const {
    handleGetUrlList,
    handlePostUrl,
    handleGetAnalytics,
    handleVisitPage,
} = require('../controllers/url')


// Create, GET(List)
router
.route('/')
.get(handleGetUrlList)
.post(handlePostUrl);


// Get Analytics
router
.route('/analytics/:shortId')
.get(handleGetAnalytics)


// redirection
router
.route('/redirect/:shortId')
.get(handleVisitPage)


module.exports = router