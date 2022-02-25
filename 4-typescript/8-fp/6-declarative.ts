const passwords: string[] = [
   "123456",
   "password",
   "admin",
   "reactanddesigner",
   "mypassword123",
];

// [
//   {password: "123456", status: "⛔"}, 
//   ...
//   {password: "mypassword123", status: "✅"}
// ]

const passwordObj = passwords.map(password => {
    return {
        password: password, status: password.length >= 9 ? "✅" : "⛔"
    }
});

console.log(passwordObj);