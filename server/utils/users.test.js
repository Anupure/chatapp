const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'An',
      room: 'mr'
    }, {
      id: '2',
      name: 'gf',
      room: 'mht'
    }, {
      id: '3',
      name: 'Anu',
      room: 'mr'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Anup',
      room: 'Theo'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist(userId);
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

    it('shd return user name', () =>{
      var userList = users.getUserList('mr');

      expect(userList).toEqual(['An', 'Anu']);
    });
    it('shd return room name', () =>{
      var userList = users.getUserList('mht');

      expect(userList).toEqual(['gf']);
    });
});
