//문제 1
//포켓몬스터 배열 '_pokemon'에 새로운 포켓몬을 추가해주세요. if나 for문을 사용하여 _pokemon 배열의 마지막에 새로운 포켓몬 이름을 추가하세요.
const sp_Pokemon = [
    "뮤", "뮤츠", "뮤츠쥬",
    "푸리", "푸리코", "푸리코리",
    "라티아스", "라티오스", "칠색조",
    "아르투리우스", "질투구리", "크레세리아",
    "호올", "디안시", "크레세리아",
    "셀러비", "마나피", "다크라이",
    "쉐이미", "아르세우스", "포르텍트"
];

//답
const newPokemon = "몬몬"; //추가할 포켓몬 정의
const length = sp_Pokemon.length; //이거 길이 값 21

for (let i = 0; i <= length; i++) { //이게 되네?
    if (i === length) {
        // 현재 인덱스가 배열의 길이와 같으면
        sp_Pokemon[length] = newPokemon; // 새로운 포켓몬을 배열의 마지막에 추가
    }
}
console.log(length)
//작업 시작 240107
//문제 2
//'_pokemon' 배열의 마지막 포켓몬을 방출해주세요. 이를 위해 배열의 마지막 원소를 제거하고, 그 원소의 이름을 출력하세요.

// 배열이 비어있는 경우에 대한 예외 처리
if (sp_Pokemon.length === 0) {
    console.log("배열이 비어있습니다.");
} else {
    // 배열의 마지막 포켓몬을 찾아내기 위해 반복문 사용
    let lastPokemon;
    for (let i = 0; i < sp_Pokemon.length; i++) {
        if (i === sp_Pokemon.length - 1) {
            lastPokemon = sp_Pokemon[i];
        }
    }
    
    // 마지막 포켓몬 출력
    console.log("마지막 포켓몬: " + lastPokemon);
}




// //답
// const removedPokemon = _pokemon.pop();
// console.log(removedPokemon);

// //문제 3
// //'_pokemon' 배열에서 찾고자 하는 포켓몬의 인덱스를 찾아주세요. 포켓몬이 배열에 없다면 -1을 출력하세요.

// //답
// const searchPokemonIndex = _pokemon.indexOf("찾고자하는포켓몬");
// console.log(searchPokemonIndex);

// //문제 4
// //'_pokemon' 배열에서 이름이 '리'로 시작하는 포켓몬만을 새로운 배열에 담아 출력해주세요.

// //답
// const pokemonStartingWithRi = [];
// for (let i = 0; i < _pokemon.length; i++) {
//     if (_pokemon[i].startsWith("리")) {
//         pokemonStartingWithRi.push(_pokemon[i]);
//     }
// }
// console.log(pokemonStartingWithRi);

// //문제 5
// //'_pokemon' 배열에서 특정 포켓몬이 있는지 확인하고 결과를 출력해주세요.

// //답
// const specificPokemon = "찾고자하는포켓몬";
// const isPokemonExist = _pokemon.includes(specificPokemon);
// console.log(isPokemonExist);

// //문제 6
// //'_pokemon' 배열의 원소들의 순서를 뒤집어 출력해주세요.

// //답
// const reversedPokemon = _pokemon.slice().reverse();
// console.log(reversedPokemon);

// //문제 7
// //'_pokemon' 배열의 원소들을 가나다 순으로 정렬해 출력해주세요.

// //답
// const sortedPokemon = _pokemon.slice().sort();
// console.log(sortedPokemon);

// //문제 8
// //'_pokemon' 배열에서 총 6개의 포켓몬만을 새로운 배열에 담아 출력해주세요.

// //답
// const selectedPokemon = _pokemon.slice(0, 6);
// console.log(selectedPokemon);

// //문제 9
// //'_pokemon' 배열과 다른 하나인 '_digimon' 배열을 연결해 새로운 배열을 생성해주세요.

// //답
// const combinedArray = _pokemon.concat(_digimon);
// console.log(combinedArray);

// //문제 10
// //'_pokemon' 배열의 길이(length 프로퍼티 사용제외)를 출력해주세요.

// //답
// const arrayLength = _pokemon.length;
// console.log(arrayLength);

// //문제 11
// //'_pokemon' 배열에서 특정 인덱스의 포켓몬 이름을 새로운 이름으로 변경해주세요.

// //답
// const indexToChange = 2; // 변경하고자 하는 인덱스
// const newPokemonName = "새로운포켓몬이름";
// _pokemon[indexToChange] = newPokemonName;

// //문제 12
// //'_pokemon' 배열의 모든 포켓몬 이름 뒤에 'Lv2'를 붙여 새로운 배열을 만들어 출력해주세요.

// //답
// const modifiedPokemon = [];
// for (let i = 0; i < _pokemon.length; i++) {
//     modifiedPokemon.push(_pokemon[i] + "Lv2");
// }
// console.log(modifiedPokemon);

// //문제 13
// //'_pokemon' 배열의 모든 원소를 순회하며 출력해주세요.

// //답
// for (let i = 0; i < _pokemon.length; i++) {
//     console.log(_pokemon[i]);
// }

// //문제 14
// //'_pokemon' 배열에서 포켓몬스터 이름 '두'로 시작하는 조건에 알맞는 포켓몬 중 찾은 목록에서 두번째 포켓몬을 찾아 출력해주세요.

// //답
// const startsWithDu = _pokemon.filter(pokemon => pokemon.startsWith("두"));
// if (startsWithDu.length >= 2) {
//     console.log(startsWithDu[1]);
// }

// //문제 15
// //'_pokemon' 배열의 모든 원소마다 쉼표를 추가하여 하나의 문자열로 합쳐 출력해주세요.

// //답
// const joinedString = _pokemon.join(", ");
// console.log(joinedString);

// //문제 16
// //'_pokemon' 배열의 중간지점에 해당하는 인덱스 이후의 원소를 모두 제거해주세요.

// //답
// const midPointIndex = Math.floor(_pokemon.length / 2);
// _pokemon.splice(midPointIndex + 1);

// //문제 17
// //'_pokemon' 배열을 새로운 배열에 복사해 문서에 적절한 태그로 생성하여 출력해주세요.

// //답
// const copiedPokemonArray = _pokemon.slice();
// const pokemonListElement = document.createElement("ul");
// for (let i = 0; i < copiedPokemonArray.length; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = copiedPokemonArray[i];
//     pokemonListElement.appendChild(listItem);
// }
// console.log(pokemonListElement);
