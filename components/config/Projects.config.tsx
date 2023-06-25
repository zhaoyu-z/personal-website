export const header = "Explore My Projects...";

const pathPrefix = "../../projectLogos/";

const imageTitle = "Click to View on Github";

export const projects = [
    {
        image: pathPrefix + "project-euler.jpg",
        // imageTitle: "Project Euler Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "28.76%",
        name: "Project Euler",
        description: "My Project Euler Solutions",
        techs: ["Python", "Markdown"],
        link: "https://github.com/Zhayu517/project-euler"
    },
    {
        image: pathPrefix + "optimizing_minimal_counterexamples.jpg",
        // imageTitle: "Optimizing Minimal Counterexamples Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "44.09%",
        name: "Optimizing Minimal Counterexamples",
        description: "Understanding Program Bugs in Java",
        techs: ["Java", "Cyber Security", "JPF"],
        link: "https://github.com/Zhayu517/Optimizing-minimal-counterexamples"
    },
    {
        image: pathPrefix + "stendhal.jpg",
        // imageTitle: "Stendhal Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "71.49%",
        name: "Stendhal",
        description: "A local enhancement of Stendhal game, with some features implemented and searching algorithm improvements.",
        techs: ["Java", "Javascript", "HTML"],
        link: "https://github.com/Zhayu517/Stendhal-Local-Enhancement"
    },
    {
        image: pathPrefix + "road_tracking_in_aerial_images.png",
        // imageTitle: "Road Tracking in Aerial Images Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "50.25%",
        name: "Road Tracking in Aerial Images",
        description: "Extract Roads From Aerial Images",
        techs: ["Python", "Machine Learning", "U-NET", "Road Segmentation"],
        link: "https://github.com/Zhayu517/Road-Tracking-in-Aerial-Images"
    },
    {
        image: pathPrefix + "leaderfollower.png",
        // imageTitle: "Leader Follower Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "50%",
        name: "Leader Follower",
        description: "A program which plays repeated 2-person Stackelberg pricing games as the leader under imperfect information",
        techs: ["Java", "Python", "RMI", "Moving Window", "WLSWFF"], // WEIGHTED LEAST SQUARE WITH FORGETTING FACTOR
        link: "https://github.com/Zhayu517/LeaderFollower"
    },
    {
        image: pathPrefix + "social_media_analysis_text_mining.png",
        // imageTitle: "Social Media Analysis Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "50%",
        name: "Social Media Analysis",
        description: "An experiment conducted on Twitter, using Bag of Words and BiLSTM algorithms, focus solving three questions.",
        techs: ["Python", "SMA", "Text Mining", "BoW", "BiLSTM"],
        link: "https://github.com/Zhayu517/SMA-Text-Mining"
    },
    {
        image: pathPrefix + "mancala_player.png",
        // imageTitle: "Mancala Player Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "100%",
        name: "Mancala Player",
        description: "A program which plays Mancala game with another agent",
        techs: ["Python", "Java", "AI"],
        link: "https://github.com/Zhayu517/KalahPlayer"
    },
    {
        image: pathPrefix + "question_classifier.jpg",
        // imageTitle: "Question Classifier Logo",
        imageTitle: imageTitle,
        imageAspectRatio: "100%",
        name: "Question Classifier",
        description: "A question classifier which accpets a question and output a class of the given question",
        techs: ["Python"],
        link: "https://github.com/Zhayu517/Question-Classifier"
    },
]