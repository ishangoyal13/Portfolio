import emoji from 'react-easy-emoji';

const greeting = {
    username: "Ishan Goyal",
    title: "Hey there! I'm Ishan",
    subTitle: emoji(
        "Front End Developer 👨‍💻 | Student 🤖 | Chitkara University 🎓"
    )
}

const socialLinks ={
github:"https://github.com/ishangoyal13",
linkedin:"https://www.linkedin.com/in/ishan-goyal-99984a190/",
hackerrank:"https://www.hackerrank.com/ishangoyal13",
pinterest:"https://pinterest.com/ishangoyal1305",
twitter:"https://twitter.com/IshanGoyal1308",
instagram:"https://www.instagram.com/ishan_goyal13/",
whatsapp:"https://wa.me/919877228288",
facebook:"https://www.facebook.com/ishan.goyal1305"
}


const aboutSection={
    title:"  About Me",
    education:"Education",
    universityName:"  Chitkara University",
    universityDuration:" 2019-Present",
    school: "Schooling ",
    schoolName: "  DAV",
    schoolDuration:"  PreNur-2019",
    aboutPara1:"I am a second year student pursuing Computer Science Engineering at Chitkara University, Punjab. I am always ready to have new experiences, meet new people and learn new things.",
    aboutPara2:"I find the idea of creating value for people and impacting the world through my work. I am devoted to cultivating a positive and efficient team environment.",
}

const skillsSection = {
    title: "What i do",
    subTitle:
    "CURRENTLY STUDYING IN CHITKARA UNIVERSITY AND EXPLORING COMPUTER SCIENCE",
    skills: [
    emoji(
        "⚡ Working on data structures and algorithms of Java"
    ),
    emoji("⚡ Learning FrontEnd Development"),
    
    emoji(
        "⚡ Building predictive models to extract insights and make decisions out of data"
    ),
    ],
    
    softwareSkills: [
        {
            skillName: "HTML",
            classname: "logos:html-5",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "CSS",
            classname: "logos:css-3",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "C",
            classname: "logos:c",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "java",
            classname: "logos:java",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "reactJS",
            classname: "simple-icons:react",
            style: {
            color: "#61DAFB",
        },
        },
        {
            skillName: "git",
            classname: "logos:git-icon",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "JavaScript",
            classname: "logos:javascript",
            style: {
            backgroundColor: "transparent",
        },
        },
        {
            skillName: "GitHub",
            classname: "logos:github-icon",
            style: {
            backgroundColor: "transparent",
        },
        }
    ],
    };
    const contactSection={
        tittle:" QUERIES",
        phone:" CALL US",
        home:" LOCATION",
        email:"ishan.goyal1305@gmail.com",
        num:"9877228288",
        add:"Punjab, India"
    }
    const footerText={
        subTitle: emoji(
            "Made with ❤ by Ishan Goyal"
        )
    }


export default greeting;
export {aboutSection,skillsSection,contactSection,footerText,socialLinks};