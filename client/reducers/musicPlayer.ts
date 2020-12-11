import { TrackRowCardProps } from 'interfaces/props';

interface MusicPlayer {
    nowPlaying: TrackRowCardProps;
    playTime: number;
    upNextTracks: TrackRowCardProps[];
}

const initialState = {
    upNextTracks: [{
        "id": 5,
        "title": "Lovesick Girls",
        "lyrics": "영원한 밤\n창문 없는 방에 우릴 가둔 love\nWhat can we say\n매번 아파도 외치는 love\n\n다치고 망가져도 나\n뭘 믿고 버티는 거야\n어차피 떠나면 상처투성인 채로 미워하게 될걸\n끝장을 보기 전 끝낼 순 없어\n이 아픔을 기다린 것처럼\n\n아마 다 잠깐 일지도 몰라\n우린 무얼 찾아서 헤매는 걸까\n\nBut I don’t care I’ll do it over and over\n내 세상 속엔 너만 있으면 돼\n\nWe are the lovesick girls\n네 멋대로 내 사랑을 끝낼순 없어\nWe are the lovesick girls\n이 아픔 없인 난 아무 의미가 없어\n\nBut we were born to be alone\nYeah we were born to be alone\nYeah we were born to be alone \nBut why we still looking for love\n\nNo love letters, no x and o’s\nNo love never, my exes know\nNo diamond rings, that set in stone\nTo the left, better left alone\n\nDidn’t wanna be a princess, I’m priceless\nA prince not even on my list\nLove is a drug that I quit\nNo doctor could help when I’m lovesick",
        "playtime": 192,
        "albumId": 9,
        "album": {
            "id": 9,
            "title": "THE ALBUM",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/004/983/4983288.jpg?type=r360Fll&v=20201106182509"
        },
        "artist": {
            "id": 4,
            "name": "BLACKPINK"
        },
        "liked": 0
    },
    {
        "id": 1,
        "title": "Square",
        "lyrics": "All the colors and personalities\n모든 색깔과 성격들 \nyou can’t see right through what I truly am\n그것들 사이로는 내가 정말 어떤 사람인지 볼 수 없어\nyou’re hurting me without noticing \n넌 예고도 없이 나에게 상처를 주고 \nI’m so, so broke like someone just robbed me\n누가 날 털어간 것 마냥 부서진 것 같아\n\nI’m no invincible\n난 강한 사람이 아니야\nI have much memories of getting more weaker \n난 점점 약해져가는 기억들이 훨씬 많은 걸\nI know I’m not loveable\n나도 내가 사랑받을 수 없는 거 알아\nbut you know what you’d have to say\n그래도 네가 어떤 말을 해줘야 하는지 알지?\n\n\n“Come on let’s go to bed \n“나와 같이 침대로 가자 \nwe gonna rock the night away\n우린 이 밤을 신나게 보낼 거야\nwho did that to you, babe\n누가 너에게 그런 짓을 한 거야\nIf you’re not in the right mood to sleep now then, \n네가 당장 잠들 수 있는 기분이 아니라면 \nCome on, let’s drink and have very unmanageable day \n나와서 나랑 한잔하고, 감당하기 힘든 하루를 보내자!\nwould you want me in bae\n내가 거기 있길 바라?\nIf you’re not in the right mood to sleep now then \n네가 당장 잠들 수 있는 기분이 아니라면 \ncome take my arms and go \n나와 함께 가자!\nI’II be yours for sure”\n내가 너의 것이 되어줄게!” ",
        "playtime": 261,
        "albumId": 10,
        "album": {
            "id": 10,
            "title": "Every letter I sent you.",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
        },
        "artist": {
            "id": 5,
            "name": "백예린"
        },
        "liked": 0
    },
    {
        "id": 2,
        "title": "Popo (How deep is our love?)",
        "lyrics": "Get away from your own sorrow\n슬픔에서 벗어나봐요\nLet the sun come through your window\n당신의 창문에 햇살이 들어오게 해봐요\nYou don’t have to open up wide \n마음을 활짝 열 필요는 없지만\nBut I want to intimate\n전 가까워지고 싶어요 \n\n\nYou’ll never know how much your voice attracts me, boy\n당신은 당신 목소리가 날 얼마나 끌리게 하는지 모를 거예요\nIt’s exceptional\n정말 특별해요\nEspecially, when you’re playing the song for me\n특히 날 위해 곡을 연주할 땐\nI can’t take my eyes away\n눈을 뗄 수 없어요\n\n\nCan I walk with you? \n당신과 걸을 수 있을까요\nor have a tea with you\n차를 마셔도 좋아요\nYour scent makes me feel like I live in Paris \n당신의 향기는 내가 마치 파리에 살고 있는 것처럼 느끼게 해요\nCan I love you?\n사랑해도 될까요?\ngiving my all to you?\n내 전부를 다 주는 것도요 \nyou \n당신에게요",
        "playtime": 261,
        "albumId": 10,
        "album": {
            "id": 10,
            "title": "Every letter I sent you.",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
        },
        "artist": {
            "id": 5,
            "name": "백예린"
        },
        "liked": 0
    },
    {
        "id": 3,
        "title": "0310",
        "lyrics": "You smoked and you looked at me\n넌 담배를 피며 날 쳐다봤어\nI hate it when you do \n난 네가 그럴 때가 싫더라\nI said “no thanks” to you\n난 됐다고 말했고 \nyou asked me If I was okay,\n넌 괜찮냐 물었지 \nwhat If I wasn’t \n안 괜찮다면 뭐 어때 \n\nLeaving is fine \n떠나도 괜찮아\nIt’s just I don’t wanna be all by myself again\n난 그냥 또 다시 혼자가 되고 싶지 않은데\nlike every time, like every last time\n항상 그랬듯, 항상 그전처럼 말야\n\nYou knew that I was no good for you \n넌 내가 너에게 좋지 않을 거란 걸 알았어\nwhen we lay down after doing that things you loved \n네가 좋아하던 것들을 하고나서 누워있을 때 말야 \nyou knew that I wasn’t better than you \n넌 내가 너보다 나은 사람이 아닌 걸 알고 있었어 \nI hope that I could be seemed really fine with you leaving \n네가 떠나도 괜찮아 보일 수 있으면 좋겠어",
        "playtime": 250,
        "albumId": 10,
        "album": {
            "id": 10,
            "title": "Every letter I sent you.",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
        },
        "artist": {
            "id": 5,
            "name": "백예린"
        },
        "liked": 0
    },
    {
        "id": 4,
        "title": "그냥",
        "lyrics": "keep callin' to me\n왜 인지는 묻지 말아 주면은 안돼?\njust text me \n밥은 잘 먹고 있는지에 대해\n뭔들 난 다 좋아\n별거 없는 그런 삶\nim so sick of these days\n말해 줘 너의 밤은 어때\n또 너의 날은 어떻고?\n나의 시간은 못 돼서\n다시 이 굴레에 날 가둬  \n이 밤은 또 내껄\n자꾸만 뺏으려 들어\nwhere should i go right now? \n\n뭘 쥐어도 다 모래\n결국 흐르니 난 뭘 해?  \n못 된 생각이 인내를 놓을땐 \n도태 되는거야 no thanks\n가지면 뭐해\ni got nothing to prove no\n사랑을 할래\n위기는 모르는 채로 oh \n너 불안정한 내게\n자꾸 깊은 믿음을 심어주지마\n나도 모르는 새에\n널 내 안에 들여놓고 착각 할지도 몰라\n\npainful thoughts \nin ma head \n다 모순인 거야\n비운의 틈새로\n나 겨울의 냄새를 맡고파\npainful thoughts\nim ma head \n다 거짓인 거야\n난 그저 여름의 향수에만 잠깐 젖고파\ncuz im bored\n아늑하기만 한\n나의 방은 어두워서\n상처는 아물지  않아\n날 봐줘\n저 멀리 가고 있는\n날 보게 된다면은 붙잡아줘 ",
        "playtime": 217,
        "albumId": 11,
        "album": {
            "id": 11,
            "title": "그냥",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg"
        },
        "artist": {
            "id": 3,
            "name": "이영지"
        },
        "liked": 0
    },
    {
        "id": 6,
        "title": "암실",
        "lyrics": "농도가 아주 짙은\n랩을 뱉어도\n네 안에 쌓인 독\n덜어 낼 수 없어\n팔리는 음악은\n누가 찍어\n모자란 걸\n양심을 잃은 돈 거머쥘 수 없어\n\n더 벌어서\n더 버려 벗겨지는 마음\n개나 준 채로 숨어 암전 속으로\n나 바뻐\n좌절도 늘 그랬듯이 힘이 쭉 빠져\n밉상이니 맘껏 비웃어\n\n난 찾아야 돼 exit 작업실 의자 뒤에\n문 말고 딜레마 속 지랄맞은 굴레 i mean\n지피지기 면백전 백승 은 나발이고\n다물어 이 방 안에 내 적은 나뿐임\nuh 나는 나를 알아 점점 퇴보해 가\n구멍난 스타킹 안 꿰매 신어도 되는데\n나 왜이리 빈곤한 걸까\n묻지 말아줘 맘이 공허한 걸까\n\n아직 잃을 준비가 안 된 것 같아서 좀 많이 두려워\n돈 명예 시계 전부 얻어도 날 다 채울 수 가 없으니\n더 날 불러줘 막연한 회의감 가득한 방 안에서도 듣게끔\n\nplease 날 나가게 해줘\n좀 더 잃을 게 많아져도\ni can't do this no more\nso please 날 나가게 해줘\n날 지워낸 다음 덮어내 다시\nblack 을 제외한 색깔로 more\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘",
        "playtime": 152,
        "albumId": 12,
        "album": {
            "id": 12,
            "title": "암실",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg"
        },
        "artist": {
            "id": 3,
            "name": "이영지"
        },
        "liked": 0
    },
    {
        "id": 7,
        "title": "Only One",
        "lyrics": "멀어져만 가는 그대 You’re the only one \r\n내가 사랑했던 것만큼 You’re the only one \r\n아프고 아프지만 바보 같지만 Good bye \r\n다시 널 못 본다 해도 You’re the only one \r\nOnly One \r\n\r\n어색하게 마주앉아 사소한 얘기로 안부를 묻고 \r\n가끔 대화가 끊기는 순간에는 \r\n차가운 정적 우릴 얼게 만들어 \r\n\r\n지금 이 자리에서 우리는 남이 되겠지 \r\n어느 누군가는 눈물 흘리며 남겠지만 \r\n상처 주지 않으려고 자꾸 애를 써가면서 \r\n눈치 보는 니 모습 싫어 So I’ll let you go \r\n\r\n내 사랑 이제는 안녕 You’re the only one (You’re the only one) \r\n이별하는 이 순간에도 You’re the only one \r\n아프고 아프지만 바보 같지만 Good bye \r\n다시 널 못 본다 해도 You’re the only one \r\nOnly One \r\nYou’re the only one, Only One\r\n\r\n(only one,only one)\r\n\r\n갑작스런 나의 말에 왠지 모르게 넌 안심한듯 해 \r\n어디서부터 우린 이렇게 잘못된 걸까 \r\n오래 전부터 다른 곳만 기대한 건 아닌지 \r\n\r\n너무 다른 시작과 끝의 그 날카로움이 \r\n내 심장을 찌르는 아픔은 왜 똑같은지 \r\n벅찬 가슴이 한 순간에 공허하게 무너져서 \r\n이런 내 모습 어떻게 일어설까 \r\n\r\n내 사랑 이제는 안녕 You’re the only one (Only One) \r\n이별하는 이 순간에도 You’re the only one \r\n아프고 아프지만 바보 같지만 Good bye (Good bye) \r\n다시 널 못 본다 해도 You’re the only one (You’re the only one) \r\n\r\n내 머릿속은 언제쯤 너를 지울까 (I will let you go) \r\n하루 이틀 한달, 멀게는 아마 몇 년쯤 (My baby can't forget) \r\n그리고 언젠가 너의 기억 속에는 \r\n나란 사람은 더 이상 살지 않겠지 지우겠지 \r\n\r\nOnly One, Only One \r\nYou’re the only one, Only One",
        "playtime": 217,
        "albumId": 13,
        "album": {
            "id": 13,
            "title": "Only One",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/000/326/326356.jpg?type=r480Fll&v=20201113025511"
        },
        "artist": {
            "id": 7,
            "name": "보아"
        },
        "liked": 0
    },
    {
        "id": 8,
        "title": "Not Over U",
        "lyrics": "Take me away 손목에 채워진 시계를 봐\r\n여느 때와 다름없이 긴 침묵은 또 날 찾아와\r\n저기 오는 기차가 내 앞을 지나가고\r\n지금이 또 지나면 다음이 올 거란 믿음에 난 살아\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길\r\n그건 별거 아냐 단지 혼자 기억을\r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\n앞서 걷는 그림자가 내게 손짓하며\r\n저 좁은 길모퉁이 그곳으로 날 데려가고 (난 따라나서)\r\n눈에 선한 두 사람이 아직 저기 보여\r\n누구보다 아름다운 모습은 꽤 행복해 보여\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길 \r\n그건 별거 아냐 단지 혼자 기억을 \r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you \r\n \r\nOh Oh Oh Oh Oh 내 곁에 넌 없지만\r\nOh Oh Oh Oh Oh 여전히 넌 내 안에 있어\r\nOh Oh Oh Oh Oh 오늘도 하늘은 맑은데\r\nOh Oh Oh Oh Oh 내 눈에 비가 내려 Oh\r\n\r\n기억은 참 슬퍼 이젠 지금이 아닌\r\n지난 시간이라고 날 알게 해\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you ",
        "playtime": 180,
        "albumId": 13,
        "album": {
            "id": 13,
            "title": "Only One",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/000/326/326356.jpg?type=r480Fll&v=20201113025511"
        },
        "artist": {
            "id": 7,
            "name": "보아"
        },
        "liked": 1
    }],
    nowPlaying: {
        "id": 5,
        "title": "Lovesick Girls",
        "lyrics": "영원한 밤\n창문 없는 방에 우릴 가둔 love\nWhat can we say\n매번 아파도 외치는 love\n\n다치고 망가져도 나\n뭘 믿고 버티는 거야\n어차피 떠나면 상처투성인 채로 미워하게 될걸\n끝장을 보기 전 끝낼 순 없어\n이 아픔을 기다린 것처럼\n\n아마 다 잠깐 일지도 몰라\n우린 무얼 찾아서 헤매는 걸까\n\nBut I don’t care I’ll do it over and over\n내 세상 속엔 너만 있으면 돼\n\nWe are the lovesick girls\n네 멋대로 내 사랑을 끝낼순 없어\nWe are the lovesick girls\n이 아픔 없인 난 아무 의미가 없어\n\nBut we were born to be alone\nYeah we were born to be alone\nYeah we were born to be alone \nBut why we still looking for love\n\nNo love letters, no x and o’s\nNo love never, my exes know\nNo diamond rings, that set in stone\nTo the left, better left alone\n\nDidn’t wanna be a princess, I’m priceless\nA prince not even on my list\nLove is a drug that I quit\nNo doctor could help when I’m lovesick",
        "playtime": 192,
        "albumId": 9,
        "album": {
            "id": 9,
            "title": "THE ALBUM",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/004/983/4983288.jpg?type=r360Fll&v=20201106182509"
        },
        "artist": {
            "id": 4,
            "name": "BLACKPINK"
        },
        "liked": 0
    },
    playTime: 0
}

