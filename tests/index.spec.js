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

  it('Contains \'components\'', () => {
    expect(spec.components).to.be.be.an('object');
  });

  it('Contains \'parameters\'', () => {
    expect(spec.components.parameters).to.be.be.an('object');
  });

  it('Contains \'schemas\'', () => {
    expect(spec.components.schemas).to.be.be.an('object');
  });
});
