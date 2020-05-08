import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-app';
  public name = 'Angular';
  public myId = "testId";
  tag = "calculator";
  firstNumber: number = 25;
  secondNumber: number = 50;

displayUserName()
{
  return "Hello " + this.name; 
}

addition()
{
  return this.firstNumber + this.secondNumber;
}

subtraction()
{
  return this.firstNumber - this.secondNumber
}

multiply()
{
  return this.firstNumber * this.secondNumber;
}

devide()
{
  return this.firstNumber / this.secondNumber;
}
Books  = ['H.C. Verma', 'M.S. Chouhan', 'O.P. Tundon', 'R.D. Sharma'];

public currentDate = new Date();
public Line = " precaution is better than cure ";


}


