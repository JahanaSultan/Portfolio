import React from "react";

function Works() {
  const myWorks = [
    {
      id: 1,
      title: "Quiz App",
      description:
        " I use opentdb.com API for questions. User input name and difficulty, after questions display. Every game has 10 questions.",
      use: ["Html", "CSS", "Javascript", "opentdb.com"],
      github: "https://github.com/JahanaSultan/Quiz-App-Javascript.git",
      link: "https://jahanasultan.github.io/Quiz-App-Javascript/",
    },
    {
      id: 2,
      title: "Random Hex Color",
      description:
        "Background color changes randomly and shows background color hex code. When clicking the stop button background stops changing..",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/Random-Hex-Color-With-Js.git",
      link: "https://jahanasultan.github.io/Random-Hex-Color-With-Js/",
    },
    {
      id: 3,
      title: "Directone Hotel Website Template",
      description: "Directone Hotel website, only use Html and Css.",
      use: ["Html", "CSS"],
      github: "https://github.com/JahanaSultan/Directone-Template.git",
      link: "https://jahanasultan.github.io/Directone-Template/",
    },
    {
      id: 4,
      title: "Standart Javascript Calculator",
      description: "Standart calculator project.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/Calculator-JS.git",
      link: "https://jahanasultan.github.io/Calculator-JS/",
    },
    {
      id: 5,
      title: "Analog Clock",
      description:
        "Analog watch project written with javascript and show time.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/AnalogClock.git",
      link: "https://jahanasultan.github.io/AnalogClock/",
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "Weather app use data openweather.com API. Search any city and see the result",
      use: ["Html", "CSS", "Javascript", "openweather.com"],
      github: "https://github.com/JahanaSultan/Weather-App.git",
      link: "https://jahanasultan.github.io/Weather-App/",
    },
    {
      id: 7,
      title: "Student Performance System",
      description:
        "This system has 3 login buttons: teacher, student, and admin. Students can see your information and marks, teachers know the group and group students. Add and update the mark. Admin can add teacher, student, lesson, and group.",
      use: ["Python", "Tkinter", "Sqlite"],
      github:
        "https://github.com/JahanaSultan/Tkinter-Student-Managment-with-Sqlite3.git",
      link: "",
    },
    {
      id: 8,
      title: "Unbeatable TicTacToe",
      description:
        "I use python Tkinter to visualize this game. This game has 2 play types: single players and 2 players. The single-player type has 2 difficulty levels: intermediate and advanced. Advanced level I use minimax algorithm and advance mode unbeatable.",
      use: ["Python", "Tkinter"],
      github: "https://github.com/JahanaSultan/TicTakToe.git",
      link: "",
    },
    {
      id: 9,
      title: "Hangman Game",
      description: "Simple Hangman Game with Python",
      use: ["Python"],
      github: "https://github.com/JahanaSultan/HangMan.git",
      link: "",
    },
  ];
  return (
    <>
      <section className="works padding-x" id="works">
        <div className="heading">
          <h1>
            <span>02.</span> My Works
          </h1>
        </div>
        <div className="boxes">
          {myWorks.map((e, i) => (
            <div className="box" key={i}>
              <div className="head">
                <i className="fa-regular fa-folder"></i>
                <a href={e.github} target="_blank" rel="noreferrer noopener">
                  <i className="fa-brands fa-github"></i>
                </a>
                {e.link ? (
                  <a target="_blank" rel="noreferrer noopener" href={e.link}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="content">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={e.link ? e.link : e.github}
                >
                  {" "}
                  <h2>{e.title}</h2>
                </a>
                <p>{e.description}</p>
              </div>
              <div className="use">
                <ul>
                  {e.use.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Works;
