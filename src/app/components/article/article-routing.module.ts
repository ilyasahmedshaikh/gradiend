import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleListingComponent } from './article-listing/article-listing.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ArticleListingComponent
      },
      {
        path: 'article-listing',
        component: ArticleListingComponent
      },
      {
        path: 'article-details',
        component: ArticleDetailsComponent
      },
      {
        path: 'add-edit-article',
        component: AddEditArticleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
