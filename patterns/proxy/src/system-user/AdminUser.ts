import { SystemUserAddressProtocol, SystemUserProtocol } from './SystemUserProtocol';

export class AdminUser implements SystemUserProtocol {
  firstName: string;
  userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { 
            street: 'Avenida Segunda Radial',
            number: 74,
          },
          { 
            street: 'Avenida Fauna',
            number: 12,
          },
          { 
            street: 'Rua VF 23',
            number: 83,
          },
          { 
            street: 'Rua J',
            number: 56,
          },
          { 
            street: 'Rua Alagoas',
            number: 9,
          }
        ]);
      }, 2000);
    });
  }
}
