import {Component, OnInit} from '@angular/core';
import {Bulletin} from '../../../../domain/models/bulletin/Bulletin';
import {GetBulletinUseCase} from '../../../../domain/usecase/get-bulletin-usecase';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news.component.html',
  styleUrls: ['./index-news.component.sass']
})
export class IndexNewsComponent implements OnInit {
  public bulletins?: Array<Bulletin>;

  constructor(private _getBulletinUseCase: GetBulletinUseCase) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this._finalize();
  }

  public getListBulletins(): void {
    this._getBulletinUseCase.getListBulletins(0, 10).subscribe((resp) => {
      this.bulletins = resp.body!;
    })
  }

  private _initialize(): void {
    this.getListBulletins()
  }

  private _finalize(): void {
  }


}
