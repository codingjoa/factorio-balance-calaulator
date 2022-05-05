const level1 = require('./level1');
const level2 = require('./level2');
const level3 = require('./level3');
const level4 = require('./level4');
const level5 = require('./level5');
const level6 = require('./level6');
const modules = require('./modules');


describe('군사 과학 팩', () => {
  it('factory3', () => {
    //const result = level3(18);
    //expect(result.main).toBe(34.02);
    const A = modules.semaphore(modules.speedModule3(20));
    expect(A.speed).toBe(5);
    expect(A.efficiency).toBe(0);
    const B = modules.efficiencyModule3(4);
    expect(B.speed).toBe(-0.6);
    expect(B.efficiency).toBe(0.4);
    const S = modules.factory3(modules.reduce(A, B));
    expect(S.speed).toBe(6.75);
    expect(S.efficiency).toBe(1.4);
  });
  it('furance3', () => {
    //const result = level3(18);
    //expect(result.main).toBe(34.02);
    const A = modules.semaphore(modules.speedModule3(20));
    expect(A.speed).toBe(5);
    expect(A.efficiency).toBe(0);
    const B = modules.efficiencyModule3(2);
    expect(B.speed).toBe(-0.3);
    expect(B.efficiency).toBe(0.2);
    const T = modules.furance3(modules.reduce(A, B));
    expect(T.speed).toBe(11.4);
    expect(T.efficiency).toBe(1.2);
  });
  it('level1', () => {
    const result = level1(22);
    expect(result.main).toBe(41.58);
  });
  it('level2', () => {
    const result = level2(50);
    expect(result.main).toBe(78.75);
  });
  it('level3', () => {
    const result = level3(18);
    expect(result.main).toBe(34.02);
  });
  it('level4', () => {
    const result = level4(44);
    expect(result.main).toBe(34.65);
  });
  it('level5', () => {
    const result = level5(16);
    expect(result.main).toBe(21.6);
  });
  it('level6', () => {
    const result = level6(24);
    expect(result.main).toBe(32.4);
  });
});
