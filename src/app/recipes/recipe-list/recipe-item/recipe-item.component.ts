import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // @Input을 붙여 외부 컴포넌트로부터 입력받는 데이터임을 표시한다.
  @Input() index: number;

  ngOnInit(): void {}
}
