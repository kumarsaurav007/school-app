import nc from "next-connect";
import multer from "multer";
import path from "path";
import { db } from "../../../lib/db";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/schoolImages",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

const handler = nc()
  .use(upload.single("image"))
  .post(async (req, res) => {
    try {
      const { name, address, city, state, contact, email_id } = req.body;
      const image = req.file.filename;

      const [result] = await db.query(
        "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, email_id, image]
      );

      res.status(201).json({ message: "School added successfully", id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
