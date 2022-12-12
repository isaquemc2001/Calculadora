const vm = new Vue({
    el: '#app',
    data: {
        // numeros
        n1: 1,
        n2: 2,
        n3: 3,
        n4: 4,
        n5: 5,
        n6: 6,
        n7: 7,
        n8: 8,
        n9: 9,

        display: 0,

        key: '',
        
        // operadores
        adicao: "+",
        subtracao: "-",
        multiplicacao: "*",
        divisao: "/",
        igualdade: "="

    },
    methods: {
        digitos(num) {
            let numero = document.getElementById('resultado').innerHTML
            this.display = document.getElementById('resultado').innerHTML = numero + num
        },

        limpar(){
            this.display = 0
        }
        
    }
})