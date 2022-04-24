const { productList } = require('../products');

exports.checkoutCtrlFunction = async (req, res) => {
    try {
        const productsFromFrontend = req.body.products;
        console.log(productList);
        
        res.status(200).json({
            status:"success"
        })
    } catch (error) {
    

    }
}