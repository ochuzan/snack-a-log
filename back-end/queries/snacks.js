const db = require("../db/dbConfig.js");

const getAllSnacks = async() => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
    } catch (error) {
        return error;
    }
};

const getOneSnack = async(id) => {
    try {
        const oneSnack = await db.one("SELECT * FROM places WHERE id=$1", id);
        return oneSnack;
    } catch (error) {
        return error;
    }
};

const deleteSnack = async(id) => {
    try {
        const deletedSnack = await db.one(
            "DELETE FROM songs WHERE id=$1 RETURNING *",
            id
        );
        return deletedSnack;
    } catch (error) {
        return error;
    }
};

const updateSnack = async(id, snack) => {
    try {
        const updatedSnack = await db.one(
            "UPDATE songs SET name=$1, image=$2, fiber=$3, protein=$=4, added_sugar=$5, is_healthy=$6 RETURNING *",
            [snack.name, snack.image, snack.fiber, snack.protein, snack.added_sugar, snack.is_healthy, id]
        );
        return updatedSnack;
    } catch (error) {
        return error;
    }
};

const createSnack = async(song) => {
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks (name, image, fiber, protein4, added_sugar, is_healthy) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [snack.name, snack.image, snack.fiber, snack.protein, snack.added_sugar, snack.is_healthy, id]
        );
        return newSnack;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllSnacks,
    getOneSnack,
    deleteSnack,
    updateSnack,
    createSnack
};
