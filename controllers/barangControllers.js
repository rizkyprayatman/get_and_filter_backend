const { Sequelize } = require('sequelize');
const axios = require('axios');
const { Barangs, Category } = require("../models/");

const importDataBarang = async (req, res, next) => {
    try {
        const { email } = req.body;
        const response = await axios.get(`https://bsby.siglab.co.id/api/test-programmer?email=${email}`);
       
        const createOrUpdateBarang = async (data) => {
            const existingBarang = await Barangs.findOne({ id: data.id });
        
            if (!existingBarang) {
                const storeBarangs = {
                    id: data.id,
                    type: data.type,
                    name: data.name,
                    status: data.status,
                    price: data.price,
                    discount: data.discount,
                    attachment: data.attachment
                };
        
                await Barangs.create(storeBarangs);
            }
        };
        
        await Promise.all(response.data.results.map((data) => createOrUpdateBarang(data)));
        

        res.status(201).json({
            message: "Data Import Success"
        });
    } catch (error) {
        next(error);
    }
};

const checkData = async (req, res, next) => {
    try {
        const allBarang = await Barangs.findAll({
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                ],
            },
        });

        if (allBarang.length === 0) {
            return res.status(200).json({
                message: "Tidak Ada",
            });
        }

        res.status(200).json({
            message: "Ada Data"
        });
    } catch (error) {
        next(error);
    }
};


const getAllBarang = async (req, res, next) => {
    try {
        const allBarang = await Barangs.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'title', 'category_code'],
                },
            ],
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                ],
            },
        });

        res.status(200).json({
            message: "All Barang",
            data: allBarang
        });
    } catch (error) {
        next(error);
    }
};

const getAllBarangByFilter = async (req, res, next) => {
    try {
        const orderDirection = req.query.order === 'desc' ? 'DESC' : 'ASC';
        const orderField = req.query.orderBy || 'id';

        const filters = {};

        if (req.query.type) {
            filters.type = req.query.type;
        }

        if (req.query.status) {
            filters.status = req.query.status === 'approved' ? 1 : 0;
        }

        if (req.query.attachment) {
            filters.attachment = req.query.attachment === 'ada' ? 1 : 0;
        }

        if (req.query.discount) {
            filters.discount = req.query.discount === 'ada' ? { [Sequelize.Op.gt]: 0 } : 0;
        }

        const allBarang = await Barangs.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'title', 'category_code'],
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            where: filters,
            order: [[orderField, orderDirection]],
        });

        res.status(200).json({
            message: "Get All Barang",
            data: allBarang,
        });
    } catch (error) {
        next(error);
    }
};


const getAllBarangSort = async (req, res, next) => {
    try {
        const orderDirection = req.query.order === 'desc' ? 'DESC' : 'ASC';
        const orderField = req.query.orderBy || 'id';

        const allBarang = await Barangs.findAll({
            include: [
                {
                    model: Category, // Include the Category model
                    as: 'category',
                    attributes: ['id', 'title', 'category_code'],
                },
            ],
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt",
                ],
            },
            order: [[orderField, orderDirection]],
        });

        res.status(200).json({
            message: "All Barang",
            data: allBarang
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    importDataBarang,
    getAllBarang,
    getAllBarangSort,
    getAllBarangByFilter,
    checkData
};