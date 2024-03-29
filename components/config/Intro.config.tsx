export const backgroundImage = "../Homepage Background.png";

export const backgroundImageAlt = "Image of \"What Obsessed Me Shapes My Future\"";

type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;

type typingAnimationType = {
    sequence: (string | number)[],
    speed: Speed,
    deletionSpeed?: number,
    repeat: number
};

export const typingAnimation: typingAnimationType = {
    sequence: [
        'I\'m Zhaoyu Zhang',
        1000,
        'I\'m Creator and Leader',
        1000,
        'I\'m Designer and Coder',
        1000,
        'I\'m Engineer and Doer',
        1000,
    ],
    speed: 10,
    deletionSpeed: 80,
    repeat: Infinity
};

export const resetBackgroundImageIntervalInMilliSeconds = 1000;

type textLoopType = {
    prefix?: string,
    sequence: (string | number)[],
    interval: number,
    delay: number,
    fade: boolean,
    mask: boolean
}

export const textLoop: textLoopType = {
    prefix: "I'm",
    sequence: [
        'Zhaoyu Zhang',
        'Creator and Leader',
        'Designer and Coder',
        'Engineer and Doer',
    ],
    interval: 2000,
    delay: 0,
    fade: true,
    mask: false,
}