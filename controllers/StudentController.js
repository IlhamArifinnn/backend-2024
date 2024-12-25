// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          // Mengembalikan data yang baru diinsert
          resolve({ id: results.insertId, ...data });
        }
      });
    });
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    try {
      const { nama, nim, email, jurusan } = req.body;
      const dataToInsert = { nama, nim, email, jurusan };

      const newStudent = await Student.create(dataToInsert);

      const data = {
        message: "Menambahkan data student",
        data: newStudent,
      };

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error menambahkan data", error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params; // Ambil ID dari URL
      const { nama, nim, email, jurusan } = req.body; // Ambil data dari body

      // Pastikan data tidak kosong
      if (!nama || !nim || !email || !jurusan) {
        return res.status(400).json({ message: "Data tidak lengkap" });
      }

      const sql = "UPDATE students SET ? WHERE id = ?";
      const dataToUpdate = { nama, nim, email, jurusan };

      db.query(sql, [dataToUpdate, id], (err, results) => {
        if (err) {
          console.error("Error query:", err); // Debug error
          return res
            .status(500)
            .json({ message: "Error mengupdate data", error: err });
        }

        // Jika tidak ada data yang diperbarui
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: `Student dengan ID ${id} tidak ditemukan` });
        }

        const data = {
          message: `Mengedit student id ${id}`,
          data: { id, ...dataToUpdate },
        };

        res.json(data);
      });
    } catch (error) {
      res.status(500).json({ message: "Error mengupdate data", error });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params; // Ambil ID dari URL

      // Query DELETE
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        console.log("Parameter ID:", id); // Debug ID
        console.log("Hasil query:", results); // Debug hasil query

        if (err) {
          console.error("Error query:", err); // Debug error
          return res
            .status(500)
            .json({ message: "Error menghapus data", error: err });
        }

        // Jika data tidak ditemukan
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: `Student dengan ID ${id} tidak ditemukan` });
        }

        const data = {
          message: `Menghapus student id ${id}`,
          data: null,
        };

        res.json(data);
      });
    } catch (error) {
      res.status(500).json({ message: "Error menghapus data", error });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
