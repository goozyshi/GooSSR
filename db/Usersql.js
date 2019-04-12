var UserSQL = {
  INSERT: 'INSERT INTO User(uid,userName) VALUES(?,?)', // 插入数据
  SEARCH: 'SELECT * FROM User', // 查找表中所有数据
};
module.exports = UserSQL;
