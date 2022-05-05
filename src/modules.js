
function round(score) {
  return Math.round(score * 100) / 100;
}

function efficiencyModule3(count) {
  return {
    speed: - 0.15 * count,
    efficiency: 0.1 * count,
  };
}

function factory3(obj) {
  return {
    speed: 1.25 + (obj.speed * 1.25),
    efficiency: 1 + obj.efficiency
  };
}

function furance3(obj) {
  return {
    speed: 2 + (obj.speed * 2),
    efficiency: 1 + obj.efficiency
  };
}

function oneTimeCreate(T, S, C) {
  // 생산 시간, 1초 생산 개수, 1회 생산 개수
  return 1 / T * C * S.speed * S.efficiency;
}

function oneTimeConsume(T, S, C) {
  // 생산 시간, 1초 생산 개수, 1회 소비 개수
  return 1 / T * C * S.speed;
}

function balancer3(pub, sub, minimum) {
  return modules.balancer(
    modules.round(oneTimeConsume(pub.time, pub.factory, sub.consume) * minimum),
    modules.round(oneTimeCreate(sub.time, sub.factory, sub.output))
  );
}


function balancer(target, material) {
  let i = 0;
  while(target > (material * ++i)) ;
  return i;
}

function pubsub(obj, count) {
  return {
    ...obj,
    score: modules.round(oneTimeCreate(obj.time, obj.factory, obj.output) * count),
    materials: obj.materials && obj.materials.map(row => {
      const minimum = balancer3(obj, row, count);
      return {
        ...pubsub(row, minimum),
        minimum,
      };
    }),
  };


  const { materials } = obj;
  const children = materials && materials.map(row => {
    const minimum = balancer3(obj, row, count);
    return {
      name: row.name,
      minimum,
      materials: pubsub(row, minimum),
    }
  });
  console.log(obj);
  return {
    name: obj.name,
    children,
  }
}

function speedModule3(count) {
  return {
    speed: 0.5 * count,
    efficiency: 0,
  };
}

function reduce(...obj) {
  const sum = obj.reduce((acc, cur) => ({
    speed: acc.speed + cur.speed,
    efficiency: acc.efficiency + cur.efficiency,
  }));
  return sum;
}

function semaphore(...obj) {
  const sum = reduce(...obj);
  return {
    ...sum,
    speed: sum.speed * 0.5,
  };
}

const modules = {
  round,
  balancer,
  efficiencyModule3,
  speedModule3,
  factory3,
  furance3,
  reduce,
  semaphore,
  pubsub,
};
module.exports = modules;
