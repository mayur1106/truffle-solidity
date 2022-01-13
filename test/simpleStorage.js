const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage',async ()=>{
it('Should deploy smart contract properly',async ()=>{
    const simpleStorage = await SimpleStorage.deployed()
    const result = await simpleStorage.hello();
    assert(result == 'Hello World');
})
})