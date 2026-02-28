const Book = require("../models/Book");
// adding the controller createBook to add the books to the DB #6
const createBook=async(req,res)=>{
  try {
      const { title, author } = req.body;
       if (!title || !author) {
      return res.status(400).json({ msg: "Missing data" });
    }
       const book = await Book.create({ title, author });

  return res.status(201).json({
      msg: "Book created successfully",
      data: book,
    });
 } catch (error) {
    return res.status(400).json({
      msg: "Failed to create book",
      error: error.message,
    });
  }
};


const reserveBooks = async (req, res) => {
  const { bookIds } = req.body;

  const reservedCount = 0;

  bookIds.forEach(async (id) => {
    await Book.findByIdAndUpdate(id, { isAvailable: false });
    reservedCount++;
  });

  res
    .status(200)
    .json({ msg: "Books reserved successfully", count: reservedCount });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const deletedBook = await Book.findByIdAndRemove(id);

  if (!deletedBook) return res.status(404).json({ msg: "Book not found" });
  res.status(200).json({ msg: "Book deleted" });
};

module.exports = { reserveBooks, deleteBook };
