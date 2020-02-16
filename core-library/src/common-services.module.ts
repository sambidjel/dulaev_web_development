import { NgModule } from '@angular/core';

import { CommonPostgreSqlAbsService } from './common-postgre-sql-abs.service';
import { CommonPostgreSqlService } from './common-postgre-sql.service';

export { CommonPostgreSqlAbsService } from './common-postgre-sql-abs.service';
export { CommonPostgreSqlService } from './common-postgre-sql.service';

export const COMMON_POSTGRE_SQL_SERVICES_PROVIDER: any[] = [
  { provide: CommonPostgreSqlAbsService, useClass: CommonPostgreSqlService }
];


@NgModule({
  imports:[
  ],
  providers: [
    COMMON_POSTGRE_SQL_SERVICES_PROVIDER,
  ]
})
export class CommonServicesModule {}
