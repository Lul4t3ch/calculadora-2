function criaCalculadora() {
    return {
        display: document.querySelector(".display"),


        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            document.addEventListener("click", function (e) {
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.apagaUltimo();
                }

                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUltimo() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta inválida!");
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert("Conta inválida!");
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) this.realizaConta();
            })
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
