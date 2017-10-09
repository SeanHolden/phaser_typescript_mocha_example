var expect = chai.expect;

describe('#foo', function () {
    it('returns correct value', function () {
      expect([1, 2, 3].indexOf(4)).to.eql(-1);
    });

    it('does something with phaser', function() {
      let game = new Castlevania.Game();

      expect(game.foo()).to.eql('hello');
    });
});
