const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'company_db',
    },
    console.log(`Connected to the company_db database.`);
);

// Manipulate the data by creating something, then look at delete app
app.post('/api/', ({ body }, res)) => {
    const sql = `INSERT INTO _______ ()
    VALUES (?)`;
    const params = [body.___];

    db.query(sql, params (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body,
        });   
    });
};

// First see if you can retrieve information before you manipulate the data
// first parameter is what we name our route
app.get('/api/department', (req, res) => {
    const sql = `SELECT id, _____ AS ___ FROM ____`
// Documentation of how we are told to use db.query. The rows will be returned. Once this is retrieved we move on to the post app.
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows,
        });
    });
});

app.delete('/api/department/:id', (req, res) => {
    const sql = `DELETE FROM id, _____ WHERE id = ?`;
// Documentation of how we are told to use db.query. The rows will be returned. Once this is retrieved we move on to the post app.
    db.query(sql, (err, rows) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
            message: 'Not found',
        });
    } else {
        res.json({
            message: 'deleted',
            changes: result.affectedRows,
            id: req.params.id,
        })
    }
    });
});

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/something', (req, res) => {
    const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // Update review name
  app.put('/api/review/:id', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
  

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});