export const header = "Explore My Projects...";

const pathPrefix = "../../projectLogos/";

const imageTitle = "Click to View on Github";

export const projects = [
    {
        image: pathPrefix + "project-euler.png",
        name: "Project Euler",
        description: "My Project Euler Solutions",
        techs: ["Python", "Algorithm", "Sieve of Erotosthenes", "Markdown"],
        link: "https://github.com/zhaoyu-z/project-euler"
    },
    {
        image: pathPrefix + "optimizing_minimal_counterexamples3.jpg",
        name: "Optimizing Minimal Counterexamples",
        description: "Understanding Program Bugs in Java",
        techs: ["Java", "Cyber Security", "JPF"],
        link: "https://github.com/zhaoyu-z/Optimizing-minimal-counterexamples"
    },
    {
        image: pathPrefix + "stendhal.jpg",
        name: "Stendhal",
        description: "A local enhancement of Stendhal game, with some features implemented and searching algorithm improvements.",
        techs: ["Java", "Javascript", "HTML"],
        link: "https://github.com/zhaoyu-z/Stendhal-Local-Enhancement"
    },
    {
        image: pathPrefix + "road_tracking_in_aerial_images.jpg",
        name: "Road Tracking in Aerial Images",
        description: "Extract Roads From Aerial Images",
        techs: ["Python", "Machine Learning", "U-NET", "Road Segmentation"],
        link: "https://github.com/zhaoyu-z/Road-Tracking-in-Aerial-Images"
    },
    {
        image: pathPrefix + "leader_follower.webp",
        name: "Leader Follower",
        description: "A program which plays repeated 2-person Stackelberg pricing games as the leader under imperfect information",
        techs: ["Java", "Python", "RMI", "Moving Window", "WLSWFF"], // WEIGHTED LEAST SQUARE WITH FORGETTING FACTOR
        link: "https://github.com/zhaoyu-z/LeaderFollower"
    },
    {
        image: pathPrefix + "social_media_analysis_text_mining2.png",
        name: "Social Media Analysis",
        description: "An experiment conducted on Twitter, using Bag of Words and BiLSTM algorithms, focus solving three questions.",
        techs: ["Python", "NLP", "Text Mining", "BoW", "BiLSTM"],
        link: "https://github.com/zhaoyu-z/SMA-Text-Mining"
    },
    {
        image: pathPrefix + "mancala.jpg",
        name: "Mancala Player",
        description: "A program which plays Mancala game with another agent",
        techs: ["Python", "Java", "AI"],
        link: "https://github.com/zhaoyu-z/KalahPlayer"
    },
    {
        image: pathPrefix + "question_classifier.jpg",
        name: "Question Classifier",
        description: "A question classifier which accpets a question and output a class of the given question",
        techs: ["Python"],
        link: "https://github.com/zhaoyu-z/Question-Classifier"
    },
]

export const grid = {
    noOfRows: 4,
    noOfCols: 9,
    noOfElementsPerRow: 2, // smaller than noOfCols
    elementHeight: '500px',
    colWidth: '100px', 
    areas: ["0:5", "5:9", "0:4", "4:9", "0:5", "5:9", "0:4", "4:9"],
    columnGap: '32px',
    rowGap: '32px',
}