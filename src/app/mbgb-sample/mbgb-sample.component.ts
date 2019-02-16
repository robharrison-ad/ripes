import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mbgb-sample',
  templateUrl: './mbgb-sample.component.html',
  styleUrls: ['./mbgb-sample.component.scss']
})
export class MbgbSampleComponent implements OnInit {
  sampleUsers: Array<any>;
  exampleCode: string = "<div>{{ dataUser.bytesUsed | rmbgb }}</div>";
  constructor() { }

  ngOnInit() {
    this.sampleUsers = [
      {
        userId: 4838,
        userInfo: {
          firstName: 'Jonathan',
          lastName: 'Johansen',
          departmentInfo: {
            departmentNumber: 16,
            departmentManager: {
              firstName: 'Martha',
              lastName: 'Washington'
            }
          }
        },
        bytesUsed: 785222468752.24
      },
      {
        userId: 930,
        userInfo: {
          firstName: 'Wendy',
          lastName: 'Witchazel',
          departmentInfo: {
            departmentNumber: 16,
            departmentManager: {
              firstName: 'Martha',
              lastName: 'Washington'
            }
          }
        },
        bytesUsed: 9042548853519752.47
      },
      {
        userId: 2018,
        userInfo: {
          firstName: 'Peter',
          lastName: 'Johnson',
          departmentInfo: {
            departmentNumber: 22,
            departmentManager: {
              firstName: 'Josephine',
              lastName: 'Lawren'
            }
          }
        },
        bytesUsed: 1047716
      },
      {
        userId: 1003,
        userInfo: {
          firstName: 'Cindy',
          lastName: 'Harper',
          departmentInfo: {
            departmentNumber: 22,
            departmentManager: {
              firstName: 'Josephine',
              lastName: 'Lawren'
            }
          }
        },
        bytesUsed: 48246884.61
      },
      {
        userId: 1607,
        userInfo: {
          firstName: 'Cindy',
          lastName: 'Harper',
          departmentInfo: {
            departmentNumber: 22,
            departmentManager: {
              firstName: 'Josephine',
              lastName: 'Lawren'
            }
          }
        },
        bytesUsed: 470122
      },
      {
        userId: 3409,
        userInfo: {
          firstName: 'Indianna',
          lastName: 'Hanover',
          departmentInfo: {
            departmentNumber: 22,
            departmentManager: {
              firstName: 'Josephine',
              lastName: 'Lawren'
            }
          }
        },
        bytesUsed: 19240843.51
      },
      {
        userId: 1512,
        userInfo: {
          firstName: 'Jackson',
          lastName: 'Michaels',
          departmentInfo: {
            departmentNumber: 16,
            departmentManager: {
              firstName: 'Martha',
              lastName: 'Washington'
            }
          }
        },
        bytesUsed: 4573551234.16
      },

    ];
  }
      
  

}
