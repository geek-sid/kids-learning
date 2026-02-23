import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Question {
  num1: number;
  num2: number;
  answer: number;
  answerOptions: number[];
  userAnswer: number | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
}

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.scss'
})
export class AdditionComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  showFeedback: boolean = false;
  feedbackMessage: string = '';
  feedbackType: 'correct' | 'wrong' | null = null;
  gameCompleted: boolean = false;
  showCelebration: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.generateQuestions();
  }

  generateQuestions() {
    this.questions = [];
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 50) + 1; // 1-20
      const num2 = Math.floor(Math.random() * (51 - num1)) + 1; // Ensure sum <= 20
      let answerOptions = this.generateAnswerOptions(num1 + num2);
     // this.cdr.detectChanges();
      this.questions.push({
        num1,
        num2,
        answer: num1 + num2,
        answerOptions: answerOptions,
        userAnswer: null,
        isAnswered: false,
        isCorrect: null
      });
    }
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  submitAnswer(answer: number) {
    if (this.currentQuestion.isAnswered) return;
    this.currentQuestion.userAnswer = answer;
    this.currentQuestion.isAnswered = true;
    this.currentQuestion.isCorrect = answer === this.currentQuestion.answer;

    if (this.currentQuestion.isCorrect) {
      this.score++;
      this.showFeedbackMessage('correct');
    } else {
      this.showFeedbackMessage('wrong');
    }

    setTimeout(() => {
      if (this.currentQuestionIndex < 9) {
        this.currentQuestionIndex++;
        this.showFeedback = false;
       // this.generateAnswerOptions();
      } else {
        this.completeGame();
      }
    }, 2000);
  }

  showFeedbackMessage(type: 'correct' | 'wrong') {
    this.showFeedback = true;
    this.feedbackType = type;
    
    if (type === 'correct') {
      const messages = ['🎉 Great job!', '🌟 Excellent!', '✨ Well done!', '🎊 Perfect!', '👏 Awesome!'];
      this.feedbackMessage = messages[Math.floor(Math.random() * messages.length)];
    } else {
      const messages = ['😔 Better luck next time!', '💪 Try again!', '🔄 Keep trying!', '👍 Don\'t give up!'];
      this.feedbackMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    setTimeout(() => {
      this.showFeedback = false;
    }, 2000);
  }

  generateAnswerOptions(answer:number):number[] {
    const correctAnswer = answer;
    const options = new Set<number>([correctAnswer]);
    
    // Generate wrong options that are close to the correct answer
    let attempts = 0;
    const maxAttempts = 10000;
    
    while (options.size < 4 && attempts < maxAttempts) {
      attempts++;
      // Generate numbers around the correct answer (±5 range)
      const offset = Math.floor(Math.random() * 11) - 5; // -5 to +5
      const wrongAnswer = correctAnswer + offset;
      
      // Ensure the wrong answer is positive and different from correct answer
      if (wrongAnswer > 0 && wrongAnswer <= 100 && wrongAnswer !== correctAnswer) {
        options.add(wrongAnswer);
      }
    }
    const optionsArray = Array.from(options);
    // Shuffle options using Fisher–Yates algorithm
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
    return optionsArray;
  }

  completeGame() {
    this.gameCompleted = true;
    if (this.score >= 8) {
      this.showCelebration = true;
    }
  }

  restartGame() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.gameCompleted = false;
    this.showCelebration = false;
    this.showFeedback = false;
    this.generateQuestions();
  }
}
