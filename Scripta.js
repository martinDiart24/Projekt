let jmeno;
let jmenoOK = false;
do {
  jmeno = window.prompt(`Zadej uživatelské jméno:`).trim();
  if (jmeno.includes(' ')) {
    window.alert('Uživatelské jméno nesmí obsahovat žádné mezery!');
  } else {
    jmenoOK = true;
  }
} while (!jmenoOK);

let email;
let emailOK = false;
do {
  email = window.prompt(`Zadej e-mail:`).trim();
  if (email.indexOf('@') <= 0 || email.indexOf('@') === email.length - 1) {
    window.alert('Neplatná e-mailová adresa!');
  } else {
    emailOK = true;
  }
} while (!emailOK);

let heslo;
let hesloOK = false;
do {
  heslo = window.prompt(`Zadej heslo:`).trim();
  if (heslo.length < 6) {
    window.alert('Heslo musí mít aspoň 6 znaků!');
  } else {
    let obsahujeCislo = false;
    for (let i = 0; i < 10; i++) {
      if (heslo.includes(i)) {
        obsahujeCislo = true;
        break;
      }
    }
    if (!obsahujeCislo) {
      window.alert('Heslo musí obsahovat aspoň 1 číslici!');
    } else {
      hesloOK = true;
    }
  }
} while (!hesloOK);

window.alert(`Vítej na webu!\nSouhrn: \n Uživatelské jméno: ${jmeno} \n E-mail: ${email} \n Heslo: ${'*'.repeat(heslo.length)}`);
