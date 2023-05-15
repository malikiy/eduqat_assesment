const User = require("../model/userModel").User;
const services = require("../utils/factoryHandler");

exports.create = services.createOne(User);
exports.getAll = services.getAll(User);
exports.getDataById = services.getOne(User);
exports.updateDataById = services.updateOne(User);
exports.delete = services.deleteOne(User);


