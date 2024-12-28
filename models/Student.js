// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    try {
      // 1. Melakukan insert data ke database
      const id = await new Promise((resolve, reject) => {
        const sql = "INSERT INTO students SET ?";
        db.query(sql, data, (err, result) => {
          if (err) {
            return reject(err); // Pastikan menangani error
          }
          resolve(result.insertId); // Mengambil ID dari data yang di-insert
        });
      });

      // 2. Mengambil data berdasarkan ID
      const student = await new Promise((resolve, reject) => {
        const sql = "SELECT * FROM students WHERE id = ? LIMIT 1";
        db.query(sql, [id], (err, results) => {
          if (err) {
            return reject(err); // Tangani error
          }
          resolve(results[0]); // Ambil data pertama (karena LIMIT 1)
        });
      });

      return student; // Kembalikan data student
    } catch (error) {
      throw error; // Lempar error jika terjadi
    }
  }

  static async find(id) {
    try {
      const student = await new Promise((resolve, reject) => {
        const sql = "SELECT * FROM students WHERE id = ? LIMIT 1";
        db.query(sql, [id], (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results[0]); // Ambil data pertama
        });
      });
      return student;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      // Update data di database
      await new Promise((resolve, reject) => {
        const sql = "UPDATE students SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
      });

      // Ambil data yang diperbarui
      const updatedStudent = await this.find(id);
      return updatedStudent;
    } catch (error) {
      throw error;
    }
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;
