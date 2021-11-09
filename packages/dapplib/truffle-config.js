require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note script unveil install inhale equal gentle'; 
let testAccounts = [
"0xb2777e4669725ee8c742df07232a1ac3082840801932e263118294cde7ad6cbd",
"0xe987fc2f7fdde285fa9e2347988a55471bbe2ae33008bc378304a58bd100088d",
"0xefaef8955373abd5694e8e764676cd928485e91f0cb531f867d947839f0299e5",
"0x6a15b6bb8f389c2f23809705bc86f500e26dfe4c4c335e4490187c55320bf0c0",
"0x8ccf00b04f7997612cfd7f3c2bb5492e3140c450da8c216cf45258676e091ae6",
"0x2e6c2dad464bb5d697fc518ae2d6adce10791c76be3bd484a968ac1a89ce9fb2",
"0xaf6026cb0632541e8cc2b3d6d939f67680c73168f745ad660097289349e5469c",
"0x698bef45399bbfbafd5d193be489d6678960bd315b4a7a2131efef6bb27a1d65",
"0xa2180d314c4f6947a8798fc814bf7e6d32ff59edec42cd2a4539524a7dcf406a",
"0x9fddfb06f2221962f3107dcac79afbb114b4be08121ff45107a9f584264f6004"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

