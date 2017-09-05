import { Component } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'app';

  constructor(meta:Meta, title: Title) {


  	title.setTitle('Our Very Professional Page');

  	meta.addTags([
  		{name: 'author', content: "Zach Maraziti"},
  		{name: 'keywords', content: 'angular seo, angular 4 universal, ect'},
  		{name: 'description', content: 'this is my angular SEO-based App, enjoy it'}

  		]);
  	}

  }



