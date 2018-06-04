let spec;

const { expect } = require('chai');

describe('evrythng-swagger', () => {
  it('Can be imported', () => {
    spec = require('../lib');
  });

  it('Is an object', () => {
    expect(spec).to.be.be.an('object');
  });

  it('Contains \'paths\'', () => {
    expect(spec.paths).to.be.be.an('object');
  });

  it('Contains \'definitions\'', () => {
    expect(spec.definitions).to.be.be.an('object');
  });

  it('Contains \'parameters\'', () => {
    expect(spec.parameters).to.be.be.an('object');
  });
});
