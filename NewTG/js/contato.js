/*
 * descrição: API Google Search
 * autor: Juan Bertoluzzi Garcia
 * entrada: registro de contatos
 * saida: contatos em uma agenda(array)
 */

var initialData = [
    { firstName: "Steve", lastName: "Rogers", phones: [
        { type: "Mobile", number: "(+44) 121-2121" }]
    },
    { firstName: "Tony", lastName: "Stark", phones: [
        { type: "Mobile", number: "(+44) 444-2222" }]
    }
];
var initialData = [
    { firstName: "Steve", lastName: "Rogers", phones: [
        { type: "Mobile", number: "(+44) 121-2121" }]
    },
    { firstName: "Tony", lastName: "Stark", phones: [
        { type: "Mobile", number: "(+44) 444-2222" }]
    }
];

function contato(){
    var ContactsModel = function(contacts) {
        var self = this;
    self.contacts = ko.observableArray(ko.utils.arrayMap(contacts, function(contact) {
        return { firstName: contact.firstName, lastName: contact.lastName, phones: ko.observableArray(contact.phones) };
    }));
 
    self.addContact = function() {
        self.contacts.push({
            firstName: "",
            phones: ko.observableArray()
        });
    };
 
    self.removeContact = function(contact) {
        self.contacts.remove(contact);
    };
 
    self.addPhone = function(contact) {
        contact.phones.push({
            number: ""
        });
    };
 
    self.removePhone = function(phone) {
        $.each(self.contacts(), function() { this.phones.remove(phone) })
    };
 
    self.save = function() {
        self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
    };
 
    self.lastSavedJson = ko.observable("")
}; 
    ko.applyBindings(new ContactsModel(initialData));
}