export default function makeAuthErrorMessage(action) {
  const _ = action
    .slice(15)
    .replace('(', '')
    .replace(')', '')
    .replace('.', '')
    .trim();
  switch (_) {
    case 'auth/email-already-in-use':
      return "L'email inserita esiste già.";

    case 'auth/invalid-email':
      return "L'email non è valida.";

    case 'auth/invalid-password':
      return 'La password non è valida. Deve contenere almeno 6 caratteri.';

    case 'auth/wrong-password':
      return 'La password non è corretta.';

    case _.substr('auth/weak-password'):
      return 'La password non è valida. Deve contenere almeno 6 caratteri.';

    default:
      break;
  }
}
