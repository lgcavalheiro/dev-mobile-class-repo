const chai = require('chai');
const should = require('chai').should();
const sinon = require('sinon');

let carrinho = require('../../src/fakeDb.json')["carrinho"];
import { main } from '../../src/index';

describe('Main unit tests', () => {
    let sandbox;

    beforeEach(function(){
        sandbox = sinon.createSandbox();
    })
    
    afterEach(function(){
        sandbox.restore();
    })

    // it('Should just run main at first', () => {
    //     const spyMain = sandbox.spy(main);
    //     spyMain()
        
    //     spyMain.callCount.should.be.eql(1)
    // })

    // it('Should require user input', () => {

    // })
})