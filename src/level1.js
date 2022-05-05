const modules = require('./modules');
module.exports = count => {
  const A = modules.semaphore(modules.speedModule3(20));
  const B = modules.efficiencyModule3(4);
  const S = modules.factory3(modules.reduce(A, B));

  const C = modules.efficiencyModule3(2);
  const T = modules.furance3(modules.reduce(A, C));

  const AAA = {
    name: '자동화팩',
    time: 5,
    factory: S,
    output: 1,
    materials: [{
      name: '톱니부품',
      time: 0.5,
      factory: S,
      consume: 1,
      output: 1,
      materials: [{
        name: '철판',
        time: 3.2,
        factory: T,
        consume: 2,
        output: 1,
      }]
    }, {
      name: '구리판',
      time: 3.2,
      factory: T,
      consume: 1,
      output: 1,
    }],
  };

  return modules.pubsub(AAA, count);

  return {
    main: modules.round(1 / 5 * 1 * S.speed * S.efficiency * count),
    material1: {
      createCount: modules.balancer(
        modules.round(1 / 5 * 1 * S.speed * count),
        modules.round(1 / 0.5 * 1 * S.speed * S.efficiency)
      ),
      consume: modules.round(1 / 5 * 1 * S.speed * count),
    }

  };
}