export const playNextTrack = () => {
    return {
        type: 'PLAY_NEXT_TRACK',
    }
}

export const playPrevTrack = () => {
    return {
        type: 'PLAY_PREV_TRACK',
    }
}

export const addToUpNext = (data) => {
    return {
        type: 'ADD_TO_UPNEXT',
        data
    }
}

export const addToUpNextAndPlay = (data) => {
    return {
        type: 'ADD_TO_UPNEXT_AND_PLAY',
        data
    }
}

const getNextTrack = (state) => {
    const nowPlayingIdx = state.upNextTracks.findIndex(t => t.id === state.nowPlaying.id);
    const nextTrackIdx = nowPlayingIdx === state.upNextTracks.length - 1 ? nowPlayingIdx : nowPlayingIdx + 1;
    return state.upNextTracks[nextTrackIdx];
}

const getPrevTrack = (state) => {
    const nowPlayingIdx = state.upNextTracks.findIndex(t => t.id === state.nowPlaying.id);
    const prevTrackIdx = nowPlayingIdx == 0 ? nowPlayingIdx : nowPlayingIdx - 1;
    return state.upNextTracks[prevTrackIdx];
}

const reducer = (state: MusicPlayer = initialState, action) => {
    switch (action.type) {
        case 'PLAY_NEXT_TRACK':
            const nextTrack = getNextTrack(state);
            return {
                ...state,
                playTime: 0,
                nowPlaying: nextTrack
            }
        case 'PLAY_PREV_TRACK':
            const prevTrack = getPrevTrack(state);
            return {
                ...state,
                playTime: 0,
                nowPlaying: prevTrack
            }
        case 'ADD_TO_UPNEXT':
            return {
                ...state,
                upNextTracks: [...state.upNextTracks, ...action.data],
            }
        case 'ADD_TO_UPNEXT_AND_PLAY':
            return {
                upNextTracks: [...state.upNextTracks, ...action.data],
                playTime: 0,
                nowPlaying: action.data[0]
            }
        default: 
            return state;
    }
}

export default reducer;