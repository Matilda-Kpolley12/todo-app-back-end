const router = require("express").Router();
const todoController = require("../controllers/todoControllers");

router.get("/", todoController.allTodos);
router.get("/:id", todoController.getTodo);
router.post("/", todoController.createTodo);
router.patch("/:id/toggle", todoController.toggleCompleted);
router.patch("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
