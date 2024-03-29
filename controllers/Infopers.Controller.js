const InfoModel = require("../models/Infopers.Model");
const CustomerModel = require("../models/Customer.Model");

const InfoController = {
  create: function (req, res) {
    req.body["image"] = req.file.filename;
    console.log(req.body);
    InfoModel.create(req.body, async function (err, item) {
      if (err) {
        res
          .status(406)
          .json({
            status: 406,
            message: "info not created" + err,
            data: null,
          });
      } 
      const customer = await CustomerModel.findOneAndUpdate(
        {_id: req.body.customer},
        {$push: {infos: item._id}},
        {new: true}
    );
    if (!customer) {
        return res.status(406).json({status:406,message:"customer not found",data:null})
    }
    const service = await ServiceModel.findOneAndUpdate(
      {_id: req.body.service},
      {$push: {customers: req.body.customer._id}},
      {new: true}
  );
  if (!service) {
      return res.status(406).json({status:406,message:"customer not found",data:null})
  } 
      res
        .status(200)
        .json({ status: 200, message: "created info", data: item });
    });
  },
  read: function (req, res) {
    InfoModel.find({}, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "infos", data: null });
      } else {
        res
          .status(200)
          .json({ status: 200, message: "infos", data: items });
      }
    }).select("-__v").populate("customer","-__v").populate("service","-__v");
  },
  update: function (req, res) {
    req.body["photo"] = req.file.filename;
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "No photo provided",
        data: null,
      });
    }
    InfoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({
              status: 406,
              message: "info not created" + err,
              data: null,
            });
        } else
          res
            .status(200)
            .json({ status: 200, message: "created info", data: item });
      }
    );
  },
  
  delete: function (req, res) {
    InfoModel.findByIdAndDelete(req.params.id, async function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "info not created", data: null });
      }
      const customer = await CustomerModel.findOneAndUpdate(
        {_id: req.body.customer},
        {$pull: {infos: item._id}},
        {new: true}
    );
      res
        .status(200)
        .json({ status: 200, message: "created info", data: item });
    });
  },
  findById: function (req, res) {
    InfoModel.findOne({ _id: req.params.id }, function (err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },
};
module.exports = InfoController;
