const modules = require('./modules');
module.exports = count => {
  const A = modules.semaphore(modules.speedModule3(20));
  const B = modules.efficiencyModule3(4);
  const S = modules.factory3(modules.reduce(A, B));

  const C = modules.efficiencyModule3(2);
  const T = modules.furance3(modules.reduce(A, C));

  const AAA = {
    name: '고급 회로',
    time: 6,
    factory: S,
    output: 1,
    materials: [{
      name: '구리 전선',
      time: 0.5,
      factory: S,
      consume: 4,
      output: 2,
    }],
  };

  return modules.pubsub(AAA, count);
}
