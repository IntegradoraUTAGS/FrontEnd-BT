import { Component, OnInit } from '@angular/core';
//import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'] //,
  //providers: [NgbPaginationConfig]
})
export class StudentsComponent implements OnInit {

  //studentsList: Student[];
  //totalItems: number;
  //page: number;
  //previousPage: number;
  //showPagination: boolean;

  constructor() { }
    //private route: ActivatedRoute,
    //private studentService: StudentService,
    //private config: NgbPaginationConfig,
    //private router: Router) 
    //{
      //this.config.boundaryLinks = true;
    // }
  ngOnInit(): void {
    //this.page =1;
	  //this.previousPage =1;
    //this.fillStudents();
  }

//fillStudents(page:number) : void {
	  //this.studentService.getStudents(page).subscribe(
		  //data => {
			//if ((!data && !data.result) || (data && data.result && data.result.length ==0)) {
			  //this.studentsList = [];
			  //this.showPagination = false;
			//}
			//else {
			  //this.studentsList = data.result;
			  //this.totalItems = data.totalAmount;
			  //this.showPagination = true;
			//}

		  //},
		  //error => {
			// Aquí se debería tratar el error, bien mostrando un mensaje al usuario o de la forma que se desee.
		  //}
	//);
  //}

  //loadPage(page: number) {
    //if (page !== this.previousPage) {
      //this.previousPage = page;
      //this.fillStudents(this.page-1);
    //}
  //}
  //sortTable(prop: string) {
    //this.path = prop.split('.');
    //this.order = this.order * (-1); 
    //return false; 
  //}
  
 //getIcon(prop:string): string{
   // var iconClass = "fa fa-sort";
 
     //if(this.path.indexOf(prop) != -1)
     //{
      //iconClass = this.order===-1 ? 'fa fa-sort-down' : 'fa fa-sort-up';
     //}
     //return iconClass;
  //}

}
