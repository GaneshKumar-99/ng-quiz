import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions(){
    return [
      {
        id: 1,
        question: 'What is Angular?',
        answer: [
          'Developed by google',
          'Written in typescript',
          'used for create SPA',
          'All the above',
        ],
      },
      {
        id: 2,
        question: 'What is TypeScript?',
        answer: [
          'Srongly Typed',
          'Superset of javascript',
          'support OOPS ',
          'All the above',
        ],
      },
      {
        id: 3,
        question: 'What is Bootstrap?',
        answer: [
          'CSS framework',
          'include lot of reusable classes',
          'Used for creating responsive web pages',
          'All the above',
        ],
      },
      {
        id: 4,
        question: 'What is Javascript?',
        answer: [
          'Used to create interaction on website',
          'Display animations and interactive maps',
          'Control multimedia',
          'All the above',
        ],
      },
    ];
  
  }

}
