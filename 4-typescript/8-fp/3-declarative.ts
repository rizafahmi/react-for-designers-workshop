const passwords: string[] = [
   "123456",
   "password",
   "admin",
   "reactanddesigner",
   "mypassword123",
];
;
const longPasswords: string[] = passwords.filter(function(password) {
  return password.length >= 9;
});

console.log(longPasswords);