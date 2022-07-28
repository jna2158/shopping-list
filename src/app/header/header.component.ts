import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // @Output을 선언하여 다른 컴포넌트로 방출되는 데이터임을 표시한다.
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature); // 부모 컴포넌트인 app.component.html로 데이터를 방출한다.
  }
}
