import { monsters } from './../src/monsters.js';

describe('Monsters', function() {
  it('should display the name of the monster.', function() {
    expect(monsters[0].name).toEqual('The Ugly Child');
  });
});
