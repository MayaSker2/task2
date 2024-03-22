class Contact {
    name: string;
    email: string;
    phone: string;
    group: string; 
    
    constructor(name : string, email: string, phone: string) {
        this.name = name ;
        this.email = email;
        this.phone = phone;
        this.group = "";
        }
    }

    class AddressBook {
        contacts: Contact[] = [];
        
        addContact: (contact: Contact) =>  void =( contact: Contact)=> {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(contact.email)) {
              throw new Error("Invalid email format");
            }
        
            if (!contact.name || contact.name .trim() === "") {
              throw new Error("Name cannot be empty");
            }
                
            this.contacts.push(contact);
        }

        findContactByName : (name: string)=> Contact | undefined  = (name) => {
            return this.contacts.find((contact) => contact.name === name);
        }

        filterByGroup(group: string) {
            return this.contacts.filter((contact) => contact.group === group);
        }
        
        sortByName: () => void = () =>{
            this.contacts.sort((a, b) => a.name .localeCompare(b.name ));
        }

        searchContacts(searchTerm: string): Contact[] {
            const normalizedSearchTerm = searchTerm.toLowerCase();
            return this.contacts.filter((contact) =>
              contact.name .toLowerCase().includes(normalizedSearchTerm)
            );
          }
        
        printContacts: () => void = () =>{
            for (const contact of this.contacts) {
              console.log(`Name: ${contact.name }`);
              console.log(`Email: ${contact.email}`);
              console.log(`Phone: ${contact.phone}`);
              console.log("-----");
            }
        }

    }
    const addressBook = new AddressBook();
     
    const contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890");
    const contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123"); // Invalid email
    const contact3 = new Contact("", "valid@email.com", "789-012-3456"); // Empty name
    
    addressBook.addContact(contact1);

    try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
    addressBook.addContact(contact3); // This will throw an error (empty name)
    } catch (error) {
    console.log("Error adding contact:");
    } 

    console.log("Contacts:");
    addressBook.printContacts();
    

    // Example usage of new search functionality
    const searchResults = addressBook.searchContacts("john");
    console.log("Search results (name containing 'john'):");
    searchResults.forEach((contact) => console.log(`  - ${contact.name }`));