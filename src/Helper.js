import QiyaamIcon from './poses/Namaz-0.png';
import RukooIcon from './poses/Namaz-1.png';
import QaumahIcon from './poses/Namaz-2.png';
import SajdahIcon from './poses/Namaz-3.png';
import JalsaIcon from './poses/Namaz-4.png';

import Qiyam1 from './audio/Qiyam1.mp3';
import Qiyam2 from './audio/Qiyam2.mp3';
import Qiyam3 from './audio/Qiyam3.mp3';
import Jalsa1 from './audio/Jalsa1.mp3';
import Jalsa2 from './audio/Jalsa2.mp3';
import Rukoo from './audio/Rukoo.mp3';
import Qaumah from './audio/Qaumah.mp3';
import Sajdah from './audio/Sajdah.mp3';
import Rabih from './audio/RabihFirli.mp3';


const Poses = [
	{ //0 qiyam1
		name: "Qiyaam قيام‎",
		img: QiyaamIcon,
		mp3: Qiyam1
	},
	{ //1 qiyam2
		name: "Qiyaam قيام‎",
		img: QiyaamIcon,
		mp3: Qiyam2
	},
	{ //2 qiyaam3
		name: "Qiyaam قيام‎",
		img: QiyaamIcon,
		mp3: Qiyam3
	},
	{ //3 rukoo
		name: "Rukoo رُكوع",
		img: RukooIcon,
		mp3: Rukoo
	},
	{ //4 quamah
		name: "Qaumah",
		img: QaumahIcon,
		mp3: Qaumah
	},
	{ //5 sajdah
		name: "Sajdah سجدة‎",
		img: SajdahIcon,
		mp3: Sajdah
	},
	{ //6 jalsa1
		name: "Jalsa",
		img: JalsaIcon,
		mp3: Jalsa1
	},
	{ //7 jalsa2
		name: "Jalsa جلسة",
		img: JalsaIcon,
		mp3: Jalsa2
	},
	{ //8 rabihfirli
		name: "Jalsa جلسة",
		img: JalsaIcon,
		mp3: Rabih
	},
];

const Sequences = {
	2 : [0, 3, 4, 5, 8, 5, 1, 3, 4, 5, 8, 5, 7],
	3 : [0, 3, 4, 5, 8, 5, 1, 3, 4, 5, 8, 5, 6, 2, 3, 4, 5, 8, 5, 7],
	4 : [0, 3, 4, 5, 8, 5, 1, 3, 4, 5, 8, 5, 6, 2, 3, 4, 5, 8, 5, 2, 3, 4, 5, 8, 5, 7],
};

export {Poses, Sequences};