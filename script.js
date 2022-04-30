function newCalculator() {
    return {
        display: document.querySelector('.display'),
        calculatorDOM: document.querySelector('.calculator'),

        init() {
            this.handleClick()
        },

        putOnDisplay(target) {
            this.display.value += target.innerText
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteLastDigit() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calculate() {
            const displayValue = this.display.value
            const displayValueParsed = parseInt(displayValue)


            console.log(displayValueParsed);
            console.log(displayValueParsed == NaN);
            
            if(isNaN(displayValueParsed)) {
                this.clearDisplay()
               alert('Invalid calculation')
            } else {
                const result = eval(displayValue)
                this.display.value = result
                
            }
        },

        handleClick() {
            this.calculatorDOM.addEventListener('click', element => {
                const target = element.target

                if(target.classList.contains('btn-num')) {
                    this.putOnDisplay(target)
                } else if (target.classList.contains('btn-clear')) {
                    this.clearDisplay()
                } else if (target.classList.contains('btn-del')) {
                    this.deleteLastDigit()
                } else if (target.classList.contains('btn-eq')) {
                    this.calculate()
                }
            })
        },
    }
}

const calculator = newCalculator()
calculator.init()