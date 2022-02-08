import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, interval } from 'rxjs'
import { tap, debounce, switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search_word = new FormControl();
  isLoading = false;
  result_list: any;
  list = ['Hindi', 'Pop', 'Bollywood', 'Kollywood cream', 'EQUAL', 'Mood']
  constructor(private router: Router) { }

  ngOnInit() {
    this.search_word.valueChanges.pipe(
      tap(() => this.isLoading = true),
      debounce(() => interval(1000)),
      switchMap(value => this.search(value))
    ).subscribe(res => {
      this.result_list = res;
      this.isLoading = false;
    },
      err => {
        console.error(err.error);
      });
  }

  btnClick = function () {
    this.router.navigateByUrl('/song');
  };
  search(keyword: string): Observable<any> {
    console.log(keyword);
    const result = this.list.filter(e => e.indexOf(keyword) !== -1)
    return of(result)
  }
}
