const AbstractManager = require("./AbstractManager");

class commentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  insert(comment) {
    return this.database.query(
      `insert into ${this.table} (title, author, content, product_id) values (?, ?, ?, ?)`,
      [comment.title, comment.author, comment.content, comment.product_id]
    );
  }

  update(comment) {
    return this.database.query(
      `update ${this.table} set title = ?, author = ?, content = ? where product_id = ?`,
      [comment.title, comment.author, comment.content, comment.product_id]
    );
  }

  deleteOne(comment) {
    return this.database.query(
      `delete from ${this.table} where id = ? and product_id = ?`,
      [comment.id, comment.product_id]
    );
  }

  findAllByProductId(id) {
    return this.database.query(
      `SELECT product.title AS product_title, ${this.table}.title AS comment_title, ${this.table}.author, ${this.table}.content FROM product JOIN ${this.table} ON product.id = ${this.table}.product_id WHERE product.id = ?`,
      [id]
    );
  }
}

module.exports = commentManager;
