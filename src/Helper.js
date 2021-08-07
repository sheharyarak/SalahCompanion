// import QiyaamIcon from './poses/Namaz-0.png';
// import RukooIcon from './poses/Namaz-1.png';
// import QaumahIcon from './poses/Namaz-2.png';
// import SajdahIcon from './poses/Namaz-3.png';
// import JalsaIcon from './poses/Namaz-4.png';

import QiyaamIcon from './poses/Namaz-0.svg';
import RukooIcon from './poses/Namaz-1.svg';
import QaumahIcon from './poses/Namaz-2.svg';
import SajdahIcon from './poses/Namaz-3.svg';
import JalsaIcon from './poses/Namaz-4.svg';

import PrevIcon from './icons/navigate_before_black_24dp.svg';
import NextIcon from './icons/navigate_next_black_24dp.svg';
import PlayIcon from './icons/play_arrow_black_24dp.svg';
import PauseIcon from './icons/pause_black_24dp.svg';

// import { ReactComponent as QiyaamIcon} from './poses/Namaz-0.svg';
// import { ReactComponent as RukooIcon} from './poses/Namaz-1.svg';
// import { ReactComponent as QaumahIcon} from './poses/Namaz-2.svg';
// import { ReactComponent as SajdahIcon} from './poses/Namaz-3.svg';
// import { ReactComponent as JalsaIcon} from './poses/Namaz-4.svg';
// import { ReactComponent as PrevIcon} from './icons/navigate_before_black_24dp.svg';
// import { ReactComponent as NextIcon} from './icons/navigate_next_black_24dp.svg';
// import { ReactComponent as PlayIcon} from './icons/play_arrow_black_24dp.svg';
// import { ReactComponent as PauseIcon} from './icons/pause_black_24dp.svg';



// import Qiyam1 from './audio/Qiyam1.aac';
// import Qiyam2 from './audio/Qiyam2.aac';
// import Qiyam3 from './audio/Qiyam3.aac';
// import Jalsa1 from './audio/Jalsa1.aac';
// import Jalsa2 from './audio/Jalsa2.aac';
// import Rukoo from './audio/Rukoo.aac';
// import Qaumah from './audio/Qaumah.aac';
// import Sajdah from './audio/Sajdah.aac';
// import Rabih from './audio/RabihFirli.aac';
// import Qunoot from './audio/Qunoot.aac';

import Takbir from './audio/Final/Takbir.mp3';
import Sana from './audio/Final/Sana.mp3';
import Bismillah from './audio/Final/Bismillah.mp3';
import Fatiha from './audio/Final/Fatiha.mp3';
import Asr from './audio/Final/Asr.mp3';
import Rukoo from './audio/Final/Rukoo.mp3';
import Qaumah from './audio/Final/Qaumah.mp3';
import Sajdah from './audio/Final/Sajdah.mp3';
import RabihFirli from './audio/Final/RabihFirli.mp3';
import Ikhlas from './audio/Final/Ikhlas.mp3';
import Jalsa1 from './audio/Final/Jalsa1.mp3';
import Jalsa2 from './audio/Final/Jalsa2.mp3';
// import Kahf1 from './audio/Final/Kahf1.mp3';
// import Kahf2 from './audio/Final/Kahf2.mp3';
// import Qunoot from './audio/Final/Qunoot.mp3';
// import Kauser from './audio/Final/Kauser.mp3';

import MaazTakbir from 		'./audio/Maaz/Takbir.mp3';
import MaazSana from 		'./audio/Maaz/Sana.mp3';
import MaazBismillah from 	'./audio/Maaz/Bismillah.mp3';
import MaazFatiha from 		'./audio/Maaz/Fatiha.mp3';
import MaazAsr from 		'./audio/Maaz/Asr.mp3';
import MaazRukoo from 		'./audio/Maaz/Rukoo.mp3';
import MaazQaumah from 		'./audio/Maaz/Qaumah.mp3';
import MaazSajdah from 		'./audio/Maaz/Sajdah.mp3';
import MaazRabihFirli from 	'./audio/Maaz/RabihFirli.mp3';
import MaazJalsa1 from 		'./audio/Maaz/Jalsa1.mp3';
import MaazJalsa2 from 		'./audio/Maaz/Jalsa2.mp3';
import MaazIkhlas from 		'./audio/Maaz/Ikhlas.mp3';
import MaazQadr from 		'./audio/Maaz/Qadr.mp3';
import MaazKahf1 from 		'./audio/Maaz/Kahf1.mp3';
import MaazKahf2 from 		'./audio/Maaz/Kahf2.mp3';
import MaazQunoot from 		'./audio/Maaz/Qunoot.mp3';

