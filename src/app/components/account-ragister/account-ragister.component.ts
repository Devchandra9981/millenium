import { Component } from "@angular/core";
import { RagisterModel } from "src/app/models/ragister.model";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'app-account-ragister',
  templateUrl: './account-ragister.component.html',
  styleUrls: ['./account-ragister.component.css']
})
export class AccountRagisterComponent {
  title = 'Test';
  heading = 'Millenuim'

  constructor(private service: AccountService) {

  }

  model = new RagisterModel();


  submit(): void {
    console.log(this.model);
    this.service.ragisterUser(this.model).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
