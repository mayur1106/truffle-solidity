const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage',async ()=>{
let advanceStorage = null;
before(async()=>{
    advanceStorage = await AdvancedStorage.deployed()
})
it('Should add element to the ids array ',async ()=>{
    await advanceStorage.add(10);
    const result  = await advanceStorage.ids(0);
    assert(result.toNumber() === 10);
    })

it('Should get element  of the ids array ',async ()=>{
    await advanceStorage.add(20);
    const result  = await advanceStorage.get(1);
    assert(result.toNumber() === 20);
    })

it('Should get all element of array ',async ()=>{
    const rawId  = await advanceStorage.getAll();
    const ids = rawId.map(id=>id.toNumber());
    assert.deepEqual(ids,[10,20]);
    })

it('Should get length ofthe array',async ()=>{
    const result  = await advanceStorage.length();
    assert(result.toNumber() == 2);
    })
})