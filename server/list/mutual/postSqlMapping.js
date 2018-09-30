var post = {
    insert: 'INSERT INTO post(id, status, content) VALUES(0,?,?)',
    update: 'update list_info set stauts=? where id=?',
    delete: 'delete from list_info where id=?',
    queryById: 'select * from list_info where id=?',
    queryAll: 'select * from list_info'
};
module.exports = post;