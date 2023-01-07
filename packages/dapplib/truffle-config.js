require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note museum coil grace hidden slot giant'; 
let testAccounts = [
"0xd267038efc158105f1e4246ee1a7629a65fd2ebb52ecc87ff6eccea08d6f4149",
"0xaf7bcae7259fa7c855cd0badc0362c10c81194e968e566ce214fcfb716a8f0bd",
"0x2b6574b9b44f64324f9201ea1b88c1c02c0bedc23f4e63bae9e35a0fbe5550b0",
"0x483fbe993ee2dba3b2c52ffcdee60ce01f524266f57ab1691a4f4368143e00e1",
"0x9cbdc6a9dc1b4757cced9d134266bb350bc4677dbb37d5c380412262ba5ab065",
"0x1daf05804c6ed3ca9a96d371370e2fa35e42732644ed51608188aebfcbd7f1db",
"0xcb69b4ae55723c08efc5e63709fa795f273429ff15181fe20625c8b298de919b",
"0xd100c64a554ad39abb0d637106005dabeb4b1ae6ad61f3c3ff2abc6942e769be",
"0xa6f6dc8e459e57b03f1f156b2c5323f71bbf040d7cba9d9e0bd7df4bca712747",
"0x58836dd180403082329acddc9ddb807cc895082d95030937251500021a7b6e9a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


