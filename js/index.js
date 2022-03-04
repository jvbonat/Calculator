function Calculadora() {

    this.display = document.querySelector('.display');
    this.btnNum = document.querySelector('.btn-num');
    this.btnDeleteAll = document.querySelector('.btn-clear');
    this.btnDeleteOne = document.querySelector('.btn-del');
    this.btnEqual = document.querySelector('.btn-eq');

    this.clicaBotao = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.apagaTodos();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.calcula();
            }
        })
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.apagaTodos = () => {
        this.display.value = ''
    }

    this.inicia = () => {
        this.clicaBotao();
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }

    this.calcula = () =>{
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida!');
                return;
            }else{
                this.display.value = Number(conta)
            }
        }catch(error){
            alert('Conta inválida!')
        }
    }
}
const calculadora = new Calculadora();
calculadora.inicia();