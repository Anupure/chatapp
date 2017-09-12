var expect = require('expect');

var{generateMessage} = require('./message');

describe('generateMessage', () => {
  it('shd be correct', () => {
    var from = 'jen';
    var text = 'something';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
