import { AdminUser } from './AdminUser';
import { SystemUserAddressProtocol, SystemUserProtocol } from './SystemUserProtocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (!this.realUser) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (!this.realUserAddresses) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
