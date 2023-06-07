class ServiceDirectSql {
    #selectAll = "select * from bookstore.books ;"
    #selectByPrice = "select * from bookstore.books where book_price >= ?;"
    #selectById = "select * from bookstore.books where book_id = ?;"
    #insert = "insert into bookstore.books(book_name,book_price,book_sale) " +
        "values(?,?,?) ;"
    #update = "update bookstore.books set book_name = ? , book_price = ? , book_sale = ? where book_id = ? ;"
    #delete = "delete from bookstore.books where book_id = ? ;"

    get selectAll() {
        return this.#selectAll;
    }

    get selectByPrice() {
        return this.#selectByPrice;
    }

    get insert() {
        return this.#insert;
    }

    get update() {
        return this.#update;
    }

    get selectById() {
        return this.#selectById;
    }


    get delete() {
        return this.#delete;
    }
}

module.exports = ServiceDirectSql