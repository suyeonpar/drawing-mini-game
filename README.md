# drawing-mini-game 🎨
### JavaScript로 미니 게임을 만들어보자!

프론트엔드의 기본 소양인 자바스크립트..
화려한 스킬도 좋지만 기본기가 탄탄해야한다는 생각을 했다.

우와스러운 코드는 없지만 간단하면서도 갈끔한 코드를 생각해 내보았다.

아래는 캡쳐본..


<img src="https://github.com/suyeonpar/drawing-mini-game/assets/142365626/d2c0d17a-41cf-414e-a32a-783856bcc527" width="400" height="200" alt="image">

### 사용한 기술


#### Environmnet

![image](https://github.com/suyeonpar/clone-belif/assets/142365626/40429fb4-d844-4ea9-b9cd-f2f9f89fbd79)



#### Development

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

정말 간단하면서도 다시금 자바스크립트의 기본 원리에 대해 알아 볼 수 있었다.



### 코드 분석

차근차근 코드를 분석해보자!

* #### 전체구간과 타이틀 구간

![image](https://github.com/suyeonpar/drawing-mini-game/assets/142365626/1d8eb1a1-4b39-4fa6-9ca5-2cf805a3e837)

그림이라는 주제에 맞게 canvas라 작명해주고~
제목과 부제목도 설정해주기

처음에는 제목을 따로 만들어주지 않았는데, 화면을 열었을때 아무것도 없이 하얀 화면만 보이는 휑한 모습에 방문하는 사람들에게 이게 뭘하는 페이지인지 알아 볼 수 없을것 같아 제목을 추가해주었다.

만들어주니 확실히 나았다.

그리고 나는 css없이 오로지자! 자바스크립트로 만들어 줄 것이기 때문에..  css역시 자바스크립트로 꾸며준다.

* #### 마우스 움직임에 반응하기

말그래도 그림판은 내가 움직이는 마우스에 따라 그림이 그려지는 것 이기 때문에

마우스에 반응하는 코드를 짜줘야한다.

![image](https://github.com/suyeonpar/drawing-mini-game/assets/142365626/0bb62a1a-eca2-4cae-8404-05bbf670b1cd)

이렇게 간단하면서도 단순하게 코드를 만들어주었다.

마우스가 x,y축에 반응할 수 있도록~


* #### 내가 원하는 색상으로 그림 그리기

일반 까만색의 선은 재미가 없지 않을까.. 생각했다.
내가 원하는 색은 무지개색!

그럼 마우스로 그림을 그리는 이벤트 진행동안 컬러도 바껴야하는데.. 그럼 코드를 어떻게 짜야할까 생각했다.

![image](https://github.com/suyeonpar/drawing-mini-game/assets/142365626/ea7369b9-eeaf-436b-9012-883f2018f014)

처음 hue를 0으로 설정해준 다음 위와 같이 코드를 짜주면 된다! 각각의 x,y축이 변경될때마다 0에서 360까지 증감되고 360보다 작거나 커질 시 다시 0으로 되돌리는 방법

이렇게 하면 내가 원하는 무지개컬러의 선을 얻을 수 있다.



