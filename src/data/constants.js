import avatar1 from "/icons/avatars/bear.png";
import avatar2 from "/icons/avatars/boy.png";
import avatar3 from "/icons/avatars/cat.png";
import avatar4 from "/icons/avatars/gamer.png";
import avatar5 from "/icons/avatars/girl.png";
import avatar6 from "/icons/avatars/gorilla.png";
import avatar7 from "/icons/avatars/lion.png";
import avatar8 from "/icons/avatars/man.png";
import avatar9 from "/icons/avatars/meerkat.png";
import avatar10 from "/icons/avatars/woman.png";

import weightLoss from "/icons/goals/weight-loss.png";
import muscleGain from "/icons/goals/muscle-gain.svg";
import improveHealth from "/icons/goals/improve-health.svg";
import fatLossMuscleGain from "/icons/goals/fat-muscle.svg";
import others from "/icons/goals/others.svg";

import level1Card from "/images/levels/level1-card.jpg";

export const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
];

export const user = {
    avatar: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    mainGoal: "",
    units: "",
    height: "",
    weight: "",
    weightGoal: "",
    gender: "",
};

export const mainGoals = [
    {
        id: 1,
        label: "Lose Weight",
        img: weightLoss,
    },
    {
        id: 2,
        label: "Gain Muscle",
        img: muscleGain,
    },
    {
        id: 3,
        label: "Improve Health",
        img: improveHealth,
    },
    {
        id: 4,
        label: "Fat lose + Muscle gain",
        img: fatLossMuscleGain,
    },
    {
        id: 5,
        label: "Others",
        img: others,
    },
];

export const levels = [
    {
        level: 0,
        title: "Campfire",
        imageUrl: level1Card,
        isAvalilable: true,
    },
    {
        level: 1,
        title: "Nutrition",
        imageUrl: "",
        isAvalilable: false,
    },
    {
        level: 2,
        title: "Exercise",
        imageUrl: "",
        isAvalilable: false,
    },
    {
        level: 3,
        title: "Mindset",
        imageUrl: "",
        isAvalilable: false,
    },
    {
        level: 4,
        title: "Game plan",
        imageUrl: "",
        isAvalilable: false,
    },
].reverse();
