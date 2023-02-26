const getAllProducts = (req,res) =>{
res.status(200).json({msg:"i am getAllProducts"});
};

const getAllProductsTesting = (req,res) =>{
    res.status(200).json({msg:"i am getAllProductsTesting"});
    };

    module.exports = {getAllProducts,getAllProductsTesting}