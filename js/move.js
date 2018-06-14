
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
         };
  