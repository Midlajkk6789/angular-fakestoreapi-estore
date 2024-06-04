import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FakeapiService } from '../../fakeapi.service';

@Component({
  selector: 'app-singleelementpage',
  standalone: true,
  imports: [],
  templateUrl: './singleelementpage.component.html',
  styleUrl: './singleelementpage.component.css'
})
export class SingleelementpageComponent {
  constructor(private rooteId: ActivatedRoute,private api:FakeapiService){}
  data:any=[]

  ngOnInit(){
    this.api.getProducts().subscribe((res:any)=>{
      let id=this.rooteId.snapshot.paramMap.get("id")
      let responce=res
      let product=responce.filter((e:any)=>e.id==id)
      this.data=product[0]

    })
  }

}
