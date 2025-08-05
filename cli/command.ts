import { program } from 'commander';
import { PublicKey } from '@solana/web3.js';
import { configProject, launchToken, migrate, setClusterConfig, swap, withdraw } from './scripts';

program.version('0.0.1');

programCommand('config').action(async (directory, cmd) => {
  const { env, keypair, rpc } = cmd.opts();

  await setClusterConfig(env, keypair, rpc);

  await configProject();
});

programCommand('launch').action(async (directory, cmd) => {
  const { env, keypair, rpc } = cmd.opts();

  await setClusterConfig(env, keypair, rpc);

  await launchToken();
});


program.parse(process.argv);
