const modules = require('./modules');
module.exports = count => {
  const A = modules.semaphore(modules.speedModule3(20));
  const B = modules.efficiencyModule3(4);
  const S = modules.factory3(modules.reduce(A, B));
  return {
    main: modules.round(1 / 10 * 2 * S.speed * S.efficiency * count),
  };
}
