const { Category } = require("../models");

const getAllCategory = async (req, res, next) => {
    try {
        const allCategory = await Category.findAll({
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                ],
            },
        });

        res.status(200).json({
            message: "All Category",
            data: allCategory
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCategory
};