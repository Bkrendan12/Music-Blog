const User = require("./user");
const Project = require("./project");
const Comment = require("./comment");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Project, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

Project.hasMany(Comment, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project, Comment };
