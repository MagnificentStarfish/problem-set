// function isPalindrome(x) {
//     let strX = x.toString().toLowerCase();
//     let reversedStrX = strX.split('').reverse().join('');
//     if (strX === reversedStrX) {
//       return 'true';
//     } else {
//       return 'false';
//     }
//   }

// const result = isPalindrome("Bob");
// console.log(result);


// function sumOfDifferences(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     var numArray = [arr];
//     numArray.sort(function(a,b) {
//       return a-b;
//     });
//   }
//   console.log(numArray);

//   let arr = [1,4,7,2]
//   sumOfDifferences(arr)


// function sumOfDifferences(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }

//     let sortedArr = arr.sort((a, b) => b - a);
//     let sum = 0;

//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       sum += sortedArr[i] - sortedArr[i + 1];
//     }
//     console.log(sum)
//     return sum;
//   }

//   sumOfDifferences([1, 2, 10])


// function solution(nums){
//     if (!nums || nums.length === 0) {
//         return [];
//     }
//     let sortedNums = nums.sort((a,b) => (a-b));
//     console.log(sortedNums);
//     return sortedNums;
// }

// let nums = [3,1,2];
// solution(nums)


// function greet() {
//     console.log("hello world!");
//     return "hello world!";
//   }

// greet()


// function greet(name) {
//   console.log("Hello "+ name + "!");
// }
// greet("Steve");

class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (fighter1.name === firstAttacker) {
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        return fighter1.name;
      }
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        return fighter2.name;
      }
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        return fighter2.name;
      }
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        return fighter1.name;
      }
    }
  }
}
