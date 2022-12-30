import { EmailValidatorAdapter } from './validation/EmailValidatorAdapter';
import { EmailValidatorProtocol } from './validation/EmailValidatorProtocol';

function onValidateEmail(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('✅');
  } else {
    console.log('❌');
  }
}

onValidateEmail(new EmailValidatorAdapter(), 'abigail@example.com');
