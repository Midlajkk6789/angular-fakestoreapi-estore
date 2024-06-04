import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FakeapiService } from '../../fakeapi.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private api:FakeapiService){}
  products:any=""
  ngOnInit(){
    this.api.getProducts().subscribe((data:any)=>{this.products=data})
  }

}
