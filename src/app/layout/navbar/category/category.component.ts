import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories() {
    this.categories = this.categoryService.getCategories();
  }
  categoryService : CategoryService = inject(CategoryService);
  categories: Category[] | undefined;
  currentActivateCategory : Category = this.categoryService.getCategoriesByDefault();


}