const Poses = {

	qiyam: { 
		name: "Qiyaam‎",
		arabic: " قيام",
		img: <QiyaamIcon/>
	},
	rukoo: {
		name: "Rukoo",
		arabic: " رُكوع",
		img: <RukooIcon/>
	},
	qaumah: {
		name: "Qaumah",
		arabic: " قؤما",
		img: <QaumahIcon/>
	},
	sajdah: {
		name: "Sajdah‎",
		arabic: " سجدة",
		img: <SajdahIcon/>
	},
	jalsa: {
		name: "Jalsa",
		arabic: " جلسة",
		img: <JalsaIcon/>
	}
	
	
	// { //0 qiyam1
	// 	name: "Qiyaam‎",
	// 	arabic: " قيام",
	// 	img: QiyaamIcon,
	// 	mp3: Qiyam1
	// },
	// { //1 qiyam2
	// 	name: "Qiyaam‎",
	// 	arabic: " قيام",
	// 	img: QiyaamIcon,
	// 	mp3: Qiyam2
	// },
	// { //2 qiyaam3
	// 	name: "Qiyaam",
	// 	arabic: " قيام",
	// 	img: QiyaamIcon,
	// 	mp3: Qiyam3
	// },
	// { //3 rukoo
	// 	name: "Rukoo",
	// 	arabic: " رُكوع",
	// 	img: RukooIcon,
	// 	mp3: Rukoo
	// },
	// { //4 quamah
	// 	name: "Qaumah",
	// 	arabic: " قؤما",
	// 	img: QaumahIcon,
	// 	mp3: Qaumah
	// },
	// { //5 sajdah
	// 	name: "Sajdah‎",
	// 	arabic: " سجدة",
	// 	img: SajdahIcon,
	// 	mp3: Sajdah
	// },
	// { //6 jalsa1
	// 	name: "Jalsa",
	// 	arabic: " جلسة",
	// 	img: JalsaIcon,
	// 	mp3: Jalsa1
	// },
	// { //7 jalsa2
	// 	name: "Jalsa",
	// 	arabic: " جلسة",
	// 	img: JalsaIcon,
	// 	mp3: Jalsa2
	// },
	// { //8 rabihfirli
	// 	name: "Jalsa",
	// 	arabic: " جلسة",
	// 	img: JalsaIcon,
	// 	mp3: Rabih
	// },
	// {
	// 	//9 qunoot
	// 	name: "Qiyaam‎",
	// 	arabic: " قيام",
	// 	img: QiyaamIcon,
	// 	mp3: Qunoot
	// }	
};

const Audio = [
	Takbir, // 0
	Sana, // 1
	Bismillah, // 2
	Fatiha, //3,
	Asr, // 4
	Rukoo, // 5
	Qaumah, // 6
	Sajdah, // 7
	RabihFirli, // 8
	Jalsa1, // 9
	Jalsa2, // 10
	Ikhlas, // 11

	// Maaz
	MaazTakbir, // 12
	MaazSana, // 13
	MaazBismillah, // 14
	MaazFatiha, // 15,
	MaazAsr, // 16
	MaazRukoo, // 17
	MaazQaumah, // 18
	MaazSajdah, // 19
	MaazRabihFirli, // 20
	MaazJalsa1, // 21
	MaazJalsa2, // 22
	MaazIkhlas, // 23
	MaazQadr, // 24
	MaazKahf1, // 25
	MaazKahf2, // 26
	MaazQunoot // 27
	
];

function expand(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i],
            subkeys = key.split(/,\s?/),
            target = obj[key].someValue;
        delete obj[key];
        subkeys.forEach(function(key) { obj[key] = target; })
    }
    return obj;
}

const audioPoseMap = expand({
    "1, 2, 3, 2, 4, 11, 12, 13, 14, 15, 16, 24, 23, 25, 26, 27": {
        someValue : Poses.qiyam
    },
	"5, 17": {
		someValue: Poses.rukoo
	},
	"6, 18": {
		someValue: Poses.qaumah
	},
	"7, 19": {
		someValue: Poses.sajdah
	},
	"8, 9, 10, 20, 21, 22": {
		someValue: Poses.jalsa
	}
});

// console.log(audioPoseMap);
	
const Sequences = {
	//                                               ->1<-                                            ->2<-                            ->3<-                                   ->4<-
	4 : 						[0, 1, 2, 3, 2, 4, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 2, 3, 11, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 9, 0, 2, 3, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 2, 3, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 9, 10],
	3 : 						[0, 1, 2, 3, 2, 4, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 2, 3, 11, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 9, 0, 2, 3, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 9, 10],
	2 :							[0, 1, 2, 3, 2, 4, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 2, 3, 11, 0, 5, 6, 0, 7, 0, 8, 0, 7, 0, 9, 10],
	"3 (وتر‎)" :	 		     [12, 13, 14, 15, 14, 16, 12, 17, 18, 12, 19, 12, 20, 12, 19, 12, 14, 15, 14, 23, 12, 17, 18, 12, 19, 12, 20, 12, 19, 12, 14, 15, 14, 24, 12, 27, 12, 17, 18, 12, 19, 12, 20, 12, 19, 12, 21, 22],
	"2 (نفل)" :/* kahf*/	   [12, 13, 14, 15, 14, 25, 12, 17, 18, 12, 19, 12, 20, 12, 19, 12, 14, 15, 14, 26, 12, 17, 18, 12, 19, 12, 20, 12, 19, 12, 21, 22],
	// 2 : [0, 3, 2, 4, 5, 8, 5, 1, 3, 2, 4, 5, 8, 5, 7],
	// 3 : [0, 3, 2, 4, 5, 8, 5, 1, 3, 2, 4, 5, 8, 5, 6, 2, 3, 2, 4, 5, 8, 5, 7],
	// 4 : [0, 3, 2, 4, 5, 8, 5, 1, 3, 2, 4, 5, 8, 5, 6, 2, 3, 2, 4, 5, 8, 5, 2, 3, 2, 4, 5, 8, 5, 7],
	// "3 (vitr)" : [0, 3, 2, 4, 5, 8, 5, 1, 3, 2, 4, 5, 8, 5, 6, 2, 3, 9, 2, 4, 5, 8, 5, 7]
};

const Icons = {
	next: NextIcon,
	prev: PrevIcon,
	play: PlayIcon,
	pause: PauseIcon
}

export {Poses, Sequences, Audio, audioPoseMap, Icons};