import React from 'react'
import QuizHelper from './QuizHelper'

const dataSet = [{
    question: 'When was the battle of panipat faught ?',
    options: ["1912" , "1911" , "1891" , "1872" , "None"],
    answer: '1912'
},
{
    question: 'Abhidhamma pitaka deals in which of the following?',
    options: ["members of great community" , "teachings of Buddha" , "moral code of conduct" , "matters of psychology and metaphysics" , "None"],
    answer: 'matters of psychology and metaphysics'
},
{
    question: 'Which among the following is not a correct pair?',
    options: ["Ellora Caves – Rastrakuta Rulers" , "Mahabalipuram – Pallava Rulers" , "Khajuraho – Chandellas" , " Elephanta Caves – Mauyra Era" , "None"],
    answer: ' Elephanta Caves – Mauyra Era'
},
{
    question: 'Which among the following is the most unique feature of Dholavira site of the Indus Valley Civilization?',
    options: ["Its cities were horizontally divided in multiple parts" , "Its cities were unevenly divided" , "Its cities were divided into 3 parts" , "All of them" , "None"],
    answer: 'Its cities were divided into 3 parts'
},
{
    question: 'During the reign of which Kushana king, the Fourth Buddhist Council was held?',
    options: ["Kanishka" , "Huvishka" , "Vasudeva" , "Vasishka" , "None"],
    answer: 'Kanishka'
}]


function Quiz() {
    return (
        <div>
            <QuizHelper data={dataSet} />
        </div>
    )
}

export default Quiz

//

