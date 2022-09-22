import React from 'react'
import './Languages.css'

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["Python", "Nodejs", "SQL", "JavsScript"]
    },
    {
      title: "Software",
      contents: ["Vscode", "Tableau", "Jupyter", "Notebook"]
    },
    {
      title: "Database",
      contents: ["PostgresQL", "AWS", "MongoDB"]
    },
  ]
  return (
    <section id="languages" data-aos="fade">
      {
        data.map(item => (
          <div className="languages-box" key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}

export default Languages