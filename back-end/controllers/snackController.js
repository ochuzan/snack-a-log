const express = require("express");
const { as } = require("pg-promise");
const snacks = express.Router();
//queries functions
const {
  getAllSnacks,
  deleteSnack,
  updateSnack,
  getOneSnack,
  createSnack,
} = require("../queries/snacks.js");
//image validation
const isNameValid = require("../validation/snack.js");
//get all snacks
snacks.get("/", async (req, res) => {
  const snacks = await getAllSnacks();
  if (Array.isArray(snacks)) res.json({ success: true, payload: snacks });
  else res.redirect("/*");
});

//get a snack
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getOneSnack(id);
  if (snack.id) res.json({ success: true, payload: snack });
  else res.redirect("/*");
});

//delete a snack
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deleteSnack.id) res.json({ success: true, payload: deletedSnack });
  else res.redirect("/*");
});

//update a snack
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedSnack = await updateSnack(id, req.body);
  if (updatedSnack.id) res.json({ success: true, payload: updatedSnack });
  else res.redirect("/*");
});

//create a snack
snacks.post("/", isNameValid, async (req, res) => {
  try {
    let snack = req.body;
    if (!snack.image)
      snack = {
        ...snack,
        image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
      };

    const createdSnack = await createSnack(req.body);
    res.json({ success: true, payload: createdSnack });
  } catch (error) {
    res.redirect("/*");
  }
});

module.exports = snacks;
