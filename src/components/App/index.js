import React, { useState } from 'react';

import Button from '../Button'
import Select from '../Select'
import "./App.css"


const App = () => {
    const [value, setValue] = useState("0")
    const [memory, setMemory] = useState(null)
    const [operator, setOperator] = useState(null)
    const [vivod, setVivod] = useState("")

    const handleButtonPress = content => () => {
        const number = parseFloat(value)

        if (content === 'AC') {
            setValue("0")
            setMemory(null)
            setOperator(null)
            setVivod("")
            return;                 // Остановка setValue
        }
        if (content === '±') {
            setValue((number * -1).toString())
            setOperator(null)
            return;
        }

        if (content === '%') {
            setValue((number / 100).toString())
            setMemory(null)
            setOperator(null)
            return;
        }
        if (content === ".") {
            if (value.includes('.')) return;

            setValue(value + ".")
            return;
        }

        if (content === "+") {
            setVivod(value)
            if (operator != null) {
                if (operator === "+") {
                    setMemory((memory + parseFloat(value)))
                    setVivod(memory + parseFloat(value))
                } else if (operator === "-") {
                    setMemory((memory - parseFloat(value)))
                    setVivod(memory - parseFloat(value))
                } else if (operator === "×") {
                    setMemory((memory * parseFloat(value)))
                    setVivod(memory * parseFloat(value))
                } else if (operator === "÷") {
                    setMemory((memory / parseFloat(value)))
                    setVivod(memory / parseFloat(value))
                }
            } else {
                setVivod(value + "+")
                setMemory(parseFloat(value))
            }
            setValue("0")
            setOperator("+")
            return;
        }

        if (content === "-") {
            setVivod(value)
            if (operator != null) {
                if (operator === "+") {
                    setMemory((memory + parseFloat(value)))
                    setVivod(memory + parseFloat(value))
                } else if (operator === "-") {
                    setMemory((memory - parseFloat(value)))
                    setVivod(memory - parseFloat(value))
                } else if (operator === "×") {
                    setMemory((memory * parseFloat(value)))
                    setVivod(memory * parseFloat(value))
                } else if (operator === "÷") {
                    setMemory((memory / parseFloat(value)))
                    setVivod(memory / parseFloat(value))
                }
            } else {
                setVivod(value + "-")
                setMemory(parseFloat(value))
            }

            setValue("0")
            setOperator("-")
            return;
        }

        if (content === "×") {
            setVivod(value)
            if (operator != null) {
                if (operator === "+") {
                    setMemory((memory + parseFloat(value)))
                    setVivod(memory + parseFloat(value))
                } else if (operator === "-") {
                    setMemory((memory - parseFloat(value)))
                    setVivod(memory - parseFloat(value))
                } else if (operator === "×") {
                    setMemory((memory * parseFloat(value)))
                    setVivod(memory * parseFloat(value))
                } else if (operator === "÷") {
                    setMemory((memory / parseFloat(value)))
                    setVivod(memory / parseFloat(value))
                }
            } else {
                setVivod(value + "×")
                setMemory(parseFloat(value))
            }

            setValue("0")
            setOperator("×")
            return;
        }

        if (content === "÷") {
            setVivod(value)
            if (operator != null) {
                if (operator === "+") {
                    setMemory((memory + parseFloat(value)))
                    setVivod(memory + parseFloat(value))
                } else if (operator === "-") {
                    setMemory((memory - parseFloat(value)))
                    setVivod(memory - parseFloat(value))
                } else if (operator === "×") {
                    setMemory((memory * parseFloat(value)))
                    setVivod(memory * parseFloat(value))
                } else if (operator === "÷") {
                    setMemory((memory / parseFloat(value)))
                    setVivod(memory / parseFloat(value))
                }
            } else {
                setVivod(value + "÷")
                setMemory(parseFloat(value))
            }

            setValue("0")
            setOperator("÷")
            return;
        }

        // Режим - Инженер
        if (content === "sin") {
            setValue(Math.sin(value).toString())
            return;
        }

        if (content === "sin⁻¹") {
            if ((-1 <= value) && (value <= 1)) {
                setValue(Math.asin(value).toString())
            } else {
                alert('Недопустимый ввод, область определения функции arcsin x: −1 ≤ x ≤ 1.')
            }
            return;
        }

        if (content === "π*x") {
            setValue((Math.PI * value).toString())
            return;
        }

        if (content === "cos") {
            setValue(Math.cos(value).toString())
            return;
        }

        if (content === "cos⁻¹") {
            if ((-1 <= value) && (value <= 1)) {
                setValue(Math.acos(value).toString())
            } else {
                alert('Недопустимый ввод, область определения функции arcos x: −1 ≤ x ≤ 1.')
            }
            return;
        }

        if (content === "tan") {
            setValue(Math.tan(value).toString())
            return;
        }

        if (content === "tan⁻¹") {
            setValue(Math.atan(value).toString())
            return;
        }

        if (content === "exp") {
            setValue(Math.exp(value).toString())
            return;
        }

        if (content === "x²") {
            setValue(Math.pow(value, 2).toString())
            return;
        }

        if (content === "x³") {
            setValue(Math.pow(value, 3).toString())
            return;
        }

        if (content === "ln2") {
            setValue(Math.log2(value).toString())
            return;
        }

        if (content === "√") {
            setValue((Math.sqrt(value)).toString())
            return;
        }

        //Режим - Программист
        if (content === "BIN") {
            setValue(parseInt(value).toString(2))
            return;
        }

        if (content === "DEC") {
            let reg = /[2-9]/g
            setValue(parseInt(value, 2).toString())
            if (parseInt(value, 2).toString() === 'NaN' || reg.test(value)) {
                setValue('Ошибка')
                return;
            }
            return;
        }

        if (content === "OCT") {
            setValue(parseInt(value).toString(8))
            return;
        }

        if (content === "HEX") {
            setValue(parseInt(value).toString(16))
            return;
        }

        // Результат
        if (content === "=") {
            if (!operator) return;

            if (operator === "+") {
                setValue((memory + parseFloat(value)).toString())
            } else if (operator === "-") {
                setValue((memory - parseFloat(value)).toString())
            } else if (operator === "×") {
                setValue((memory * parseFloat(value)).toString())
            } else if (operator === "÷") {
                setValue((memory / parseFloat(value)).toString())
            }
            setVivod("")
            setMemory(null)
            setOperator(null)
            return;
        }

        if (value[value.length - 1] === '.') {
            setValue(value + content)
        } else {
            setValue(parseFloat(number + content).toString())
        }
        if (value.length >= 7) {
            value.substr(6)
            setValue(value)
        }
    }

    const clickUsual = () => {
        const app = document.querySelector('.App')
        const engineer = document.querySelectorAll('.engineer')
        const programmer = document.querySelectorAll('.programmer')
        engineer.forEach(item => {
            item.classList.remove('active')
        })
        programmer.forEach(item => {
            item.classList.remove('active')
        })
        setValue("0")
        app.classList.remove('modetwo')
        app.classList.remove('modethree')
    }

    const clickEngineer = () => {
        const app = document.querySelector('.App')
        const engineer = document.querySelectorAll('.engineer')
        const programmer = document.querySelectorAll('.programmer')
        const top = document.querySelector('.top')
        engineer.forEach(item => {
            item.classList.add('active')
        })
        programmer.forEach(item => {
            item.classList.remove('active')
        })
        setValue("0")
        top.textContent = ""
        app.classList.add('modetwo')
        app.classList.remove('modethree')
    }

    const clickProgrammer = () => {
        const app = document.querySelector('.App')
        const engineer = document.querySelectorAll('.engineer')
        const programmer = document.querySelectorAll('.programmer')
        engineer.forEach(item => {
            item.classList.remove('active')
        })
        programmer.forEach(item => {
            item.classList.add('active')
        })
        app.classList.remove('modetwo')
        setValue("0")
        app.classList.add('modethree')

    }

    return <div className="main">
        <div className="App">
            <div className="top">{vivod}</div>
            <div className="display">{value}</div>
            <div className="button-engineer">
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="sin" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="sin⁻¹" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="π*x" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="cos" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="cos⁻¹" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="tan" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="tan⁻¹" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="exp" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="x²" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="x³" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="ln2" />
                <Button classprop="engineer" onButtonClick={handleButtonPress} content="√" />
            </div>
            <div className="button-programmer">
                <Button classprop="programmer" onButtonClick={handleButtonPress} content="BIN" />
                <Button classprop="programmer" onButtonClick={handleButtonPress} content="DEC" />
                <Button classprop="programmer" onButtonClick={handleButtonPress} content="OCT" />
                <Button classprop="programmer" onButtonClick={handleButtonPress} content="HEX" />
            </div>
            <div className="buttons">
                <Button onButtonClick={handleButtonPress} content="AC" type="function" />
                <Button onButtonClick={handleButtonPress} content="±" type="function" />
                <Button onButtonClick={handleButtonPress} content="%" type="function" />
                <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
                <Button onButtonClick={handleButtonPress} content="7" />
                <Button onButtonClick={handleButtonPress} content="8" />
                <Button onButtonClick={handleButtonPress} content="9" />
                <Button onButtonClick={handleButtonPress} content="×" type="operator" />
                <Button onButtonClick={handleButtonPress} content="4" />
                <Button onButtonClick={handleButtonPress} content="5" />
                <Button onButtonClick={handleButtonPress} content="6" />
                <Button onButtonClick={handleButtonPress} content="-" type="operator" />
                <Button onButtonClick={handleButtonPress} content="1" />
                <Button onButtonClick={handleButtonPress} content="2" />
                <Button onButtonClick={handleButtonPress} content="3" />
                <Button onButtonClick={handleButtonPress} content="+" type="operator" />
                <Button onButtonClick={handleButtonPress} content="0" />
                <Button onButtonClick={handleButtonPress} content="." />
                <Button onButtonClick={handleButtonPress} content="=" type="operator" />

            </div>
        </div>
        <Select clickButtonOne={clickUsual} clickButtonTwo={clickEngineer} clickButtonThree={clickProgrammer} />
    </div>
}

export default App