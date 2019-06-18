import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {

  private products: Product[] = [
    {
      'id': '1505a93e-bc9e-4d55-90d3-33fcec33674d',
      'isActive': true,
      'price': '64.85',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 8,
      'category': 'electronic',
      'name': 'Reprehenderit consequat elit cillum magna voluptate amet ad officia do ad proident.',
      'description': 'Sit irure pariatur nulla sit pariatur nulla. Laborum proident ad culpa excepteur eu irure eiusmod Lorem tempor non veniam in consectetur. Sunt eiusmod adipisicing eu ad nostrud velit dolor ea cillum ut qui elit adipisicing.\n\nAdipisicing laborum labore in esse excepteur dolore ut qui do commodo sit. Exercitation sunt in aute officia nostrud ut incididunt sit culpa consequat in aliqua. Irure sunt commodo excepteur nisi adipisicing ullamco ea consectetur commodo cillum. Sit proident excepteur aliquip eiusmod aliquip ipsum ea aliquip cupidatat consectetur.',
      'created': 1553640169515,
      'createdBy': ''
    },
    {
      'id': 'f50a9c4a-2bd9-49e5-a312-2339a749e6e8',
      'isActive': false,
      'price': '45.88',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 35,
      'category': 'others',
      'name': 'Aliquip ullamco voluptate culpa veniam est magna occaecat officia.',
      'description': 'Ex cupidatat enim in tempor aliqua ullamco ea. Aliquip nostrud nisi nostrud culpa magna sint veniam. Ea in voluptate est sint magna pariatur labore aliqua. Non officia voluptate dolor et nostrud. Commodo ullamco culpa deserunt nisi aute ex. Ad velit cillum do cupidatat magna sit.\n\nIpsum irure qui reprehenderit nisi reprehenderit adipisicing et laborum id magna elit irure sit. Qui culpa consectetur elit ipsum magna aliquip sit velit. Sit ipsum sunt deserunt quis incididunt duis quis qui. Aliqua eu et do sint mollit et incididunt ipsum quis ut. Amet laboris commodo exercitation exercitation esse. Nostrud labore veniam ipsum et occaecat mollit sit esse. Id irure ad ullamco veniam incididunt qui commodo.',
      'created': 1552845089383,
      'createdBy': ''
    },
    {
      'id': 'b1161e93-0c6c-404a-aa36-0b48d9a62556',
      'isActive': true,
      'price': '75.91',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 34,
      'category': 'food',
      'name': 'Elit aute qui officia magna aliquip do in elit sint tempor tempor excepteur.',
      'description': 'Exercitation nostrud laboris adipisicing mollit minim esse sunt consectetur amet laborum ullamco commodo sunt proident. Elit eu aliquip qui et excepteur officia velit qui consectetur laborum officia ullamco consequat quis. Ea do sunt velit cupidatat ut dolor nostrud dolore proident consectetur aliquip eiusmod. Occaecat nostrud exercitation reprehenderit id elit ipsum. Lorem adipisicing eu voluptate nulla do enim aliquip irure cupidatat officia qui ut. Labore et non nulla ullamco Lorem reprehenderit sit ad dolore elit ullamco Lorem voluptate.\n\nMollit voluptate aute reprehenderit sint aliquip consectetur aliqua do tempor non velit tempor cillum. Proident minim sint est duis duis. Non aliqua sint enim minim ipsum minim velit ad elit. Minim est duis nisi sit do dolore labore nisi. Quis ea irure Lorem laborum enim aute ad. Mollit ipsum ea pariatur fugiat ullamco.',
      'created': 1553377229876,
      'createdBy': ''
    },
    {
      'id': '52964a37-56a7-4b2b-8096-e4b5e7514a13',
      'isActive': true,
      'price': '86.48',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 6,
      'category': 'food',
      'name': 'Consequat ad aute minim sint irure do et anim id officia eiusmod commodo officia.',
      'description': 'Cillum nostrud cillum dolor do laborum. Sit non commodo laborum occaecat. Ex duis reprehenderit culpa cupidatat quis aliqua cupidatat proident excepteur elit duis. Fugiat voluptate proident occaecat consectetur exercitation.\n\nAmet aliqua elit amet sunt. Laborum sint mollit est commodo deserunt incididunt proident nisi tempor occaecat quis amet proident adipisicing. Cupidatat elit eiusmod cillum veniam fugiat. Aute sint aute velit cupidatat deserunt.',
      'created': 1548310248133,
      'createdBy': ''
    },
    {
      'id': 'cfc386f3-cdac-47c5-b0a4-24997320e7a6',
      'isActive': true,
      'price': '58.72',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 25,
      'category': 'others',
      'name': 'Anim nisi laborum commodo ea velit dolor occaecat deserunt ullamco exercitation.',
      'description': 'Ad deserunt ipsum eiusmod dolor. Non in sunt sint consectetur. Fugiat duis mollit reprehenderit ut aliquip culpa sit Lorem aliqua exercitation ut. Nostrud sunt sint deserunt laboris consequat Lorem est eu magna aliqua. Occaecat ut nulla reprehenderit ad ullamco tempor sunt.\n\nEsse commodo dolore consequat est esse aliqua dolore ad do cillum tempor. Proident cillum eiusmod aute occaecat officia cillum. Exercitation in est voluptate commodo.',
      'created': 1548025597703,
      'createdBy': ''
    },
    {
      'id': 'ec8cc12a-cf45-40f4-a87f-bf2a8f41ab4b',
      'isActive': true,
      'price': '76.22',
      'avatar': 'https://picsum.photos/150',
      'itemsAvailable': 27,
      'category': 'others',
      'name': 'Fugiat cupidatat quis commodo aliqua laboris consequat sunt aliquip sunt fugiat.',
      'description': 'Reprehenderit velit magna ut labore ut quis magna irure excepteur cillum pariatur Lorem exercitation. Dolore proident culpa fugiat amet quis non magna mollit pariatur. Duis laborum fugiat pariatur Lorem quis ex non non aliqua nisi ut eiusmod in. Dolor aliquip eiusmod esse amet eiusmod nisi. Aliquip labore eu nisi nostrud occaecat excepteur id laborum laboris Lorem deserunt exercitation. Ullamco ad minim sint ipsum sit voluptate ullamco sit non sunt adipisicing. Officia veniam labore consectetur ut est est.\n\nSunt culpa sunt voluptate id ad officia mollit officia quis pariatur exercitation voluptate irure. Anim exercitation aliquip commodo nostrud sint proident cupidatat pariatur tempor reprehenderit id sunt non esse. Sit nulla cillum consequat cupidatat et nisi anim aliquip commodo non ad cupidatat ea cupidatat. Id fugiat consequat ex velit consectetur.',
      'created': 1549503280511,
      'createdBy': ''
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  get products$() {
    return this.productsSubject.asObservable();
  }

  constructor() {
  }

  getProducts() {
    return this.products;
  }
}
