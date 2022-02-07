import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const apiKey = 'cb604a560e57e5f7a41895e71fb4985d';
const dateStartA = '&primary_release_date.gte='
let dateStartB = '2021-11-23'
const dateEndA = '&primary_release_date.lte='
let dateEndB = '2022-01-22'
const genreA =  '&page=1&with_genres=';
let genreNum = "18"
let GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
                + apiKey
                + '&language=en-US';

@Component({
    templateUrl: './app.homepage.html',
    styleUrls: ['./app.component.css']
})

export class HomepageComponent {  _movieArray!: Array<any>;
    _genreArray!: Array<any>;
    _http:HttpClient;
    genreNumSelection!: string;
    pageSelection!: string;
    numOfPage!: number;
    pageArray: Array<number> = [];
    movArrOne: Array<any> = [];
    movArrTwo: Array<any> = [];
    movArrThree: Array<any> = [];
    movArrFour: Array<any> = [];
    movieArray5: Array<any> = [];
    _movieArray2!: Array<any>;
    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private http: HttpClient) {
        this._http = http;
    }

    ngOnInit() {
        this.getDateRange();
        this.getMovies();
        this.getGenres();
        
    }
    changePage(){
        if(this.pageSelection == "0"){
            this._movieArray2 = this.movArrOne
        }else if(this.pageSelection == "1"){
            this._movieArray2 = this.movArrTwo
        }else if(this.pageSelection == "2"){
            this._movieArray2 = this.movArrThree
        }else if(this.pageSelection == "3"){
            this._movieArray2 = this.movArrFour
        }
        
    }

    changeGenNum(){
        genreNum = this.genreNumSelection.split(" ")[0]

        this.getMovies();
    }

    getDateRange() {
        let today = new Date();
        dateEndB =  today.getFullYear()+ '-'
                    + ('0' + (today.getMonth()+1)).slice(-2) + '-'
                    + ('0' + today.getDate()).slice(-2); 
        let sixtyDaysAgo = new Date();
        sixtyDaysAgo.setDate( sixtyDaysAgo.getDate() - 30 );
        dateStartB = sixtyDaysAgo.getFullYear()+ '-'
                    + ('0' + (sixtyDaysAgo.getMonth()+1)).slice(-2) + '-'
                    + ('0' + sixtyDaysAgo.getDate()).slice(-2); 
    }


    getMovies() {    
      this._http.get<any>(baseURL + apiKey + dateStartA + dateStartB + dateEndA
        + dateEndB + genreA + genreNum)
      .subscribe({
          next: (data) => {
              let page = data.page;
              let totalPages = data.total_pages;
              console.log("Page number: " + page 
                  + " Total Pages: " + totalPages);
              this._movieArray  = data.results;
              this.numOfPage = totalPages/6;
              this.pageArray = []
              this.movArrOne = []
              this.movArrTwo = []
              this.movArrThree = []
              this.movArrFour = []

             for(let i=0; i<this.numOfPage; i++ ){
                this.pageArray.push(i)
             }
             for(let i=0; i<this._movieArray.length; i++ ){

                if(i < 4){
                    this.movArrOne.push(this._movieArray[i])
                }else if (i < 8){
                    this.movArrTwo.push(this._movieArray[i])
                }
                else if (i < 12){
                    this.movArrThree.push(this._movieArray[i])
                }
                else if (i < 16){
                    this.movArrFour.push(this._movieArray[i])
                }
                
             }
             this._movieArray2 = this.movArrOne
             this.pageSelection = "0"


          },
          error: (er) => { 
              // Let user know about the error.
              alert(er);
              console.error(er);
          }
      });
  }

  getGenres() {
      this._http.get<any>(GENRE_URL)
      .subscribe({
          next: (data) => {
              this._genreArray = data.genres;
            //   console.log(JSON.stringify(this._genreArray));
          },
          error: (er) => {
              // Let user know about the error.
              alert(er);
              console.error(er)
          }
      });
  }}