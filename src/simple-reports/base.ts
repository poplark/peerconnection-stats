import { Condition, OriginalReport, Report, Reports } from '../report';

export class SimpleReports extends Reports {
  constructor(originReports: Array<OriginalReport>) {
    super(originReports);
  }

  protected _find(key: string, conditions?: Array<Condition>): number {
    const result: Array<Report> = this.find(key, conditions);
    if (result[0]) {
      return result[0].value as number;
    }
    return 0;
  }
}