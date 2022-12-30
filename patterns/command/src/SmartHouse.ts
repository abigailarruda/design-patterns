import { SmartHouseCommand } from './SmartHouseCommand';

export class SmartHouse {
  private commands: { [key: string]: SmartHouseCommand } = {};

  
  _checkIfCommandExists(key: string): boolean {
    const commandExists = !!this.commands[key];
    
    return commandExists;
  }
  
  addCommand(key: string, command: SmartHouseCommand): void {
    const commandAlreadyExists = Object.keys(this.commands).some((k: string) => {
      return (k === key) && this.commands[k] === command;
    });
    
    if (commandAlreadyExists) return;
    
    this.commands[key] = command;
  }
  
  executeCommand(key: string): void {
    const commandExists = this._checkIfCommandExists(key);
    
    if (!commandExists) return;

    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    const commandExists = this._checkIfCommandExists(key);

    if (!commandExists) return;

    this.commands[key].undo();
  }
}
