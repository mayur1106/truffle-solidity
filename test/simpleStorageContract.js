const SimpleStorageModifyContract = artifacts.require('SimpleStorageModifyContract');

contract('SimpleStorageModifyContract',async ()=>{
it('Should set the value for data variable  ',async ()=>{
    const simpleStorage = await SimpleStorageModifyContract.deployed()
    await simpleStorage.set('this');
    const result = await simpleStorage.get();
    assert(result == 'this');
})
})