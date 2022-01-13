const CrudStorage = artifacts.require('CrudStorage');

contract('CrudStorage',async ()=>{
let crudStorage= null;
before(async()=>{
    crudStorage= await CrudStorage.deployed()
})
it('Should create the user ',async ()=>{
    await crudStorage.create("Frank");
    const result  = await crudStorage.read(1);
    assert(result[0].toNumber() == 1 );
    assert(result[1].toString() == 'Frank' );
})
it('Should update the user ',async ()=>{
    await crudStorage.update(1,"Joe");
    const result  = await crudStorage.read(1);
    assert(result[0].toNumber() == 1 );
    assert(result[1].toString() == 'Joe' );
})
it('Should not update the nonexistent user ',async ()=>{
    try{
        await crudStorage.update(2,"Joe");
    }catch(error){
        assert(error.message.includes('User does not found!'));
        return;
    }
    assert(false);
})
it('Should destroy the user ',async ()=>{
    await crudStorage.destroy(1);
    try{
        const result  = await crudStorage.read(1);
    }catch(error){
        assert(error.message.includes('User does not found!'));
        return;
    }
    assert(false);
})
it('Should not destroy the user ',async ()=>{
    try{
        await crudStorage.destroy(2);
    }catch(error){
        assert(error.message.includes('User does not found!'));
        return;
    }
    assert(false);
})
});

