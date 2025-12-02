import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../meal-service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url-pipe';

@Component({
  selector: 'app-meal-details-component',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './meal-details-component.html',
  styleUrl: './meal-details-component.scss',
})
export class MealDetailsComponent implements OnInit {
  public meal: any;
  id: string;

  constructor(private route: ActivatedRoute, private mealService: MealService, private cdr: ChangeDetectorRef) {
     this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    
    this.mealService.getMealById(this.id).subscribe((res: any) => {
      if(res){
        this.meal = res;
        this.cdr.detectChanges();
         console.log(this.meal)
      }
    });
  }
}
