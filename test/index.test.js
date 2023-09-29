const { describe, expect, it } = require('@jest/globals');
const ServicoAvaliacao = require('../src/services/avaliacao');

describe('Testes da avaliação', () => {
  const servico = new ServicoAvaliacao();

  it('Deve realizar a adição de dois números', () => {
    const result = servico.Adicao(-5, 0);
    expect(result).toBe(-5);
  });

  it('Deve realizar a subtração de dois números', () => {
    const result = servico.Subtracao(0, -4);
    expect(result).toBe(4);
  });

  it('Deve realizar a multiplicação de dois números', () => {
    const result = servico.Multiplicacao(-12, 0.5);
    expect(result).toBe(-6);
  });

  it('Deve realizar a divisão de dois números', () => {
    const result = servico.Divisao(0.5, -2);
    expect(result).toBe(-0.25);
  });

  it('Deve realizar a exponenciação de um número', () => {
    const result = servico.Exponenciacao(-2, 3);
    expect(result).toBe(-8);
  });

  it('Deve realizar a radiciação de um número', () => {
    const result = servico.Radiciacao(144);
    expect(result).toBe(12);
  });
});
