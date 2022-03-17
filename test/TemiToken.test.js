const TemiToken = artifacts.require('TemiToken');

contract("TemiToken", (accounts) => {
    before (async () =>{
        temitoken = await TemiToken.deployed();
    })

    it("gives the owner of the token 1M tokens", async() =>{
        let balance = await temitoken.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, "1000000", "Balances should be 1M tokens for contract creator.")
    })

    it("Can transfer token between accounts", async ()=>{
        let amount = web3.utils.toWei('1000', 'ether');
        await temitoken.transfer(accounts[0], amount), {from:accounts[0] }
    
    let balance = await temitoken.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    assert.equal(balance, "1000", "Balances should be 1K tokens for contract creator.")
})
})