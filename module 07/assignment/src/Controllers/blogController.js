exports.create = async (req, res) => { 
    res.status(200).json({status:“success”, data: “blog create”})
};
exports.read = async (req, res) => { 
    res.status(200).json({status:“success”, data: “blog read”})
};
exports.delete = async (req, res) => { 
    res.status(200).json({status:“success”, data: “delete”})
};
exports.update = async (req, res) => { 
    res.status(200).json({status:“success”, data: “update”})
};
