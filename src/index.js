module.exports = function toReadable (number) {
  let a = Math.trunc(number / 100);
  let b = Math.trunc(number / 10) % 10;
  let c = number % 10;
  let result = '';
  if (number === 0) {
      return 'zero';
  }
  if (a > 0) {
      result = (result + toReadable1(a) + ' hundred').trim();
  }
  if (b > 1) {
      result = (result + ' ' + toReadable2(b)).trim();
  }
  if (b === 1) {
      result = (result + ' ' + toReadable3(c)).trim();
  } else {
      result = (result + ' ' + toReadable1(c)).trim();
  }
  return result;
}

function toReadable1(a) {
    switch (a) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 0:
            return '';
    }
}

function toReadable2(a) {
    switch (a) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
        case 1:
        case 0:
            return '';
    }
}

function toReadable3(a) {
    switch (a) {
        case 1:
            return 'eleven';
        case 2:
            return 'twelve';
        case 3:
            return 'thirteen';
        case 4:
            return 'fourteen';
        case 5:
            return 'fifteen';
        case 6:
            return 'sixteen';
        case 7:
            return 'seventeen';
        case 8:
            return 'eighteen';
        case 9:
            return 'nineteen';
        case 0:
            return 'ten';
    }
}
