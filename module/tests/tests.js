let spec;

const { expect } = require('chai');

describe('Exported Swagger spec', () => {
  it('Can be required', () => {
    spec = require('evrythng-swagger');
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
