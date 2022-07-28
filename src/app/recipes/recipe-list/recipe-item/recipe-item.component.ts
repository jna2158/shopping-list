import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // @Input을 붙여 외부 컴포넌트로부터 입력받는 데이터임을 표시한다.
  @Output() recipeSelected = new EventEmitter<void>(); // 부모 컴포넌트인 recipe-list.component.html로 데이터를 방출한다.

  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
