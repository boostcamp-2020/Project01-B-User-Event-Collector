import React from "react";
import LyricModal from "./LyricModal"

export default {
  title: "LyricModal",
  component: LyricModal,
}

const STORY_SRC = "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg?type=r360Fll&v=20200507115931";
const STORY_TITLE = "그냥";
const STORY_ARTIST = "이영지";

const STORY_LYRICS = 
`keep callin' to me
왜 인지는 묻지 말아 주면은 안돼?
just text me 
밥은 잘 먹고 있는지에 대해
뭔들 난 다 좋아
별거 없는 그런 삶
im so sick of these days
말해 줘 너의 밤은 어때
또 너의 날은 어떻고?
나의 시간은 못 돼서
다시 이 굴레에 날 가둬  
이 밤은 또 내껄
자꾸만 뺏으려 들어
where should i go right now? 

뭘 쥐어도 다 모래
결국 흐르니 난 뭘 해?  
못 된 생각이 인내를 놓을땐 
도태 되는거야 no thanks
가지면 뭐해
i got nothing to prove no
사랑을 할래
위기는 모르는 채로 oh 
너 불안정한 내게
자꾸 깊은 믿음을 심어주지마
나도 모르는 새에
널 내 안에 들여놓고 착각 할지도 몰라

painful thoughts 
in ma head 
다 모순인 거야
비운의 틈새로
나 겨울의 냄새를 맡고파
painful thoughts
im ma head 
다 거짓인 거야
난 그저 여름의 향수에만 잠깐 젖고파
cuz im bored
아늑하기만 한
나의 방은 어두워서
상처는 아물지  않아
날 봐줘
저 멀리 가고 있는
날 보게 된다면은 붙잡아줘 

time is tickin' when the love is begin
i can take you everywhere 
왜 망설이고 있어?
time is tickin' when the love is begin--
나와/ 밤을 새 아침이 없는 것처럼
time is tickin' when the love is begin
maybe we can find out/ the answer
time is tickin' when the love is begin  
oh 얘기를 해 잠은 충분해 난     

잠은 충분해 매일
다 버려진 채 잠식당할까 그게 두려워 
넌, 넌 나를 찾고 있어?
내가 성급해 보이더라도 나를 꼭 안아줘
배고픈 내일이 와도
고대하던 것들이 다 무너져도
it doesn't matter anymore 
그냥 공허할 뿐인 거야
내가 쥐었던 게 다
스치듯 지나가니까

난 아둔한 poor little girl  
나와 같이 가자 차피 재미를 볼 거는 너
닮았다니까 우린 
그렇게 굴지 마
난 괜히 다 포용을 하는 stupid uh uh
dumbass 너는 뭔데?
됐고 머릴 머릴 비워
나는 못 됐어
뻔해 우리의 결말
근데 난 아직도 답답해 왠지

painful thoughts 
in ma head 
다 모순인 거야
비운의 틈새로
나 겨울의 냄새를 맡고파
painful thoughts 
im ma head 
다 거짓인 거야
난 그저 여름의 향수에만 잠깐 젖고파
cuz im boared
아늑하기만 한
나의 방은 어두워서 
상처는 아물지 않아
날 봐줘
저 멀리 가고 있는
날 보게 된다면은 붙잡아줘 

time is tickin' when the love is begin
i can take you everywhere 
왜 망설이고 있어?
time is tickin' when the love is begin
나와 밤을 새 아침이 없는 것처럼
time is tickin' when the love is begin
maybe we can find out the answer
time is tickin' when the love is begin  
oh 얘기를 해 잠은 충분해 난  

we can find out the answer
we can find out the answer
`

export const Default = () => <LyricModal src = {STORY_SRC} title = {STORY_TITLE} artist = {STORY_ARTIST} lyrics = {STORY_LYRICS}/>