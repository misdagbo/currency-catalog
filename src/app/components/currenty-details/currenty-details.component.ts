import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currenty-details',
  templateUrl: './currenty-details.component.html',
  styleUrls: ['./currenty-details.component.css']
})
export class CurrentyDetailsComponent implements OnInit {

  constructor() { }



  // private loadPostDetails(): void {
  //   this.route.params.subscribe(params => {
  //     const id = +params['id'];
  //     this.contactService.getContact(id)
  //       .then(contact => {
  //         this.isLoading = false;
  //         this.contact = contact;
  //     });
  //   });
  // }

  ngOnInit() {
  }

}
