import { SystemUserProxy } from './system-user/SystemUserProxy';

async function main(): Promise<void> {
  const user = new SystemUserProxy('Abigail', 'abigailarruda');

  console.log('[*] First call');

  console.log(await user.getAddresses());

  console.log('[*] Cache');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

main();
