// 사다리칸 분리
function ladder(next, dice) {
  if (next == 4) {
    return dice + 10;
  } else if (next == 8) {
    return dice + 22;
  } else if (next == 28) {
    return dice + 48;
  } else if (next == 21) {
    return dice + 21; // 42가 아니라 21을 더해야 한다. 21 -> 42이기 때문
  } else if (next == 50) {
    return dice + 17;
  } else if (next == 71) {
    return dice + 21; // 92가 아니라 21을 더해야 한다. 71 -> 92이기 때문
  } else if (next == 80) {
    return dice + 19;
  }
}

// 뱀칸 분리
function snake(next, dice) {
  if (next == 97) {
    return dice - 19;
  } else if (next == 95) {
    return dice - 39;
  } else if (next == 88) {
    return dice - 64;
  } else if (next == 62) {
    return dice - 44;
  } else if (next == 48) {
    return dice - 22;
  } else if (next == 36) {
    return dice - 30;
  } else if (next == 32) {
    return dice - 22;
  }
}

function nextPosition(current, dice) {
  const next = current + dice;

  const ladderStarts = [4, 8, 21, 28, 50, 71, 80]; // 사다리 시작 위치
  const snakeStarts = [32, 36, 48, 62, 88, 95, 97]; // 뱀 시작 위치
  if (ladderStarts.includes(next)) {
    return ladder(next, dice);
  } else if (snakeStarts.includes(next)) {
    return snake(next, dice);
  }

  return dice;
}

// 사다리 테스트
let start = 1;
let next = 1;
let dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 5;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 18;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 23;
dice = 5;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 49;
dice = 1;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 69;
dice = 2;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 74;
dice = 6;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

// 뱀 테스트
start = 91;
dice = 6;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 91;
dice = 4;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 85;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 57;
dice = 5;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 47;
dice = 1;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 33;
dice = 3;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);

start = 31;
dice = 1;
next = start + nextPosition(start, dice);
console.log("from=", start, ", dice=", dice, ", next=", next);
