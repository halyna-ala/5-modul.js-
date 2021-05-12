const User = function ({email, password} = {}) {
    this.email = email;
    this.password = password;
};
User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
}
const mango = new User({email: 'mango@mail.com', password: 22222});
mango.changeEmail('my=new-mail@mail.com');
console.log(mango);

const kiwi = new User({email: 'kiwi@mail.com', password: 44444});
console.log(kiwi);



// 1.opysaty schemu (stworyw konstruktor);
// 2. nakydaty metodiw do prototypy;
// 3. cherez new stworyty ekzempliar (odynakowy nabir swojst z riznymy znacheniamy);
// 4. dostup do naboru metodiw