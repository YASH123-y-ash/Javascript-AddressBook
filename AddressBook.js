/* @Description: creating contact class and creating constructor
   and used this keyword for initializing the instance.
*/
class Contact {

    constructor(params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // to validate first name using regex and throw error for invalid name
    get firstName()
    {
        return this.firstName;
    }
    set firstName(firstName)
    {
        let firstNameREpression = RegExp('^[A-Z]{1}[a-z]{2,}+$');
        if (firstNameREpression.test(firstName))
        this.firstName = firstName;
        else
        throw "invalid";
    }

    // to validate last name using regex 
    get lastName()
    {
        return this.lastName;
    }
    set lastName(lastName)
    {
        let lastNameRegex = RegExp("^[A-Za-z]+$");
        if(lastNameRegex.test(lastName))
        this.lastName = lastName;
        else
        throw "invalid";
    }

    //to validate address using regex
    get address()
    {
        return this.address;
    }
    set address(address)
    {
        let addressRExpression = RegExp("^[A-Za-z]{4,}$");
        if (addressRExpression.test(address))
        this.address = address;
        else
        throw "invalid"; 
    }

    // to validate city using regex
    get city() 
    { 
        return this.city; 
    }
    set city(city)
    {
        let cityRExpression = RegExp("^[A-Za-z]{4,}$");
        if (cityRExpression.test(city))
            this.city = city;
        else
            throw "Invalid";
    }

    // to validate state using regex
    get state()
    {
          return this.state; 
    }
    set state(state) 
    {
        let stateRExpression = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRExpression.test(state))
            this.state = state;
        else
            throw "Invalid";
    }

    // to validate zip code using regex
    get zip() 
    { 
        return this.zip; 
    }
    set zip(zip) {
        let zipRExpression = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRExpression.test(zip))
            this.zip = zip;
        else
            throw "Invalid";
    }

    //to validate email using regex
    get email() 
    { 
        return this.email; 
    }
    set email(email) {
        let emailRExpression = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRExpression.test(email))
            this.email = email;
        else
            throw "Invalid";
    }

    //to validate phone number using regex
    get phoneNumber() 
    {
         return this.phoneNumber; 
    }
    set phoneNumber(phoneNumber) 
    {
        let phoneRExpression = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRExpression.test(phoneNumber))
            this.phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    toString()
    {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + ", Address: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + ", Zip: " + this.zip
            + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}
    /* @Description: creating new address book array
    *  and adding new contacts to addressbook.
    */
     
    let newContact = new Array();
       newContact.push(new Contact('Yash', 'Wardhan', 'Madhubani', 'Purnea',
                       'Bihar', '845301', '91 8825223804', 'war@gmail.com')); 
       newContact.push(new Contact('Pritam', 'Kumar', 'Madhubani', 'Purnea',
                       'Bihar', '845301', '91 8825233804', 'pri@gmail.com'));   
       newContact.push(new Contact('Prince', 'Saurabh', 'Madhubani', 'Purnea',
                       'Bihar', '845301', '91 8825223604', 'yas@gmail.com')); 
       newContact.forEach((contact) => console.log(contact.toString()));

       //to find contact with first name and edit
       newContact.filter(contact => contact.firstName = "Yash").map(contact => contact.firstName = "Aman");
       console.log('contact after editing');  
       newContact.forEach((contact) => console.log(contact.toString()));

       //to delete contact using first name
       let index = newContact.findIndex(contact => contact.firstName = "Pritam");
       newContact.slice(index, 1);
       newContact.forEach((contact) => console.log(contact.toString()));
      
       //to count the number of contacts
       let i = 0;
    function countContacts(contact) 
    {
        if (i != null)
            return i++;
    }
    newContact.reduce(countContacts, 0);
    console.log('count is : ' + i);