const shortid = require('shortid');
const Url = require('../models/url')


async function handleGetUrlList(req, res){
    // query
    const url_list = await Url.find({})

    return res.json(url_list)
}


async function handlePostUrl(req, res){
    // generate random string for url alias
    const shortId = shortid.generate()
    
    // query
    await Url.create(
        {
            shortId: shortId,
            redirectUrl: req.body.redirectUrl 
        }
    )

    return res.json({id: shortId})
}


async function handleGetAnalytics(req, res){
    // get params
    const shortId = req.params.shortId

    // query
    const result = await Url.findOne(
        {
            shortId
        }        
    )
    
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}


// redirect to the url page
async function handleVisitPage(req, res){
    // get params
    const shortId = req.params.shortId

    // query
    const entry = await Url.findOneAndUpdate(
        {
            shortId
        },
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now()
                }
            }
        }
        
    )
    return res.redirect(entry.redirectUrl)
}


module.exports={
    handleGetUrlList,
    handlePostUrl,
    handleGetAnalytics,
    handleVisitPage,
}
