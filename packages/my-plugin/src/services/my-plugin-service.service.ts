import { myCommon } from '@hyperse/my-common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyPluginService {
  getMessage() {
    return myCommon();
  }
}
