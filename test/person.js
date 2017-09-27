var Person = require('../person');
var chai = require('chai');
var expect = chai.expect;

describe('Person', function() {
  describe('#age()', function() {
    context('when dob is 10/20/1992', function() {
      it('returns 24 for persons age', function() {
        var person = new Person('10/20/1992');
        var age = person.age();
        expect(age).to.equal(24);
      });
    });

    context('when dob is 09/03/1986', function() {
      it('returns 31 for persons age', function() {
        var person = new Person('09/03/1986');
        var age = person.age();
        expect(age).to.equal(31);
      });
    });

    context('when dob is 09/03/1996', function() {
      it('returns 21 for persons age', function() {
        var person = new Person('09/03/1996');
        var age = person.age();
        expect(age).to.equal(21);
      });
    });

    context('when dob is 09/03/1992', function() {
      it('returns 25 for persons age', function() {
        var person = new Person('09/03/1992');
        var age = person.age();
        expect(age).to.equal(25);
      });
    });

    context('when dob is 09/03/1987', function() {
      it('returns 30 for persons age', function() {
        var person = new Person('09/03/1987');
        var age = person.age();
        expect(age).to.equal(30);
      });
    });

    context('when dob is 09/03/1982', function() {
      it('returns 35 for persons age', function() {
        var person = new Person('09/03/1982');
        var age = person.age();
        expect(age).to.equal(35);
      });
    });

    describe('#whatCanIDo()', function() {
      context('when age is 18 or more', function() {
        it('returns vote', function() {
          var person = new Person('1/1/1995');
          var what = person.whatCanIDo();
          expect(what).to.include('vote');
        });
      });
    });
  });
});