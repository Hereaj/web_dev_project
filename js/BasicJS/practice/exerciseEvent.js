let paragraphElement = document.querySelector("body p");

// 4 따라서 함수로 직접 변수를 조작해야함
function changeParagraphText() {
    paragraphElement.textContent = "clicked!";
    console.log(paragraphElement);
}

// 두번째 자리엔 무조건 함수
// 1함수자리에 괄호 넣지말기 -> 2괄호를 넣으면 바로 실행이됨 -> 3이벤트가 상호작용 전에 실행됨
paragraphElement.addEventListener("click", changeParagraphText);


let inputbox = document.querySelector("input");

// 이벤트 함수에 파라미터를 넣으면 자동으로 이벤트 오브젝 생성
function retrieveUserInput(event) {
    // input as whole text
    //let enteredText = inputbox.value;
    let enteredText = event.target.value;

    // input as one text
    // let enteredText = event.data;

    console.log(enteredText);
}
inputbox.addEventListener("input", retrieveUserInput);