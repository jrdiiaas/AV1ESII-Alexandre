import { potencia, subtracao, multiplicacao, divisao } from "../index.js"
describe('Testes da Calculadora', () => {
    it('Deve retornar a potencia', () => {
        const esperado = 8
        const retornado = potencia(2, 3)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar o maior valor', () => {
        const esperado = 95
        const retornado = Math.max(24, 95)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a menor valor', () => {
        const esperado = 24
        const retornado = Math.min(24, 95)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a raiz quadrada', () => {
        const esperado = 5
        const retornado = Math.sqrt(25)
        expect(retornado).toBe(esperado)
    })
})


