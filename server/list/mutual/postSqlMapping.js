var post = {
    insert: 'INSERT INTO list_info( status, content) VALUES(?,?)',
    update: 'update list_info set status=? where id=?',
    delete: 'delete from list_info where id=?',
    queryById: 'select * from list_info where id=?',
    queryAll: 'select * from list_info'
};
module.exports = post;