import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent implements OnInit {

  qid: any;
  qTittle: any;
  maxMarks:any;

  isSubmit= false;

  marksGot=0;
  correctAnswers=0;
  attempted = 0;
  public answer = '';
  
  questions : Questions[] = [];
  constructor(private route: ActivatedRoute, public http:HttpClient) { }

  ngOnInit(): void {
    this.preventBackButton();
     this.qid = this.route.snapshot.params['id'];
     this.qTittle = this.route.snapshot.params['tittle'];
     this.maxMarks = this.route.snapshot.params['maxMarks']
     this.getAllQuestions();
  }

  preventBackButton(){
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event)
    {
      history.pushState(null, document.title, location.href);
    });
  }


  getAllQuestions()
  {
    this.http.get<any>('http://localhost:8080/question/'+this.qid).subscribe(
      (response)=>{
        console.log(response)
        this.questions = response;
        this.questions.forEach((q)=>{
            q['givenAnswer'];
        });
      },
      (error)=>{
        console.log("Error in gating data");
      }
    );
  }

  onsubmit() {
   let yes = confirm("Do You Want To Sumbit Quiz");
   
   if(yes){
    this.isSubmit = true;
     this.questions.forEach((q)=>{
        if(q.givenAnswer == q.answer){
          this.correctAnswers++;
          let marksSingle = this.maxMarks / this.questions.length;
          this.marksGot += marksSingle;
        }

        if(q.givenAnswer.trim() !=''){
          this.attempted++;
        }
     })
     console.log("Correct Answer "+ this.correctAnswers);
     console.log("Marks Got = "+ this.marksGot);
     console.log("Attempted = "+ this.attempted);
   }

  }
}


export interface Questions {
 
  quesId : string,
  answer : string,
  givenAnswer : string,
  content : string,
  option1 : string,
  option2 : string,
  option3 : string,
  option4 : string,
  quiz: {
    qid:string,
  },
}

