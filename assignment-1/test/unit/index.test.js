const chai = require('chai');
const should = require('chai').should();
const sinon = require('sinon');

let carrinho = require('../../src/fakeDb.json')["carrinho"];
import { main, comandosLiterals } from '../../src/index';

describe('Main unit tests', () => {
    let sandbox;

    beforeEach(function(){
        sandbox = sinon.createSandbox();
    })
    
    afterEach(function(){
        sandbox.restore();
    })

    it('Should successfuly apply a discount to every item in carrinho', () => {
        comandosLiterals[0](10);

        carrinho[0].preco.should.be.eql(8.99);
    })
})