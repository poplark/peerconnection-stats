import { OriginalReport, Report, Reports } from '../report';
import { parse } from '../utils/parser';

export class SimpleReports extends Reports {
  constructor(originReports: Array<OriginalReport>) {
    super(originReports);
  }

  protected _find(key: string, condition?: {[key: string]: string | number | boolean}): number {
    const result: Array<Report> = this.find(key, condition);
    if (result[0]) {
      return parse('' + result[0].value) as number;
    }
    return -1;
  }
}