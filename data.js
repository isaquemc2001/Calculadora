const vm = new Vue({
    el: '#app',
    data: {
        xyz: false
    },
    methods: {
        imprimirTexto(t, n, b){
            console.log(t, n, b, this.xyz)
        },
        mensagemAlerta(e, t, n){
            console.log(e, t, n)
        }
    }
})