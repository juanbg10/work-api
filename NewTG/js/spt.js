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


/*
 * descrição: Lista de Colaboradores
 * autor: Allan Silva Bezerra
 * entrada: Click em um botão
 * saida: Retorno de tentativas + Nova tentativa
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
