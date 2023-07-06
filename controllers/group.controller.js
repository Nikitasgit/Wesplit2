const GroupModel = require("../models/group.model");

module.exports.getGroups = async (req, res) => {
  const groups = await GroupModel.find();
  res.status(200).json(groups);
};

module.exports.setGroups = async (req, res) => {
  if (!req.body.name && !req.body.creator) {
    res.status(400).json({ message: "Merci d'ajouter un nom et un créateur" });
  }

  const group = await GroupModel.create({
    name: req.body.name,
    creator: req.body.creator,
  });
  res.status(200).json(group);
};

module.exports.editGroup = async (req, res) => {
  const group = await GroupModel.findById(req.params.id);

  if (!group) {
    res.status(400).json({ message: "Ce groupe n'existe pas " });
  }
  const updateGroup = await GroupModel.findByIdAndUpdate(group, req.body, {
    new: true,
  });

  res.status(200).json(updateGroup);
};

module.exports.deleteGroup = async (req, res) => {
  const group = await GroupModel.findById(req.params.id);

  if (!group) {
    res.status(400).json({ message: "Ce groupe n'existe pas " });
  }

  await group.deleteOne();

  res.status(200).json("groupe supprimé" + req.param.id);
};
