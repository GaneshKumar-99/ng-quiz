import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'QuizApp';

  ngOnInit(): void {
    for (let i = 1; i <= this.totalpages; i++) this.pages.push(i);
    this.startTimer();
  }

  questions = [
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
    {
      id: 5,
      question: 'What is HTML?',
      answer: [
        'Hyper Test Markup Language',
        'Hyper Text Markdown Language',
        'Hyper Text Markup Language',
        'None of the above',
      ],
    },
    {
      id: 6,
      question: 'What is CSS?',
      answer: [
        'Casgrading Style Sheet',
        'Cascading Style Sheet',
        'Casting Style Sheet',
        'None of the above',
      ],
    },
    {
      id: 7,
      question: 'What is SEO?',
      answer: [
        'Search Engine Operation',
        'Search Engine Organization',
        'Search Engine Optimization',
        'None of the above',
      ],
    },
    {
      id: 8,
      question: 'What is WWW?',
      answer: [
        'Wide World Web',
        'Web World Wide',
        'World Web Wide',
        'World Wide Web',
      ],
    },
    {
      id: 9,
      question: 'What is React?',
      answer: [
        'A Framework',
        'A Programming Language',
        'A Library',
        'All the above',
      ],
    },
    {
      id: 10,
      question: 'What is SQL?',
      answer: [
        'Structural Quantum Language',
        'Space Query Link',
        'Structured Query Language',
        'None of the above',
      ],
    },
  ];

  pages: number[] = [];
  currentPage = 1;
  totalpages = this.questions.length;
  timer: any;
  defaultTime: number = 10;
  selectedAnswer: { [key: number]: string } = {};

  // currentPage = 1;
  // totalPages = this.questions.length;
  // pages: number[] = [];

  // ngOnInit(){
  //   for(let i=1; i< this.totalPages; i++){
  //     this.pages.push(i);
  //   }
  // }

  // goToPage(page: number) {
  //   this.currentPage = page;
  // }

  // prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.defaultTime > 0) {
        this.defaultTime--;
      } else {
        clearInterval(this.timer);
        alert('Time is up, Click "NEXT" to move to the next question');
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.defaultTime = 10;
    this.startTimer();
  }

  goToPages(page: number) {
    this.currentPage = page;
    this.resetTimer();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.resetTimer();
    }
  }

  nextPage() {
    console.log(
      `Q${this.currentPage}:`,
      this.selectedAnswer[this.currentPage] || 'no answer selected'
    );

    if (this.currentPage < this.totalpages) {
      this.currentPage++;
      this.resetTimer();
    }
  }

  firstPage() {
    this.currentPage = 1;
    this.resetTimer();
  }

  lastPage() {
    this.currentPage = this.totalpages;
    this.resetTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
