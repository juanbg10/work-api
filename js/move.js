/*
 * descrição: API Google Search
 * autor: Juan Bertoluzzi Garcia
 * entrada: Nome para busca.
 * saida: Assuntos com o nome para busca.
 */
function Api() {
    var cx = '007833354045512050991:kcbhcpzkuai';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
}
// ----------------------------------------------------------

/*
 * descrição: Slide de imagens
 * autor: Allan Silva Bezerra
 * entrada:  
 * saida: 
 */
 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}

/*
 * descrição: Lista de Colaboradores
 * autor: Lucas de Mello Rocha
 * entrada: click em um botão 
 * saida: retorna contagem + nova tentativa
 */

function init(){
var ClickCounterViewModel = function() {
    this.numberOfClicks = ko.observable(0);
 
    this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };
 
    this.resetClicks = function() {
        this.numberOfClicks(0);
    };
 
    this.hasClickedTooManyTimes = ko.computed(function() {
        return this.numberOfClicks() >= 20;
    }, this);
};
 
    ko.applyBindings(new ClickCounterViewModel());
}

/*
 * descrição: Lista de Colaboradores
 * autor: Lucas de Mello Rocha
 * entrada: 
 * saida: 
 */
<<<<<<< HEAD
function colab() {
    var SimpleListModel = function(items) {
        this.items = ko.observableArray(items);
        this.itemToAdd = ko.observable("");
        this.addItem = function() {
            if (this.itemToAdd() != "") {
                this.items.push(this.itemToAdd());
                this.itemToAdd("");
            }
        }.bind(this);
    };
    
    ko.applyBindings(new SimpleListModel(["Grazi", "Janaina", "Khayan"]));
}
=======
 
 var initialData = [
    { firstName: "Danny", lastName: "LaRusso", phones: [
        { type: "Mobile", number: "(555) 121-2121" },
        { type: "Home", number: "(555) 123-4567"}]
    },
    { firstName: "Sensei", lastName: "Miyagi", phones: [
        { type: "Mobile", number: "(555) 444-2222" },
        { type: "Home", number: "(555) 999-1212"}]
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
            lastName: "",
            phones: ko.observableArray()
        });
    };
 
    self.removeContact = function(contact) {
        self.contacts.remove(contact);
    };
 
    self.addPhone = function(contact) {
        contact.phones.push({
            type: "",
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
 
ko.applyBindings(new ContactsModel(initialData));}
>>>>>>> e8d3d8c926b9a30621b2782574bcf5269ca4416e
